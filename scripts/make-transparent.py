from PIL import Image

def make_transparent_pil(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    
    for item in datas:
        r, g, b, a = item
        brightness = (r * 299 + g * 587 + b * 114) // 1000
        max_c = max(r, g, b)
        min_c = min(r, g, b)
        saturation = ((max_c - min_c) / max_c) if max_c > 0 else 0
        
        # If very close to cream background (high brightness and low saturation)
        if brightness > 244 and saturation < 0.08:
            new_data.append((r, g, b, 0))
        elif brightness > 230 and saturation < 0.08:
            # Soft smooth fade out
            alpha = int(255 * (1.0 - (brightness - 230) / (244 - 230)))
            new_data.append((r, g, b, max(0, min(255, alpha))))
        else:
            new_data.append((r, g, b, a))
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved: {output_path}")

make_transparent_pil("public/hero-victoria-left.jpg", "public/hero-victoria-left.png")
make_transparent_pil("public/hero-arch-right.jpg", "public/hero-arch-right.png")
make_transparent_pil("public/hero-floral-top-left.jpg", "public/hero-floral-top-left.png")
