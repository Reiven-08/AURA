import math
from PIL import Image, ImageEnhance, ImageOps

def create_lut(f_r, f_g, f_b):
    lut = []
    for f in (f_r, f_g, f_b):
        for i in range(256):
            val = int(max(0, min(255, round(f(i / 255.0) * 255.0))))
            lut.append(val)
    return lut

def generate_finishes():
    base_path = "a:/Reiven/project/AURA/public/images/aura-product.jpg"
    img = Image.open(base_path).convert("RGB")
    
    # -------------------------------------------------------------
    # 1. STONE FINISH:
    # Warm limestone / light ivory stone acoustic fabric with refined brushed aluminum
    # Keep background dark (below 0.05), lift speaker body (0.05 - 1.0) into light warm stone
    # -------------------------------------------------------------
    def stone_curve(x, tint):
        # Smooth threshold for background
        if x < 0.03:
            return x * 0.8
        # Smooth transition into speaker body
        t = (x - 0.03) / 0.97
        # Lift midtones and shadows into warm off-white / stone
        lifted = math.pow(t, 0.45) * 0.78 + t * 0.22
        # Apply warm stone tint
        return lifted * tint

    lut_stone = create_lut(
        lambda x: stone_curve(x, 1.00), # Red
        lambda x: stone_curve(x, 0.96), # Green
        lambda x: stone_curve(x, 0.88)  # Blue (subtly lower for warm stone tone)
    )

    stone_img = img.point(lut_stone)
    stone_img.save("a:/Reiven/project/AURA/public/images/finish-stone.jpg", quality=95)
    print("Saved finish-stone.jpg")

    # -------------------------------------------------------------
    # 2. WARM BRONZE FINISH:
    # Rich warm bronze / champagne copper tone
    # High amber/copper saturation, warm highlights, dark shadows
    # -------------------------------------------------------------
    def bronze_curve(x, tint, gamma=0.65):
        if x < 0.03:
            return x * 0.8
        t = (x - 0.03) / 0.97
        lifted = math.pow(t, gamma) * 0.82 + t * 0.18
        return lifted * tint

    lut_bronze = create_lut(
        lambda x: bronze_curve(x, 1.08, 0.60), # Rich copper Red
        lambda x: bronze_curve(x, 0.78, 0.68), # Muted warm Green
        lambda x: bronze_curve(x, 0.52, 0.78)  # Low Blue for deep bronze metal
    )

    bronze_img = img.point(lut_bronze)
    bronze_img.save("a:/Reiven/project/AURA/public/images/finish-bronze.jpg", quality=95)
    print("Saved finish-bronze.jpg")

if __name__ == '__main__':
    generate_finishes()
