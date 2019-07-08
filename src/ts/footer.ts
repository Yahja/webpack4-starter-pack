export class Footer {
    footertext: string;

    constructor(){
        console.log('This is the Footer constructor');
        this.footertext = 'Test webpack 4 set up for checkout'
    }

    getFooterText(): string{
        return this.footertext
    }
}