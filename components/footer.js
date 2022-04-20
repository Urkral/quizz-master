export default class Footer extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current');
    this.innerHTML = `<footer>
        <nav class="">
            <ul class="flex items-center h-20">
                <li class="m-2">
                    <a style="color : ${current === 'home' ? 'grey' : 'black'}" href="./">
                        Accueil
                    </a>
                </li>
                <li class="m-2">
                    <a style="color : ${
                      current === 'history' ? 'grey' : 'black'
                    }" href="./history.html">
                        Historique
                    </a>
                </li>              
            </ul>
        </nav>
        </footer>`;
  }
}
