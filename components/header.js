export default class Header extends HTMLElement{
    connectedCallback() {  
        this.innerHTML=`<img src="./public/aftb.svg" class="block h-20 w-20 mr-4">`
    }
}