import imageio
import numpy as np
indir = 'C:/Users/M.HajiMohamadJanah/Desktop/ar'
infile = 'DG_Logo_Black.png'

im = imageio.imread(f'{indir}/{infile}')
for r in range(4):
    if r == 0:
        out = im
    else:
        out = np.rot90(out)

    for k in range(im.shape[2]):
        for i in range(im.shape[0]):
            print(str(out[i, :, k])[1:-1])
    print('')
