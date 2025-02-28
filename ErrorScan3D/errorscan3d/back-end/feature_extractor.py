import cv2
import numpy as np
from skimage.feature import hog, local_binary_pattern
from skimage.color import rgb2gray

IMG_SIZE = (256, 256)

def feature_extractor(img_path):
    img = cv2.imread(img_path)
    if img is None:
        raise ValueError(f"Não foi possível ler a imagem no caminho: {img_path}")
    gray_image = rgb2gray(img)
    gray_image = (gray_image * 255).astype(np.uint8)
    gray_image = cv2.resize(gray_image, IMG_SIZE)
    fd = hog(gray_image, orientations=3, pixels_per_cell=(32, 32),
            cells_per_block=(4, 4), visualize=False)

    radius = 1
    n_points = 8 * radius
    lbp = local_binary_pattern(gray_image, n_points, radius, method='uniform')
    n_bins = int(lbp.max() + 1)
    lbp_hist, _ = np.histogram(lbp.ravel(), bins=n_bins, range=(0, n_bins), density=True)

    resultado = np.concatenate((fd, lbp_hist))

    return resultado