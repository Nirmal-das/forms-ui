import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export class SharedModule {

    public constructor(public matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.registerSvgIcons();
    }

    private registerSvgIcons() {
        const trust = this.domSanitizer.bypassSecurityTrustResourceUrl;

        this.matIconRegistry
            .addSvgIcon('thumb-up', trust('/assets/icons/thumb-up.svg'))
    }
}