import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safedom',
})
export class SafedomPipe implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer) {}

    transform(value: string): any {
        const url = 'https://open.spotify.com/embed?uri=';
        return this._sanitizer.bypassSecurityTrustResourceUrl(url + value);
    }
}
