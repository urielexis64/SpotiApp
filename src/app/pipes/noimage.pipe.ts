import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
    transform(images: any[]): string {
        if (images.length > 0) {
            return images[1].url;
        }
        return 'assets/img/noimage.png';
    }
}
