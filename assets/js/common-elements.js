// Header

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
<header id="masthead" class="site-header site-header-white">
    <nav id="primary-navigation" class="site-navigation">
        
        <div class="container">
            <a href="home.html"><img src="assets/img/unicorn-logo-v2.png" height="55" class="navbar-left"></a>

            <div class="collapse navbar-collapse">

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="home.html">Home</a></li>
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Tools<i class="fa fa-caret-down hidden-xs" aria-hidden="true"></i></a>

                        <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                            <li><a href="console-runner.html">Console runner</a></li>
                            <li><a href="toolbox.html">Toolbox</a></li>
                        </ul>

                    </li>
                    <li><a href="integrations.html">Integrations</a></li>
                    <li><a href="examples.html">Examples</a></li>
                    <li>
                        <a href="https://bitbucket.org/dobriyanchik/unicorntaf">
                            <img src="assets/img/bitbucket-repo.png" alt="" title="Source code on Bitbucket">
                        </a>
                    </li>
                </ul>

            </div>
        </div>   
    </nav><!-- /.site-navigation -->

</header>
        `
    }
  }

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `
<footer id="colophon" class="site-footer"> <!-- /#footer -->
    <div class="container text-right">
                <h3>Keep in touch</h3>
                <ul class="list-unstyled contact-links">
                    <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:dobriy88@yandex.ru">dobriy88@yandex.ru</a></li>
                    <li><i class="fa fa-skype" aria-hidden="true"></i><a href="https://join.skype.com/invite/kzYokJHlHmZN">dobriyanchik</a></li>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i><a href="https://goo.gl/maps/D8hzfjNK5oKhNcXBA">Saint Petersburg, Russia</a></li>
                </ul>
    </div>
    <div class="copyright"> <!-- /.copyright -->
        <div class="container">
            <div class="row">
                <div class="col-xs-8">
                    <div class="social-links"> <!-- /.social-links -->
                        <!-- <a class="facebook-bg" href="#"><i class="fa fa-facebook"></i></a> -->
                        <a class="linkedin-bg" href="https://www.linkedin.com/in/vitalii-dobriian"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="text-right">
                        <p>&copy; Vitalii Dobriian</p>
                        <p>All Rights Reserved</p>
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