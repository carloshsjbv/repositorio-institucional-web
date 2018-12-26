import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeHtml, SafeStyle, SafeScript, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class Safe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {
  }

  public transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        var a = value.split("\\");
        var val = '';
        a.forEach(element => {
          val += (element + '/');
        });
        
        return this.sanitizer.bypassSecurityTrustResourceUrl(val);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }

}
