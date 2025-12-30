import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = supabaseUrl && supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
}) : null;

export async function POST(req: NextRequest) {
  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }
  try {
    const body = await req.json();
    // Fetch IP/location info server-side
    let locationData = {};
    try {
      const locRes = await fetch("https://ipapi.co/json/");
      if (locRes.ok) {
        const locJson = await locRes.json();
        locationData = {
          ip: locJson.ip,
          city: locJson.city,
          region: locJson.region,
          country: locJson.country_name,
          org: locJson.org,
        };
      } else {
        console.error("ipapi.co response not ok", locRes.status);
      }
    } catch (err) {
      console.error("Error fetching location info:", err);
    }
    // Merge client and server data
    const viewerData = {
      ...locationData,
      user_agent: body?.user_agent || null,
      visit_time: body?.visit_time || new Date().toISOString(),
    };
    // Ensure at least user_agent is present
    if (!viewerData.user_agent) {
      return NextResponse.json({ error: "Missing user_agent" }, { status: 400 });
    }
    const { data, error } = await supabase.from("viewers").insert([viewerData]);
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 });
  }
}
