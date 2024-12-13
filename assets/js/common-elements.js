// Header

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
<header id="masthead" class="site-header site-header-white">
    <nav id="primary-navigation" class="site-navigation">
                
        <div class="container">
            <a href="index.html" class="navbar-left main-logo">
                <img src="assets/img/unicorn-logo-v2.png" height="55">
            </a>

            <div class="collapse navbar-collapse">
                
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Tools<i class="fa fa-caret-down hidden-xs" aria-hidden="true"></i></a>

                        <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                            <li><a href="console-runner.html">Console runner</a></li>
                            <li><a href="toolbox.html">Toolbox</a></li>
                        </ul>

                    </li>
                    <li><a href="integrations.html">Integrations</a></li>
                    <li><a href="docs/" target="_blank">Documentation</a></li>
                    <li><a href="examples.html">Examples</a></li>
                    <li>
                        <a href="https://github.com/Unicorn-TAF">
                            <img src="https://github.githubassets.com/favicons/favicon-dark.svg" height="20" alt="" title="Source code on GitHub">
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>   
    </nav>
</header>
        `
    }
  }

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `
<footer id="colophon" class="site-footer">
    <div class="copyright">
        <div class="container">
            <div class="row text-center">
            <h4>Keep in touch</h4>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <div class="social-links">
                        <a href="https://www.facebook.com/dobriyanchik"><i class="fa fa-facebook-official fa-fw w3-xlarge w3-hover-opacity"></i></a>
                        <a href="https://www.linkedin.com/in/vitalii-dobriian"><i class="fa fa-linkedin fa-fw w3-xlarge w3-hover-opacity"></i></a>
                        <a href="mailto:dobriy88@yandex.ru"><i class="fa fa-envelope fa-fw w3-xlarge w3-hover-opacity"></i></a>
                        <a href="https://join.skype.com/invite/kzYokJHlHmZN"><i class="fa fa-skype fa-fw w3-xlarge w3-hover-opacity"></i></a>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="text-right">
                        <span>&copy; Vitalii Dobriian</span><br/>
                        <span>All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
      `
  }
}


customElements.define('main-header', Header);
customElements.define('main-footer', Footer);