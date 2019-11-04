import numpy as np
from matplotlib.pyplot import imread
from matplotlib.pyplot import imsave
import matplotlib.pyplot as plt
import math
from skimage.color import rgb2gray
import sys
import argparse
import os
from PIL import Image

# grayscale = True
grayscale = False
PATH = "{}/{}".format(os.getcwd(), "app/assets/anim3/")

for i in range(0, 31):
    index = 1000 + i;
    FILENAME = "Comp{}.jpg".format(index)

    image = Image.open(
        "{}/{}".format(
            PATH, FILENAME
        )
    )
    image = image.resize((int(image.size[0] / 2), int(image.size[1] / 2)))

    image_arr = np.asarray(image)
    output_arr = np.zeros((image_arr.shape[0], image_arr.shape[1], 4), 'uint8')

    for x in range (0, int(image_arr.shape[0])):
        for y in range (0, int(image_arr.shape[1])):
            curr = image_arr[x][y]
            output_arr[x, y, 0:3] = curr
            output_arr[x,y,3] = curr[0]

    if not os.path.exists('bin'):
        os.makedirs('bin')

    # print(np.clip(output, 0 ,1).shape)
    output_arr = output_arr[:, 210:750, :]
    output_image = Image.fromarray(output_arr)
    output_image.save(
        "{}/bin/{}".format(
            os.getcwd(),
            "Comp{}.png".format(index)
        ),
        'png',
        quality=95
    )

    # curr_cmap = 'gray' if grayscale else None
    #
    # imsave("{}/bin/{}".format(
    #     os.getcwd(),
    #     FILENAME
    # ), np.clip(output, 0, 1), cmap=curr_cmap)
