# Image Setup Guide

## Required Images

To complete your portfolio website, you need to add the following image:

### 1. Profile Picture (`profile.jpg`)

**Location**: `/public/profile.jpg`

**Specifications**:

- Format: JPG, PNG, or WebP
- Recommended size: 800x800 pixels (minimum)
- Aspect ratio: 1:1 (square)
- File size: Under 2MB for optimal performance

**Usage**: This image is displayed on the home page as your main profile picture in a circular frame.

## How to Add Images

1. Navigate to the `/public` folder in your project
2. Add your AI-generated profile image
3. Rename it to `profile.jpg`
4. If you use a different name or format, update the image reference in `src/app/page.tsx`:

```typescript
// Find this line and update the src path
<Image
  src="/profile.jpg"  // Change this to your image name
  alt="Isuranga Warnasooriya"
  fill
  className="object-cover"
  priority
/>
```

## Optional Images

You can enhance your portfolio by adding more images:

### Project Screenshots

Create folders for project images:

```text
/public/projects/
  ├── firststep/
  ├── itw-computers/
  └── internify/
```

### Company Logos

```text
/public/logos/
  ├── wso2.png
  └── hypercube.png
```

## Image Optimization Tips

1. **Compress images**: Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. **Use appropriate formats**:
   - JPG for photos
   - PNG for images with transparency
   - WebP for best compression
3. **Resize before uploading**: Don't upload huge images and rely on CSS to resize them
4. **Use Next.js Image component**: Already implemented for automatic optimization

## Current Status

❌ `/public/profile.jpg` - **NEEDS TO BE ADDED**

Once you add this file, your portfolio will be complete and ready to deploy!

## Need Help?

If you encounter any issues with images:

1. Check the file name matches exactly (case-sensitive)
2. Ensure the image is in the `/public` folder, not in `/public/public`
3. Clear your browser cache and restart the dev server
4. Check the browser console for any error messages

---

**Remember**: All files in the `/public` folder are served from the root URL path. So `/public/profile.jpg` is accessed as `/profile.jpg` in your code.
