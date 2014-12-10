



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>kalendae_assets/kalendae.standalone.js at master · sdball/kalendae_assets</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="sdball/kalendae_assets" name="twitter:title" /><meta content="kalendae_assets - Kalendae for the Rails asset pipeline" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/45837?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/45837?v=3&amp;s=400" property="og:image" /><meta content="sdball/kalendae_assets" property="og:title" /><meta content="https://github.com/sdball/kalendae_assets" property="og:url" /><meta content="kalendae_assets - Kalendae for the Rails asset pipeline" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4AC00150:141B:13D2B8A:54885CFC" name="octolytics-dimension-request_id" /><meta content="8785158" name="octolytics-actor-id" /><meta content="sakethrampotturi" name="octolytics-actor-login" /><meta content="33658bedc4fe2b25b2ec9170511d56368ccff407d77e3e5ac019d6ae83010dfa" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="a9bfjfy2NmJ2twsYoCcNNl0bV5DigCCC2ajoPTiS7qTIkeK4h5J3uBqMmNmXWokQWZ8m8bFN6MLXrcPMaaQTjw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-2514c56ae64a8843e76b3c8e3f303e514e7ad11fc5d095089e47079a1da014db.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-faa666e38dec0c944d41a457d4bc97a0b26b11790da3901d656a41772db660c6.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="bb7757e5f707d0b5ea3fc1b1b215def6">

      
  <meta name="description" content="kalendae_assets - Kalendae for the Rails asset pipeline">
  <meta name="go-import" content="github.com/sdball/kalendae_assets git https://github.com/sdball/kalendae_assets.git">

  <meta content="45837" name="octolytics-dimension-user_id" /><meta content="sdball" name="octolytics-dimension-user_login" /><meta content="3680060" name="octolytics-dimension-repository_id" /><meta content="sdball/kalendae_assets" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3680060" name="octolytics-dimension-repository_network_root_id" /><meta content="sdball/kalendae_assets" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/sdball/kalendae_assets/commits/master.atom" rel="alternate" title="Recent Commits to kalendae_assets:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/sdball/kalendae_assets/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/sdball/kalendae_assets/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/sakethrampotturi" data-ga-click="Header, go to profile, text:username">
      <img alt="sakethrampotturi" class="avatar" data-user="8785158" height="20" src="https://avatars2.githubusercontent.com/u/8785158?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">sakethrampotturi</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="sdball/kalendae_assets">This repository</span>
    </li>
      <li>
        <a href="/sdball/kalendae_assets/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VHbZTdLsD3SSLkZ5vzC/kEjosfRafwG6HWsRAPpOwhVvNxDhO3i8a2TS4WkE/NZEqViE/72E5DdsQ3eJZGC1uQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9480Bm3jnBk+/l3B6UjrS2LyF2tZ0V2vPo5ggFwnlHU5YdKOek7rr+YAHIFBTIo9UpP+oiTFyCNHbN6+s0MNEA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3680060" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/sdball/kalendae_assets/watchers">
        3
      </a>
      <a href="/sdball/kalendae_assets/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/sdball/kalendae_assets/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OuyhwrkzYdM28fWGBko7dfemE3+AN4jJbkhw+fkHotL6D+4G+sxEASxN/Sckqvz9IOg8OvGT+JND3a+YfGST6A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar sdball/kalendae_assets">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/sdball/kalendae_assets/stargazers">
          26
        </a>
</form>
    <form accept-charset="UTF-8" action="/sdball/kalendae_assets/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aGkZGt+AIjM2rahoq7TqcsDDHcMMpLwyGrco9UNqcA6v0xi68CICashOrwOjgoQj9EIF+JEHoHzt0rh6WX40Iw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star sdball/kalendae_assets">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/sdball/kalendae_assets/stargazers">
          26
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/sdball/kalendae_assets/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of sdball/kalendae_assets to your account" aria-label="Fork your own copy of sdball/kalendae_assets to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/sdball/kalendae_assets/network" class="social-count">7</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/sdball" class="url fn" itemprop="url" rel="author"><span itemprop="title">sdball</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/sdball/kalendae_assets" class="js-current-repository" data-pjax="#js-repo-pjax-container">kalendae_assets</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/sdball/kalendae_assets/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/sdball/kalendae_assets" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /sdball/kalendae_assets">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/sdball/kalendae_assets/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /sdball/kalendae_assets/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/sdball/kalendae_assets/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /sdball/kalendae_assets/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/sdball/kalendae_assets/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /sdball/kalendae_assets/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/sdball/kalendae_assets/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /sdball/kalendae_assets/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/sdball/kalendae_assets/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /sdball/kalendae_assets/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/sdball/kalendae_assets.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:sdball/kalendae_assets.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/sdball/kalendae_assets" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/sdball/kalendae_assets/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of sdball/kalendae_assets as a zip file"
                   title="Download the contents of sdball/kalendae_assets as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/sdball/kalendae_assets/blob/2aec527ed23fc53b31d35ad79f2823df607476e5/vendor/assets/javascripts/kalendae.standalone.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:0176cf4ef641f13288361d70e077e282 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/blob/gh-pages/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/blob/master/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/blob/minitest/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="minitest"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="minitest">minitest</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/tree/v0.4.1/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="v0.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.4.1">v0.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/tree/v0.2.1/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="v0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.1">v0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/tree/v0.2/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="v0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2">v0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/tree/v0.1.1/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="v0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.1">v0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/tree/v0.1.0/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sdball/kalendae_assets/tree/v0.0.1/vendor/assets/javascripts/kalendae.standalone.js"
                 data-name="v0.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.0.1">v0.0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/sdball/kalendae_assets/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sdball/kalendae_assets" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">kalendae_assets</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sdball/kalendae_assets/tree/master/vendor" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">vendor</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sdball/kalendae_assets/tree/master/vendor/assets" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">assets</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sdball/kalendae_assets/tree/master/vendor/assets/javascripts" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">javascripts</span></a></span><span class="separator">/</span><strong class="final-path">kalendae.standalone.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Peter Jaros" class="avatar" data-user="2407" height="24" src="https://avatars0.githubusercontent.com/u/2407?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/Peeja" rel="contributor">Peeja</a></span>
        <time datetime="2013-10-04T20:42:15Z" is="relative-time">Oct 4, 2013</time>
        <div class="commit-title">
            <a href="/sdball/kalendae_assets/commit/b6547b8f3ebb9e0f27aeab9458c12c2cb05b6231" class="message" data-pjax="true" title="Kalendae 0.4.1">Kalendae 0.4.1</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Peter Jaros" data-user="2407" height="24" src="https://avatars0.githubusercontent.com/u/2407?v=3&amp;s=48" width="24" />
            <a href="/Peeja">Peeja</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>2412 lines (2027 sloc)</span>
          <span class="meta-divider"></span>
        <span>73.701 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/sdball/kalendae_assets/raw/master/vendor/assets/javascripts/kalendae.standalone.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/sdball/kalendae_assets/blame/master/vendor/assets/javascripts/kalendae.standalone.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/sdball/kalendae_assets/commits/master/vendor/assets/javascripts/kalendae.standalone.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/sdball/kalendae_assets/edit/master/vendor/assets/javascripts/kalendae.standalone.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/sdball/kalendae_assets/delete/master/vendor/assets/javascripts/kalendae.standalone.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/********************************************************************</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> *	Kalendae, a framework agnostic javascript date picker           *</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> *	Copyright(c) 2013 Jarvis Badgley (chipersoft@gmail.com)         *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> *	http://github.com/ChiperSoft/Kalendae                           *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> *	Version 0.4.1                                                   *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> ********************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">(<span class="pl-st">function</span> (<span class="pl-vpf">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-s">var</span> today, moment;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-s">var</span> <span class="pl-en">Kalendae</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">targetElement</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-s3">document</span>.addEventListener <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>util.isIE8()) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">	<span class="pl-c">//if the first argument isn&#39;t an element and isn&#39;t a string, assume that it is the options object</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">	<span class="pl-s">var</span> is_element <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">	<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">		is_element <span class="pl-k">=</span> targetElement <span class="pl-k">instanceof</span> Element;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">	<span class="pl-k">catch</span> (err) {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">		is_element <span class="pl-k">=</span> <span class="pl-k">!!</span>targetElement <span class="pl-k">&amp;&amp;</span> is_element.<span class="pl-sc">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!</span>(is_element <span class="pl-k">||</span> <span class="pl-k">typeof</span>(targetElement) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)) options <span class="pl-k">=</span> targetElement;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">	<span class="pl-s">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">		classes <span class="pl-k">=</span> self.<span class="pl-sc">classes</span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">		opts <span class="pl-k">=</span> self.settings <span class="pl-k">=</span> util.merge(self.defaults, {attachTo<span class="pl-k">:</span>targetElement}, options <span class="pl-k">||</span> {}),</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">		$container <span class="pl-k">=</span> self.container <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.container}),</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">		calendars <span class="pl-k">=</span> self.calendars <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">		startDay <span class="pl-k">=</span> moment().day(opts.weekStart),</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">		vsd,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">		columnHeaders <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">		$cal,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">		$title,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">		$caption,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">		$header,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">		$days, dayNodes <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">		$span,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">		j <span class="pl-k">=</span> opts.months;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">	<span class="pl-k">if</span> (util.isIE8()) util.addClassName($container, <span class="pl-s1"><span class="pl-pds">&#39;</span>ie8<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">	<span class="pl-c">//generate the column headers (Su, Mo, Tu, etc)</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">	i <span class="pl-k">=</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">	<span class="pl-k">while</span> (i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">		columnHeaders.<span class="pl-s3">push</span>( startDay.format(opts.columnHeaderFormat) );</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">		startDay.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>days<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">	<span class="pl-c">//setup publish/subscribe and apply any subscriptions passed in settings</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">	MinPubSub(self);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">typeof</span> opts.subscribe <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">		<span class="pl-k">for</span> (i <span class="pl-k">in</span> opts.subscribe) <span class="pl-k">if</span> (opts.subscribe.hasOwnProperty(i)) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">			self.subscribe(i, opts.subscribe[i]);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">	<span class="pl-c">//process default selected dates</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">	self._sel <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!!</span>opts.<span class="pl-sc">selected</span>) self.setSelected(opts.<span class="pl-sc">selected</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">	<span class="pl-c">//set the view month</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!!</span>opts.viewStartDate) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">		vsd <span class="pl-k">=</span> moment(opts.viewStartDate, opts.format);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (self._sel.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">		vsd <span class="pl-k">=</span> moment(self._sel[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">		vsd <span class="pl-k">=</span> moment();</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">	self.viewStartDate <span class="pl-k">=</span> vsd.date(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">	<span class="pl-s">var</span> viewDelta <span class="pl-k">=</span> ({</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span>past<span class="pl-pds">&#39;</span></span>          <span class="pl-k">:</span> opts.months<span class="pl-k">-</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span>today-past<span class="pl-pds">&#39;</span></span>    <span class="pl-k">:</span> opts.months<span class="pl-k">-</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span>any<span class="pl-pds">&#39;</span></span>           <span class="pl-k">:</span> opts.months<span class="pl-k">&gt;</span><span class="pl-c1">2</span><span class="pl-k">?</span><span class="pl-s3">Math</span>.<span class="pl-s3">floor</span>(opts.months/<span class="pl-c1">2</span>)<span class="pl-k">:</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span>today-future<span class="pl-pds">&#39;</span></span>  <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span>future<span class="pl-pds">&#39;</span></span>        <span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">	})[<span class="pl-v">this</span>.settings.direction];</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">	<span class="pl-k">if</span> (viewDelta <span class="pl-k">&amp;&amp;</span> moment().month()<span class="pl-k">==</span>moment(self.viewStartDate).month()){</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">		self.viewStartDate <span class="pl-k">=</span> moment(self.viewStartDate).subtract({M<span class="pl-k">:</span>viewDelta}).date(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">typeof</span> opts.blackout <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">		self.blackout <span class="pl-k">=</span> opts.blackout;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!!</span>opts.blackout) {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">		<span class="pl-s">var</span> bdates <span class="pl-k">=</span> parseDates(opts.blackout, opts.parseSplitDelimiter, opts.format);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">		<span class="pl-s3">self</span>.<span class="pl-en">blackout</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">			input <span class="pl-k">=</span> moment(input).yearDay();</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">			<span class="pl-k">if</span> (input <span class="pl-k">&lt;</span> <span class="pl-c1">1</span> <span class="pl-k">||</span> <span class="pl-k">!</span>self._sel) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">			<span class="pl-s">var</span> i <span class="pl-k">=</span> bdates.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">			<span class="pl-k">while</span> (i<span class="pl-k">--</span>) <span class="pl-k">if</span> (bdates[i].yearDay() <span class="pl-k">===</span> input) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">		<span class="pl-s3">self</span>.<span class="pl-en">blackout</span> <span class="pl-k">=</span> <span class="pl-st">function</span> () {<span class="pl-k">return</span> <span class="pl-c1">false</span>;};</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">	self.direction <span class="pl-k">=</span> self.directions[opts.direction] <span class="pl-k">?</span> self.directions[opts.direction] <span class="pl-k">:</span> self.directions[<span class="pl-s1"><span class="pl-pds">&#39;</span>any<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">	<span class="pl-c">//for the total months setting, generate N calendar views and add them to the container</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">	j <span class="pl-k">=</span> <span class="pl-s3">Math</span>.<span class="pl-s3">max</span>(opts.months,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">	<span class="pl-k">while</span> (j<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">		$cal <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.calendar}, $container);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">		$cal.<span class="pl-s3">setAttribute</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-cal-index<span class="pl-pds">&#39;</span></span>, j);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">		<span class="pl-k">if</span> (opts.months <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">			<span class="pl-k">if</span> (j <span class="pl-k">==</span> <span class="pl-s3">Math</span>.<span class="pl-s3">max</span>(opts.months<span class="pl-k">-</span><span class="pl-c1">1</span>,<span class="pl-c1">1</span>)) util.addClassName($cal, classes.monthFirst);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (j <span class="pl-k">===</span> <span class="pl-c1">0</span>) util.addClassName($cal, classes.monthLast);</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">			<span class="pl-k">else</span> util.addClassName($cal, classes.monthMiddle);</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">		<span class="pl-c">//title bar</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">		$title <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.<span class="pl-sc">title</span>}, $cal);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>opts.useYearNav){</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">			util.addClassName($title, classes.disableYearNav);</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">		util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.previousYear}, $title);           <span class="pl-c">//previous button</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">		util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.previousMonth}, $title);          <span class="pl-c">//previous button</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">		util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.nextYear}, $title);               <span class="pl-c">//next button</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">		util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.nextMonth}, $title);              <span class="pl-c">//next button</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">		$caption <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.<span class="pl-sc">caption</span>}, $title);  <span class="pl-c">//title caption</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">		<span class="pl-c">//column headers</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">		$header <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.header}, $cal);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">		<span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">			$span <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>, {}, $header);</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">			$span.innerHTML <span class="pl-k">=</span> columnHeaders[i];</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">		} <span class="pl-k">while</span> (<span class="pl-k">++</span>i <span class="pl-k">&lt;</span> <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">		<span class="pl-c">//individual day cells</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">		$days <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.days}, $cal);</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">		dayNodes <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">		<span class="pl-k">while</span> (i<span class="pl-k">++</span> <span class="pl-k">&lt;</span> <span class="pl-c1">42</span>) {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">			dayNodes.<span class="pl-s3">push</span>(util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>, {}, $days));</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">		<span class="pl-c">//store each calendar view for easy redrawing</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">		calendars.<span class="pl-s3">push</span>({</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">			caption<span class="pl-k">:</span>$caption,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">			days<span class="pl-k">:</span>dayNodes</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">		<span class="pl-k">if</span> (j) util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.monthSeparator}, $container);</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">	self.draw();</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">	util.addEvent($container, <span class="pl-s1"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> (<span class="pl-vpf">event</span>, <span class="pl-vpf">target</span>) {</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">		<span class="pl-s">var</span> clickedDate;</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">		<span class="pl-k">if</span> (util.hasClassName(target, classes.nextMonth)) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">		<span class="pl-c">//NEXT MONTH BUTTON</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>self.disableNext <span class="pl-k">&amp;&amp;</span> self.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>view-changed<span class="pl-pds">&#39;</span></span>, self, [<span class="pl-s1"><span class="pl-pds">&#39;</span>next-month<span class="pl-pds">&#39;</span></span>]) <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">				self.viewStartDate.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">				self.draw();</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (util.hasClassName(target, classes.previousMonth)) {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">		<span class="pl-c">//PREVIOUS MONTH BUTTON</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>self.disablePreviousMonth <span class="pl-k">&amp;&amp;</span> self.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>view-changed<span class="pl-pds">&#39;</span></span>, self, [<span class="pl-s1"><span class="pl-pds">&#39;</span>previous-month<span class="pl-pds">&#39;</span></span>]) <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">				self.viewStartDate.subtract(<span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">				self.draw();</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (util.hasClassName(target, classes.nextYear)) {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">		<span class="pl-c">//NEXT MONTH BUTTON</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>self.disableNext <span class="pl-k">&amp;&amp;</span> self.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>view-changed<span class="pl-pds">&#39;</span></span>, self, [<span class="pl-s1"><span class="pl-pds">&#39;</span>next-year<span class="pl-pds">&#39;</span></span>]) <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">				self.viewStartDate.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>years<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">				self.draw();</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (util.hasClassName(target, classes.previousYear)) {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">		<span class="pl-c">//PREVIOUS MONTH BUTTON</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>self.disablePreviousMonth <span class="pl-k">&amp;&amp;</span> self.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>view-changed<span class="pl-pds">&#39;</span></span>, self, [<span class="pl-s1"><span class="pl-pds">&#39;</span>previous-year<span class="pl-pds">&#39;</span></span>]) <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">				self.viewStartDate.subtract(<span class="pl-s1"><span class="pl-pds">&#39;</span>years<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">				self.draw();</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (util.hasClassName(target.<span class="pl-sc">parentNode</span>, classes.days) <span class="pl-k">&amp;&amp;</span> util.hasClassName(target, classes.dayActive) <span class="pl-k">&amp;&amp;</span> (clickedDate <span class="pl-k">=</span> target.<span class="pl-s3">getAttribute</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-date<span class="pl-pds">&#39;</span></span>))) {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">		<span class="pl-c">//DAY CLICK</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">			clickedDate <span class="pl-k">=</span> moment(clickedDate, opts.dayAttributeFormat).hours(<span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">			<span class="pl-k">if</span> (self.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>date-clicked<span class="pl-pds">&#39;</span></span>, self, [clickedDate]) <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">				<span class="pl-k">switch</span> (opts.mode) {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">					<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>multiple<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span>self.addSelected(clickedDate)) self.removeSelected(clickedDate);</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">					<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>range<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">						self.addSelected(clickedDate);</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">					<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>single<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">						<span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">					<span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">						self.addSelected(clickedDate);</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!!</span>(opts.attachTo <span class="pl-k">=</span> util.$(opts.attachTo))) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">		opts.attachTo.<span class="pl-s3">appendChild</span>($container);</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line"><span class="pl-s3">Kalendae</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">	defaults <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">		attachTo              <span class="pl-k">:</span><span class="pl-c1">null</span>,            <span class="pl-c">/* the element to attach the root container to. can be string or DOMElement */</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">		months                <span class="pl-k">:</span><span class="pl-c1">1</span>,               <span class="pl-c">/* total number of months to display side by side */</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">		weekStart             <span class="pl-k">:</span><span class="pl-c1">0</span>,               <span class="pl-c">/* day to use for the start of the week. 0 is Sunday */</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">		direction             <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>any<span class="pl-pds">&#39;</span></span>,           <span class="pl-c">/* past, today-past, any, today-future, future */</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">		directionScrolling    <span class="pl-k">:</span><span class="pl-c1">true</span>,            <span class="pl-c">/* if a direction other than any is defined, prevent scrolling out of range */</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">		viewStartDate         <span class="pl-k">:</span><span class="pl-c1">null</span>,            <span class="pl-c">/* date in the month to display.  When multiple months, this is the left most */</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">		blackout              <span class="pl-k">:</span><span class="pl-c1">null</span>,            <span class="pl-c">/* array of dates, or function to be passed a date */</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">		selected              <span class="pl-k">:</span><span class="pl-c1">null</span>,            <span class="pl-c">/* dates already selected.  can be string, date, or array of strings or dates. */</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">		mode                  <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>single<span class="pl-pds">&#39;</span></span>,        <span class="pl-c">/* single, multiple, range */</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">		dayOutOfMonthClickable<span class="pl-k">:</span><span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">		format                <span class="pl-k">:</span><span class="pl-c1">null</span>,            <span class="pl-c">/* string used for parsing dates. */</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">		subscribe             <span class="pl-k">:</span><span class="pl-c1">null</span>,            <span class="pl-c">/* object containing events to subscribe to */</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">		columnHeaderFormat    <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>dd<span class="pl-pds">&#39;</span></span>,            <span class="pl-c">/* number of characters to show in the column headers */</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">		titleFormat           <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>MMMM, YYYY<span class="pl-pds">&#39;</span></span>,    <span class="pl-c">/* format mask for month titles. See momentjs.com for rules */</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">		dayNumberFormat       <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>,             <span class="pl-c">/* format mask for individual days */</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">		dayAttributeFormat    <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>YYYY-MM-DD<span class="pl-pds">&#39;</span></span>,    <span class="pl-c">/* format mask for the data-date attribute set on every span */</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">		parseSplitDelimiter   <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>,<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">+</span>-<span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>, <span class="pl-c">/* regex to use for splitting multiple dates from a passed string */</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">		rangeDelimiter        <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span> - <span class="pl-pds">&#39;</span></span>,           <span class="pl-c">/* string to use between dates when outputting in range mode */</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">		multipleDelimiter     <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>,            <span class="pl-c">/* string to use between dates when outputting in multiple mode */</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">		useYearNav            <span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">		dateClassMap          <span class="pl-k">:</span>{}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">	classes <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">		container       <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>kalendae<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">		calendar        <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-calendar<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">		monthFirst      <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-first-month<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">		monthMiddle     <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-middle-month<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">		monthLast       <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-last-month<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">		title           <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-title<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">		previousMonth   <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-btn-previous-month<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">		nextMonth       <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-btn-next-month<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">		previousYear    <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-btn-previous-year<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">		nextYear        <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-btn-next-year<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">		caption         <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-caption<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">		header          <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-header<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">		days            <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-days<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">		dayOutOfMonth   <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-out-of-month<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">		dayInMonth      <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-in-month<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">		dayActive       <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-active<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">		daySelected     <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-selected<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">		dayInRange      <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-range<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">		dayToday        <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-today<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">		monthSeparator  <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-separator<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">		disablePreviousMonth    <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-disable-previous-month-btn<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">		disableNextMonth        <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-disable-next-month-btn<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">		disablePreviousYear     <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-disable-previous-year-btn<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">		disableNextYear         <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-disable-next-year-btn<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">		disableYearNav          <span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>k-disable-year-nav<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">	disablePreviousMonth<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">	disableNextMonth<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">	disablePreviousYear<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">	disableNextYear<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">	directions<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-en">past</span><span class="pl-pds">&#39;</span></span>          :<span class="pl-st">function</span> (<span class="pl-vpf">date</span>) {<span class="pl-k">return</span> moment(date).yearDay() <span class="pl-k">&gt;=</span> today.yearDay();},</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-en">today-past</span><span class="pl-pds">&#39;</span></span>    :<span class="pl-st">function</span> (<span class="pl-vpf">date</span>) {<span class="pl-k">return</span> moment(date).yearDay() <span class="pl-k">&gt;</span> today.yearDay();},</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-en">any</span><span class="pl-pds">&#39;</span></span>           :<span class="pl-st">function</span> (<span class="pl-vpf">date</span>) {<span class="pl-k">return</span> <span class="pl-c1">false</span>;},</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-en">today-future</span><span class="pl-pds">&#39;</span></span>  :<span class="pl-st">function</span> (<span class="pl-vpf">date</span>) {<span class="pl-k">return</span> moment(date).yearDay() <span class="pl-k">&lt;</span> today.yearDay();},</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">		<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-en">future</span><span class="pl-pds">&#39;</span></span>        :<span class="pl-st">function</span> (<span class="pl-vpf">date</span>) {<span class="pl-k">return</span> moment(date).yearDay() <span class="pl-k">&lt;=</span> today.yearDay();}</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">	<span class="pl-en">getSelectedAsDates</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">		<span class="pl-s">var</span> out <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">		<span class="pl-s">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, c <span class="pl-k">=</span> <span class="pl-v">this</span>._sel.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">		<span class="pl-k">for</span> (;i<span class="pl-k">&lt;</span>c;i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">			out.<span class="pl-s3">push</span>(<span class="pl-v">this</span>._sel[i].toDate());</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">		<span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">	<span class="pl-en">getSelectedAsText</span> : <span class="pl-st">function</span> (<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">		<span class="pl-s">var</span> out <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">		<span class="pl-s">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, c <span class="pl-k">=</span> <span class="pl-v">this</span>._sel.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">		<span class="pl-k">for</span> (;i<span class="pl-k">&lt;</span>c;i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">			out.<span class="pl-s3">push</span>(<span class="pl-v">this</span>._sel[i].format(format <span class="pl-k">||</span> <span class="pl-v">this</span>.settings.format <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YYYY-MM-DD<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">		<span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">	<span class="pl-en">getSelectedRaw</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">		<span class="pl-s">var</span> out <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">		<span class="pl-s">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, c <span class="pl-k">=</span> <span class="pl-v">this</span>._sel.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">		<span class="pl-k">for</span> (;i<span class="pl-k">&lt;</span>c;i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">			out.<span class="pl-s3">push</span>(moment(<span class="pl-v">this</span>._sel[i]));</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">		<span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">	<span class="pl-en">getSelected</span> : <span class="pl-st">function</span> (<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">		<span class="pl-s">var</span> sel <span class="pl-k">=</span> <span class="pl-v">this</span>.getSelectedAsText(format);</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">		<span class="pl-k">switch</span> (<span class="pl-v">this</span>.settings.mode) {</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>range<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">				sel.<span class="pl-s3">splice</span>(<span class="pl-c1">2</span>); <span class="pl-c">//shouldn&#39;t be more than two, but lets just make sure.</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">				<span class="pl-k">return</span> sel.<span class="pl-s3">join</span>(<span class="pl-v">this</span>.settings.rangeDelimiter);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>multiple<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">				<span class="pl-k">return</span> sel.<span class="pl-s3">join</span>(<span class="pl-v">this</span>.settings.multipleDelimiter);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>single<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">				<span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">			<span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">				<span class="pl-k">return</span> sel[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">	<span class="pl-en">isSelected</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">		input <span class="pl-k">=</span> moment(input).yearDay();</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">		<span class="pl-k">if</span> (input <span class="pl-k">&lt;</span> <span class="pl-c1">1</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-v">this</span>._sel <span class="pl-k">||</span> <span class="pl-v">this</span>._sel.<span class="pl-sc">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">		<span class="pl-k">switch</span> (<span class="pl-v">this</span>.settings.mode) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>range<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">				<span class="pl-s">var</span> a <span class="pl-k">=</span> <span class="pl-v">this</span>._sel[<span class="pl-c1">0</span>] <span class="pl-k">?</span> <span class="pl-v">this</span>._sel[<span class="pl-c1">0</span>].yearDay() <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">					b <span class="pl-k">=</span> <span class="pl-v">this</span>._sel[<span class="pl-c1">1</span>] <span class="pl-k">?</span> <span class="pl-v">this</span>._sel[<span class="pl-c1">1</span>].yearDay() <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">				<span class="pl-k">if</span> (a <span class="pl-k">===</span> input <span class="pl-k">||</span> b <span class="pl-k">===</span> input) <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>a <span class="pl-k">||</span> <span class="pl-k">!</span>b) <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">				<span class="pl-k">if</span> ((input <span class="pl-k">&gt;</span> a <span class="pl-k">&amp;&amp;</span> input <span class="pl-k">&lt;</span> b) <span class="pl-k">||</span> (a<span class="pl-k">&lt;</span>b <span class="pl-k">&amp;&amp;</span> input <span class="pl-k">&lt;</span> a <span class="pl-k">&amp;&amp;</span> input <span class="pl-k">&gt;</span> b))  <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>multiple<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">				<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-v">this</span>._sel.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">				<span class="pl-k">while</span> (i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">					<span class="pl-k">if</span> (<span class="pl-v">this</span>._sel[i].yearDay() <span class="pl-k">===</span> input) {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">						<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>single<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">				<span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">			<span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">				<span class="pl-k">return</span> (<span class="pl-v">this</span>._sel[<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> (<span class="pl-v">this</span>._sel[<span class="pl-c1">0</span>].yearDay() <span class="pl-k">===</span> input));</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">	<span class="pl-en">setSelected</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">draw</span>) {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">		<span class="pl-s">var</span> i,</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">			new_dates <span class="pl-k">=</span> parseDates(input, <span class="pl-v">this</span>.settings.parseSplitDelimiter, <span class="pl-v">this</span>.settings.format),</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">			old_dates <span class="pl-k">=</span> parseDates(<span class="pl-v">this</span>.getSelected(), <span class="pl-v">this</span>.settings.parseSplitDelimiter, <span class="pl-v">this</span>.settings.format);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">		i <span class="pl-k">=</span> old_dates.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">		<span class="pl-k">while</span>(i<span class="pl-k">--</span>) { <span class="pl-v">this</span>.removeSelected(old_dates[i], draw); }</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">		i <span class="pl-k">=</span> new_dates.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">		<span class="pl-k">while</span>(i<span class="pl-k">--</span>) { <span class="pl-v">this</span>.addSelected(new_dates[i], draw); }</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">		<span class="pl-k">if</span> (draw <span class="pl-k">!==</span> <span class="pl-c1">false</span>) <span class="pl-v">this</span>.draw();</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">	<span class="pl-en">addSelected</span> : <span class="pl-st">function</span> (<span class="pl-vpf">date</span>, <span class="pl-vpf">draw</span>) {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">		date <span class="pl-k">=</span> moment(date, <span class="pl-v">this</span>.settings.format).hours(<span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">		<span class="pl-k">if</span>(<span class="pl-v">this</span>.settings.dayOutOfMonthClickable <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.settings.mode <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>range<span class="pl-pds">&#39;</span></span>){ <span class="pl-v">this</span>.makeSelectedDateVisible(date); }</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">		<span class="pl-k">switch</span> (<span class="pl-v">this</span>.settings.mode) {</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>multiple<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.isSelected(date)) <span class="pl-v">this</span>._sel.<span class="pl-s3">push</span>(date);</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">				<span class="pl-k">else</span> <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>range<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-v">this</span>._sel.<span class="pl-sc">length</span> <span class="pl-k">!==</span> <span class="pl-c1">1</span>) <span class="pl-v">this</span>._sel <span class="pl-k">=</span> [date];</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">					<span class="pl-k">if</span> (date.yearDay() <span class="pl-k">&gt;</span> <span class="pl-v">this</span>._sel[<span class="pl-c1">0</span>].yearDay()) <span class="pl-v">this</span>._sel[<span class="pl-c1">1</span>] <span class="pl-k">=</span> date;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">					<span class="pl-k">else</span> <span class="pl-v">this</span>._sel <span class="pl-k">=</span> [date, <span class="pl-v">this</span>._sel[<span class="pl-c1">0</span>]];</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>single<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">				<span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">			<span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">				<span class="pl-v">this</span>._sel <span class="pl-k">=</span> [date];</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">		<span class="pl-v">this</span>._sel.<span class="pl-s3">sort</span>(<span class="pl-st">function</span> (<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>) {<span class="pl-k">return</span> a.yearDay() <span class="pl-k">-</span> b.yearDay();});</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">		<span class="pl-v">this</span>.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>, [date]);</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">		<span class="pl-k">if</span> (draw <span class="pl-k">!==</span> <span class="pl-c1">false</span>) <span class="pl-v">this</span>.draw();</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">	<span class="pl-en">makeSelectedDateVisible</span>: <span class="pl-st">function</span> (<span class="pl-vpf">date</span>) {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">		outOfViewMonth <span class="pl-k">=</span> moment(date).date(<span class="pl-s1"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>).diff(<span class="pl-v">this</span>.viewStartDate,<span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">		<span class="pl-k">if</span>(outOfViewMonth <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">			<span class="pl-v">this</span>.viewStartDate.subtract(<span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">		<span class="pl-k">else</span> <span class="pl-k">if</span>(outOfViewMonth <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> outOfViewMonth <span class="pl-k">&gt;=</span> <span class="pl-v">this</span>.settings.months){</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">			<span class="pl-v">this</span>.viewStartDate.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">	<span class="pl-en">removeSelected</span> : <span class="pl-st">function</span> (<span class="pl-vpf">date</span>, <span class="pl-vpf">draw</span>) {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">		date <span class="pl-k">=</span> moment(date, <span class="pl-v">this</span>.settings.format).hours(<span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">		<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-v">this</span>._sel.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">		<span class="pl-k">while</span> (i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-v">this</span>._sel[i].yearDay() <span class="pl-k">===</span> date.yearDay()) {</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">				<span class="pl-v">this</span>._sel.<span class="pl-s3">splice</span>(i,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">				<span class="pl-v">this</span>.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>, [date]);</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">				<span class="pl-k">if</span> (draw <span class="pl-k">!==</span> <span class="pl-c1">false</span>) <span class="pl-v">this</span>.draw();</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">	draw <span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">draw</span>() {</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">		<span class="pl-c">// return;</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">		<span class="pl-s">var</span> month <span class="pl-k">=</span> moment(<span class="pl-v">this</span>.viewStartDate).hours(<span class="pl-c1">12</span>), <span class="pl-c">//force middle of the day to avoid any weird date shifts</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">			day,</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">			classes <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">classes</span>,</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">			cal,</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">			$span,</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">			klass,</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">			i<span class="pl-k">=</span><span class="pl-c1">0</span>, c,</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">			j<span class="pl-k">=</span><span class="pl-c1">0</span>, k,</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">			s,</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">			dateString,</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">			opts <span class="pl-k">=</span> <span class="pl-v">this</span>.settings,</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">			diff;</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">		c <span class="pl-k">=</span> <span class="pl-v">this</span>.calendars.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">		<span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">			day <span class="pl-k">=</span> moment(month).date(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">			day.day( day.day() <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.settings.weekStart <span class="pl-k">?</span> <span class="pl-v">this</span>.settings.weekStart<span class="pl-k">-</span><span class="pl-c1">7</span> <span class="pl-k">:</span> <span class="pl-v">this</span>.settings.weekStart);</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">			<span class="pl-c">//if the first day of the month is less than our week start, back up a week</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">			cal <span class="pl-k">=</span> <span class="pl-v">this</span>.calendars[i];</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">			cal.<span class="pl-sc">caption</span>.innerHTML <span class="pl-k">=</span> month.format(<span class="pl-v">this</span>.settings.titleFormat);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">			j <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">			<span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">				$span <span class="pl-k">=</span> cal.days[j];</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">				klass <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">				s <span class="pl-k">=</span> <span class="pl-v">this</span>.isSelected(day);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">				<span class="pl-k">if</span> (s) klass.<span class="pl-s3">push</span>(({<span class="pl-s1"><span class="pl-pds">&#39;</span>-1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.dayInRange,<span class="pl-s1"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.daySelected, <span class="pl-s1"><span class="pl-pds">&#39;</span>true<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.daySelected})[s]);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">				<span class="pl-k">if</span> (day.month() <span class="pl-k">!=</span> month.month()) klass.<span class="pl-s3">push</span>(classes.dayOutOfMonth);</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">				<span class="pl-k">else</span> klass.<span class="pl-s3">push</span>(classes.dayInMonth);</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-v">this</span>.blackout(day) <span class="pl-k">||</span> <span class="pl-v">this</span>.direction(day) <span class="pl-k">||</span> (day.month() <span class="pl-k">!=</span> month.month() <span class="pl-k">&amp;&amp;</span> opts.dayOutOfMonthClickable <span class="pl-k">===</span> <span class="pl-c1">false</span>)) <span class="pl-k">||</span> s<span class="pl-k">&gt;</span><span class="pl-c1">0</span>) klass.<span class="pl-s3">push</span>(classes.dayActive);</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">				<span class="pl-k">if</span> (day.yearDay() <span class="pl-k">===</span> today.yearDay()) klass.<span class="pl-s3">push</span>(classes.dayToday);</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">				dateString <span class="pl-k">=</span> day.format(<span class="pl-v">this</span>.settings.dayAttributeFormat);</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">				<span class="pl-k">if</span> (opts.dateClassMap[dateString]) klass.<span class="pl-s3">push</span>(opts.dateClassMap[dateString]);</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">				$span.innerHTML <span class="pl-k">=</span> day.format(opts.dayNumberFormat);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">				$span.<span class="pl-sc">className</span> <span class="pl-k">=</span> klass.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">				$span.<span class="pl-s3">setAttribute</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-date<span class="pl-pds">&#39;</span></span>, dateString);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">				day.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>days<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">			} <span class="pl-k">while</span> (<span class="pl-k">++</span>j <span class="pl-k">&lt;</span> <span class="pl-c1">42</span>);</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">			month.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">		} <span class="pl-k">while</span> (<span class="pl-k">++</span>i <span class="pl-k">&lt;</span> c);</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">		<span class="pl-k">if</span> (opts.directionScrolling) {</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">			<span class="pl-k">if</span> (opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>today-past<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>past<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">				diff <span class="pl-k">=</span> month.<span class="pl-s3">add</span>({m<span class="pl-k">:</span><span class="pl-c1">1</span>}).diff(moment(), <span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">				<span class="pl-k">if</span> (diff <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">					<span class="pl-v">this</span>.disableNextMonth <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">					util.removeClassName(<span class="pl-v">this</span>.container, classes.disableNextMonth);</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">					<span class="pl-v">this</span>.disableNextMonth <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">					util.addClassName(<span class="pl-v">this</span>.container, classes.disableNextMonth);</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>today-future<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>future<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">				diff <span class="pl-k">=</span> month.subtract({m<span class="pl-k">:</span><span class="pl-c1">1</span>}).diff(moment(), <span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">				<span class="pl-k">if</span> (diff <span class="pl-k">&gt;</span> opts.months) {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">					<span class="pl-v">this</span>.disablePreviousMonth <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">					util.removeClassName(<span class="pl-v">this</span>.container, classes.disablePreviousMonth);</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">					<span class="pl-v">this</span>.disablePreviousMonth <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">					util.addClassName(<span class="pl-v">this</span>.container, classes.disablePreviousMonth);</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">			<span class="pl-k">if</span> (opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>today-past<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>past<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">				diff <span class="pl-k">=</span> month.<span class="pl-s3">add</span>({m<span class="pl-k">:</span><span class="pl-c1">12</span>}).diff(moment(), <span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">				<span class="pl-k">if</span> (diff <span class="pl-k">&lt;=</span> <span class="pl-k">-</span><span class="pl-c1">11</span>) {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">					<span class="pl-v">this</span>.disableNextYear <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">					util.removeClassName(<span class="pl-v">this</span>.container, classes.disableNextYear);</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">					<span class="pl-v">this</span>.disableNextYear <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">					util.addClassName(<span class="pl-v">this</span>.container, classes.disableNextYear);</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>today-future<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> opts.direction<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&#39;</span>future<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">				diff <span class="pl-k">=</span> month.subtract({m<span class="pl-k">:</span><span class="pl-c1">12</span>}).diff(moment(), <span class="pl-s1"><span class="pl-pds">&#39;</span>months<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">				<span class="pl-k">if</span> (diff <span class="pl-k">&gt;</span> (<span class="pl-c1">11</span> <span class="pl-k">+</span> opts.months)) {</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">					<span class="pl-v">this</span>.disablePreviousYear <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">					util.removeClassName(<span class="pl-v">this</span>.container, classes.disablePreviousYear);</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">					<span class="pl-v">this</span>.disablePreviousYear <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">					util.addClassName(<span class="pl-v">this</span>.container, classes.disablePreviousYear);</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line"><span class="pl-s">var</span> <span class="pl-en">parseDates</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">delimiter</span>, <span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">	<span class="pl-s">var</span> output <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">typeof</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">		input <span class="pl-k">=</span> input.<span class="pl-s3">split</span>(delimiter);</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>util.isArray(input)) {</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">		input <span class="pl-k">=</span> [input];</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">	<span class="pl-s">var</span> c <span class="pl-k">=</span> input.<span class="pl-sc">length</span>,</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">	<span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">		<span class="pl-k">if</span> (input[i]) output.<span class="pl-s3">push</span>( moment(input[i], format).hours(<span class="pl-c1">12</span>) );</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">	} <span class="pl-k">while</span> (<span class="pl-k">++</span>i <span class="pl-k">&lt;</span> c);</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">	<span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line"><span class="pl-s3">window</span>.Kalendae <span class="pl-k">=</span> Kalendae;</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line"><span class="pl-s">var</span> util <span class="pl-k">=</span> Kalendae.util <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">	<span class="pl-en">isIE8</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-k">!!</span>( (<span class="pl-sr"><span class="pl-pds">/</span>msie 8<span class="pl-c1">.</span><span class="pl-pds">/</span>i</span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-sr"><span class="pl-pds">/</span>opera<span class="pl-pds">/</span>i</span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">userAgent</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-s3">window</span>.ActiveXObject <span class="pl-k">&amp;&amp;</span> XDomainRequest <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-s3">window</span>.msPerformance );</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line"><span class="pl-c">// ELEMENT FUNCTIONS</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">	$<span class="pl-k">:</span> <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">		<span class="pl-k">return</span> (<span class="pl-k">typeof</span> elem <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>(elem) <span class="pl-k">:</span> elem;</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">	$$<span class="pl-k">:</span> <span class="pl-st">function</span> (<span class="pl-vpf">selector</span>) {</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-s3">document</span>.querySelectorAll(selector);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line">	<span class="pl-en">make</span>: <span class="pl-st">function</span> (<span class="pl-vpf">tagName</span>, <span class="pl-vpf">attributes</span>, <span class="pl-vpf">attach</span>) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">		<span class="pl-s">var</span> k, e <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(tagName);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!!</span>attributes) <span class="pl-k">for</span> (k <span class="pl-k">in</span> attributes) <span class="pl-k">if</span> (attributes.hasOwnProperty(k)) e.<span class="pl-s3">setAttribute</span>(k, attributes[k]);</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!!</span>attach) attach.<span class="pl-s3">appendChild</span>(e);</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">		<span class="pl-k">return</span> e;</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">	<span class="pl-c">// Returns true if the DOM element is visible, false if it&#39;s hidden.</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">	<span class="pl-c">// Checks if display is anything other than none.</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">	<span class="pl-en">isVisible</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">		<span class="pl-c">// shamelessly copied from jQuery</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">		<span class="pl-k">return</span> elem.offsetWidth <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> elem.offsetHeight <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">	<span class="pl-en">getStyle</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>, <span class="pl-vpf">styleProp</span>) {</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">		<span class="pl-s">var</span> y;</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">		<span class="pl-k">if</span> (elem.currentStyle) {</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">			y <span class="pl-k">=</span> elem.currentStyle[styleProp];</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s3">window</span>.getComputedStyle) {</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">			y <span class="pl-k">=</span> <span class="pl-s3">window</span>.getComputedStyle(elem, <span class="pl-c1">null</span>)[styleProp];</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">		<span class="pl-k">return</span> y;</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">	<span class="pl-en">domReady</span>:<span class="pl-st">function</span> (<span class="pl-vpf">f</span>){/<span class="pl-k">in</span>/.<span class="pl-s3">test</span>(<span class="pl-s3">document</span>.<span class="pl-sc">readyState</span>) <span class="pl-k">?</span> <span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>() {util.domReady(f);},<span class="pl-c1">9</span>) <span class="pl-k">:</span> f()},</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">	<span class="pl-c">// Adds a listener callback to a DOM element which is fired on a specified</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">	<span class="pl-c">// event.  Callback is sent the event object and the element that triggered the event</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">	<span class="pl-en">addEvent</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>, <span class="pl-vpf">eventName</span>, <span class="pl-vpf">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">		<span class="pl-s">var</span> <span class="pl-en">listener</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">event</span>) {</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">			<span class="pl-s3">event</span> <span class="pl-k">=</span> <span class="pl-s3">event</span> <span class="pl-k">||</span> <span class="pl-s3">window</span>.<span class="pl-s3">event</span>;</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">			<span class="pl-s">var</span> target <span class="pl-k">=</span> <span class="pl-s3">event</span>.<span class="pl-sc">target</span> <span class="pl-k">||</span> <span class="pl-s3">event</span>.srcElement;</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">			<span class="pl-s">var</span> block <span class="pl-k">=</span> callback.<span class="pl-s3">apply</span>(elem, [<span class="pl-s3">event</span>, target]);</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">			<span class="pl-k">if</span> (block <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!!</span><span class="pl-s3">event</span>.preventDefault) <span class="pl-s3">event</span>.preventDefault();</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">					<span class="pl-s3">event</span>.returnValue <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">					<span class="pl-s3">event</span>.cancelBubble <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">			<span class="pl-k">return</span> block;</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">		<span class="pl-k">if</span> (elem.attachEvent) { <span class="pl-c">// IE only.  The &quot;on&quot; is mandatory.</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">			elem.<span class="pl-s3">attachEvent</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> eventName, listener);</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">		} <span class="pl-k">else</span> { <span class="pl-c">// Other browsers.</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">			elem.addEventListener(eventName, listener, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">		<span class="pl-k">return</span> listener;</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">	<span class="pl-c">// Removes a listener callback from a DOM element which is fired on a specified</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">	<span class="pl-c">// event.</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">	<span class="pl-en">removeEvent</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>, <span class="pl-vpf">event</span>, <span class="pl-vpf">listener</span>) {</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">		<span class="pl-k">if</span> (elem.detachEvent) {	<span class="pl-c">// IE only.  The &quot;on&quot; is mandatory.</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">			elem.<span class="pl-s3">detachEvent</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s3">event</span>, listener);</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">		} <span class="pl-k">else</span> { <span class="pl-c">// Other browsers.</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">			elem.removeEventListener(<span class="pl-s3">event</span>, listener, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">	<span class="pl-en">hasClassName</span>: <span class="pl-st">function</span>(<span class="pl-vpf">elem</span>, <span class="pl-vpf">className</span>) { <span class="pl-c">//copied and modified from Prototype.js</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>(elem <span class="pl-k">=</span> util.$(elem))) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">		<span class="pl-s">var</span> eClassName <span class="pl-k">=</span> elem.<span class="pl-sc">className</span>;</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">		<span class="pl-k">return</span> (eClassName.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> (eClassName <span class="pl-k">==</span> className <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>(^|<span class="pl-cce">\\</span>s)<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> className <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>(<span class="pl-cce">\\</span>s|$)<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">test</span>(eClassName)));</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">	<span class="pl-en">addClassName</span>: <span class="pl-st">function</span>(<span class="pl-vpf">elem</span>, <span class="pl-vpf">className</span>) { <span class="pl-c">//copied and modified from Prototype.js</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>(elem <span class="pl-k">=</span> util.$(elem))) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>util.hasClassName(elem, className)) elem.<span class="pl-sc">className</span> <span class="pl-k">+=</span> (elem.<span class="pl-sc">className</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> className;</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">	<span class="pl-en">removeClassName</span>: <span class="pl-st">function</span>(<span class="pl-vpf">elem</span>, <span class="pl-vpf">className</span>) { <span class="pl-c">//copied and modified from Prototype.js</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>(elem <span class="pl-k">=</span> util.$(elem))) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">		elem.<span class="pl-sc">className</span> <span class="pl-k">=</span> util.trimString(elem.<span class="pl-sc">className</span>.<span class="pl-s3">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>(^|<span class="pl-cce">\\</span>s+)<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> className <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>(<span class="pl-cce">\\</span>s+|$)<span class="pl-pds">&quot;</span></span>), <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">	<span class="pl-en">isFixed</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">		<span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line">			<span class="pl-k">if</span> (util.getStyle(elem, <span class="pl-s1"><span class="pl-pds">&#39;</span>position<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fixed<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line">		} <span class="pl-k">while</span> ((elem <span class="pl-k">=</span> elem.offsetParent));</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">	<span class="pl-en">scrollContainer</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">		<span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">			<span class="pl-s">var</span> overflow <span class="pl-k">=</span> util.getStyle(elem, <span class="pl-s1"><span class="pl-pds">&#39;</span>overflow<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line">			<span class="pl-k">if</span> (overflow <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> overflow <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>scroll<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> elem;</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line">		} <span class="pl-k">while</span> ((elem <span class="pl-k">=</span> elem.<span class="pl-sc">parentNode</span>) <span class="pl-k">&amp;&amp;</span> elem <span class="pl-k">!=</span> <span class="pl-s3">window</span>.<span class="pl-s3">document</span>.<span class="pl-sc">body</span>);</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">	<span class="pl-en">getPosition</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>, <span class="pl-vpf">isInner</span>) {</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">		<span class="pl-s">var</span> x <span class="pl-k">=</span> elem.offsetLeft,</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">			y <span class="pl-k">=</span> elem.offsetTop,</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">			r <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>isInner) {</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">			<span class="pl-k">while</span> ((elem <span class="pl-k">=</span> elem.offsetParent)) {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">				x <span class="pl-k">+=</span> elem.offsetLeft;</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">				y <span class="pl-k">+=</span> elem.offsetTop;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">		r[<span class="pl-c1">0</span>] <span class="pl-k">=</span> r.<span class="pl-sc">left</span> <span class="pl-k">=</span> x;</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">		r[<span class="pl-c1">1</span>] <span class="pl-k">=</span> r.<span class="pl-sc">top</span> <span class="pl-k">=</span> y;</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">		<span class="pl-k">return</span> r;</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">	<span class="pl-en">getHeight</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">		<span class="pl-k">return</span> elem.offsetHeight <span class="pl-k">||</span> elem.scrollHeight;</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">	<span class="pl-en">getWidth</span>: <span class="pl-st">function</span> (<span class="pl-vpf">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">		<span class="pl-k">return</span> elem.offsetWidth <span class="pl-k">||</span> elem.scrollWidth;</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line"><span class="pl-c">// TEXT FUNCTIONS</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">	<span class="pl-en">trimString</span>: <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">		<span class="pl-k">return</span> input.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line"><span class="pl-c">// OBJECT FUNCTIONS</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">	<span class="pl-en">merge</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">		<span class="pl-c">/* Combines multiple objects into one.</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line"><span class="pl-c">		 * Syntax: util.extend([true], object1, object2, ... objectN)</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line"><span class="pl-c">		 * If first argument is true, function will merge recursively.</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line"><span class="pl-c">		 */</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">		<span class="pl-s">var</span> deep <span class="pl-k">=</span> (arguments[<span class="pl-c1">0</span>]<span class="pl-k">===</span><span class="pl-c1">true</span>),</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">			d <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">			i <span class="pl-k">=</span> deep<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">		<span class="pl-s">var</span> <span class="pl-en">_c</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">a</span>, <span class="pl-vpf">b</span>) {</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> b <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">			<span class="pl-k">for</span> (<span class="pl-s">var</span> k <span class="pl-k">in</span> b) <span class="pl-k">if</span> (b.hasOwnProperty(k)) {</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">				<span class="pl-c">//if property is an object or array, merge the contents instead of overwriting, if extend() was called as such</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">				<span class="pl-k">if</span> (deep <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> a[k] <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> b[k] <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) _update(a[k], b[k]);</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">				<span class="pl-k">else</span> a[k] <span class="pl-k">=</span> b[k];</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">			<span class="pl-k">return</span> a;</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">		<span class="pl-k">for</span> (; i <span class="pl-k">&lt;</span> arguments.<span class="pl-sc">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">			_c(d, arguments[i]);</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">		<span class="pl-k">return</span> d;</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">	<span class="pl-en">isArray</span>: <span class="pl-st">function</span> (<span class="pl-vpf">array</span>) {</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-s3">Object</span>.<span class="pl-sc">prototype</span>.toString.<span class="pl-s3">call</span>(array) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>[object Array]<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line"><span class="pl-c">//auto-initializaiton code</span></td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-s3">document</span>.addEventListener <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) Kalendae.util.domReady(<span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">	<span class="pl-s">var</span> els <span class="pl-k">=</span> util.$$(<span class="pl-s1"><span class="pl-pds">&#39;</span>.auto-kal<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">		i <span class="pl-k">=</span> els.<span class="pl-sc">length</span>,</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">		e,</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">		options,</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">		optionsRaw;</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">	<span class="pl-k">while</span> (i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">		e <span class="pl-k">=</span> els[i];</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">		optionsRaw <span class="pl-k">=</span> e.<span class="pl-s3">getAttribute</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-kal<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">		options <span class="pl-k">=</span> (optionsRaw <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> optionsRaw <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> {} <span class="pl-k">:</span> (<span class="pl-k">new</span> <span class="pl-en">Function</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>return {<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionsRaw <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>};<span class="pl-pds">&#39;</span></span>))();</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">		<span class="pl-k">if</span> (e.<span class="pl-sc">tagName</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>INPUT<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">			<span class="pl-c">//if element is an input, bind a popup calendar to the input.</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">			<span class="pl-k">new</span> <span class="pl-en">Kalendae.Input</span>(e, options);</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">			<span class="pl-c">//otherwise, insert a flat calendar into the element.</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">			<span class="pl-k">new</span> <span class="pl-en">Kalendae</span>(util.merge(options, {attachTo<span class="pl-k">:</span>e}));</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line"><span class="pl-s3">Kalendae</span>.<span class="pl-en">Input</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">targetElement</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-s3">document</span>.addEventListener <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>  <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>util.isIE8()) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">	<span class="pl-s">var</span> $input <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">input</span> <span class="pl-k">=</span> util.$(targetElement),</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">		overwriteInput,</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">		$closeButton;</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!</span>$input <span class="pl-k">||</span> $input.<span class="pl-sc">tagName</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>INPUT<span class="pl-pds">&#39;</span></span>) <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>First argument for Kalendae.Input must be an &lt;input&gt; element or a valid element id.<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">	<span class="pl-s">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">		classes <span class="pl-k">=</span> self.<span class="pl-sc">classes</span>,</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line">		opts <span class="pl-k">=</span> self.settings <span class="pl-k">=</span> util.merge(self.defaults, options);</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line">	<span class="pl-c">//force attachment to the body</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line">	opts.attachTo <span class="pl-k">=</span> <span class="pl-s3">window</span>.<span class="pl-s3">document</span>.<span class="pl-sc">body</span>;</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line">	<span class="pl-c">//if no override provided, use the input&#39;s contents</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!</span>opts.<span class="pl-sc">selected</span>) opts.<span class="pl-sc">selected</span> <span class="pl-k">=</span> $input.<span class="pl-sc">value</span>;</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">	<span class="pl-k">else</span> overwriteInput <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">	<span class="pl-c">//call our parent constructor</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">	Kalendae.<span class="pl-s3">call</span>(self, opts);</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">	<span class="pl-c">//create the close button</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">	<span class="pl-k">if</span> (opts.closeButton) {</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line">		$closeButton <span class="pl-k">=</span> util.make(<span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, {<span class="pl-s1"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>classes.closeButton}, self.container);</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line">		util.addEvent($closeButton, <span class="pl-s1"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line">			$input.<span class="pl-s3">blur</span>();</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">	<span class="pl-k">if</span> (overwriteInput) $input.<span class="pl-sc">value</span> <span class="pl-k">=</span> self.getSelected();</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">	<span class="pl-s">var</span> $container <span class="pl-k">=</span> self.container,</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">		noclose <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">	$container.<span class="pl-sc">style</span>.<span class="pl-sc">display</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">	util.addClassName($container, classes.positioned);</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code js-file-line">	util.addEvent($container, <span class="pl-s1"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> (<span class="pl-vpf">event</span>, <span class="pl-vpf">target</span>) {</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code js-file-line">		noclose <span class="pl-k">=</span> <span class="pl-c1">true</span>; <span class="pl-c">//IE8 doesn&#39;t obey event blocking when it comes to focusing, so we have to do this shit.</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code js-file-line">	util.addEvent(<span class="pl-s3">window</span>.<span class="pl-s3">document</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> (<span class="pl-vpf">event</span>, <span class="pl-vpf">target</span>) {</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code js-file-line">		noclose <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code js-file-line">	util.addEvent($input, <span class="pl-s1"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code js-file-line">		self.setSelected(<span class="pl-v">this</span>.<span class="pl-sc">value</span>);</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code js-file-line">		self.show();</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code js-file-line">	util.addEvent($input, <span class="pl-s1"><span class="pl-pds">&#39;</span>blur<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code js-file-line">		<span class="pl-k">if</span> (noclose <span class="pl-k">&amp;&amp;</span> util.isIE8()) {</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code js-file-line">			noclose <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code js-file-line">			$input.<span class="pl-s3">focus</span>();</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code js-file-line">		<span class="pl-k">else</span> self.hide();</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code js-file-line">	util.addEvent($input, <span class="pl-s1"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> (<span class="pl-vpf">event</span>) {</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code js-file-line">		self.setSelected(<span class="pl-v">this</span>.<span class="pl-sc">value</span>);</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code js-file-line">	<span class="pl-s">var</span> $scrollContainer <span class="pl-k">=</span> util.scrollContainer($input);</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code js-file-line">	<span class="pl-k">if</span>( $scrollContainer ) {</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code js-file-line">		<span class="pl-c">// Hide calendar when $scrollContainer is scrolled</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code js-file-line">		util.addEvent($scrollContainer, <span class="pl-s1"><span class="pl-pds">&#39;</span>scroll<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> (<span class="pl-vpf">event</span>) {</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code js-file-line">			$input.<span class="pl-s3">blur</span>();</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code js-file-line">	self.subscribe(<span class="pl-s1"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code js-file-line">		$input.<span class="pl-sc">value</span> <span class="pl-k">=</span> self.getSelected();</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code js-file-line"><span class="pl-s3">Kalendae.Input</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> util.merge(Kalendae.<span class="pl-sc">prototype</span>, {</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code js-file-line">	defaults <span class="pl-k">:</span> util.merge(Kalendae.<span class="pl-sc">prototype</span>.defaults, {</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code js-file-line">		format<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>MM/DD/YYYY<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code js-file-line">		side<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code js-file-line">		closeButton<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code js-file-line">		offsetLeft<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code js-file-line">		offsetTop<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code js-file-line">	}),</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code js-file-line">	classes <span class="pl-k">:</span> util.merge(Kalendae.<span class="pl-sc">prototype</span>.<span class="pl-sc">classes</span>, {</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code js-file-line">		positioned <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>k-floating<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code js-file-line">		closeButton<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>k-btn-close<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code js-file-line">	}),</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code js-file-line">	<span class="pl-en">show</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code js-file-line">		<span class="pl-s">var</span> $container <span class="pl-k">=</span> <span class="pl-v">this</span>.container,</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code js-file-line">			style <span class="pl-k">=</span> $container.<span class="pl-sc">style</span>,</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code js-file-line">			$input <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">input</span>,</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code js-file-line">			pos <span class="pl-k">=</span> util.getPosition($input),</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code js-file-line">			$scrollContainer <span class="pl-k">=</span> util.scrollContainer($input),</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code js-file-line">			scrollTop <span class="pl-k">=</span> $scrollContainer <span class="pl-k">?</span> $scrollContainer.scrollTop <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code js-file-line">			opts <span class="pl-k">=</span> <span class="pl-v">this</span>.settings;</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code js-file-line">		style.<span class="pl-sc">display</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code js-file-line">		<span class="pl-k">switch</span> (opts.side) {</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code js-file-line">				style.<span class="pl-sc">left</span> <span class="pl-k">=</span> (pos.<span class="pl-sc">left</span> <span class="pl-k">-</span> util.getWidth($container) <span class="pl-k">+</span> opts.offsetLeft) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code js-file-line">				style.<span class="pl-sc">top</span>  <span class="pl-k">=</span> (pos.<span class="pl-sc">top</span> <span class="pl-k">+</span> opts.offsetTop <span class="pl-k">-</span> scrollTop) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code js-file-line">				style.<span class="pl-sc">left</span> <span class="pl-k">=</span> (pos.<span class="pl-sc">left</span> <span class="pl-k">+</span> util.getWidth($input)) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code js-file-line">				style.<span class="pl-sc">top</span>  <span class="pl-k">=</span> (pos.<span class="pl-sc">top</span> <span class="pl-k">+</span> opts.offsetTop <span class="pl-k">-</span> scrollTop) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code js-file-line">				style.<span class="pl-sc">left</span> <span class="pl-k">=</span> (pos.<span class="pl-sc">left</span> <span class="pl-k">+</span> opts.offsetLeft) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code js-file-line">				style.<span class="pl-sc">top</span>  <span class="pl-k">=</span> (pos.<span class="pl-sc">top</span> <span class="pl-k">-</span> util.getHeight($container) <span class="pl-k">+</span> opts.offsetTop <span class="pl-k">-</span> scrollTop) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code js-file-line">			<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code js-file-line">				<span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code js-file-line">			<span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code js-file-line">				style.<span class="pl-sc">left</span> <span class="pl-k">=</span> (pos.<span class="pl-sc">left</span> <span class="pl-k">+</span> opts.offsetLeft) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code js-file-line">				style.<span class="pl-sc">top</span>  <span class="pl-k">=</span> (pos.<span class="pl-sc">top</span> <span class="pl-k">+</span> util.getHeight($input) <span class="pl-k">+</span> opts.offsetTop <span class="pl-k">-</span> scrollTop) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code js-file-line">		style.position <span class="pl-k">=</span> util.isFixed($input) <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fixed<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code js-file-line">		<span class="pl-v">this</span>.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code js-file-line">	<span class="pl-en">hide</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code js-file-line">		<span class="pl-v">this</span>.container.<span class="pl-sc">style</span>.<span class="pl-sc">display</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code js-file-line">		<span class="pl-v">this</span>.publish(<span class="pl-s1"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code js-file-line"><span class="pl-c">* MinPubSub, modified for use on Kalendae</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code js-file-line"><span class="pl-c">* Copyright(c) 2011 Daniel Lamb &lt;daniellmb.com&gt;</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code js-file-line"><span class="pl-c">* https://github.com/daniellmb/MinPubSub</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code js-file-line"><span class="pl-c">* MIT Licensed</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code js-file-line"><span class="pl-s">var</span> <span class="pl-en">MinPubSub</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">d</span>){</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!</span>d) d <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code js-file-line">	<span class="pl-c">// the topic/subscription hash</span></td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code js-file-line">	<span class="pl-s">var</span> cache <span class="pl-k">=</span> d.c_ <span class="pl-k">||</span> {}; <span class="pl-c">//check for &quot;c_&quot; cache for unit testing</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code js-file-line">	<span class="pl-s3">d</span>.<span class="pl-en">publish</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-c">/* String */</span> <span class="pl-vpf">topic</span>, <span class="pl-c">/* Object */</span> <span class="pl-vpf">target</span>, <span class="pl-c">/* Array? */</span> <span class="pl-vpf">args</span>){</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code js-file-line">		<span class="pl-c">// summary:</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code js-file-line">		<span class="pl-c">//		Publish some data on a named topic.</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code js-file-line">		<span class="pl-c">// topic: String</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code js-file-line">		<span class="pl-c">//		The channel to publish on</span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code js-file-line">		<span class="pl-c">// args: Array?</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code js-file-line">		<span class="pl-c">//		The data to publish. Each array item is converted into an ordered</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code js-file-line">		<span class="pl-c">//		arguments on the subscribed functions.</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code js-file-line">		<span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code js-file-line">		<span class="pl-c">// example:</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code js-file-line">		<span class="pl-c">//		Publish stuff on &#39;/some/topic&#39;. Anything subscribed will be called</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code js-file-line">		<span class="pl-c">//		with a function signature like: function(a,b,c){ ... }</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code js-file-line">		<span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code js-file-line">		<span class="pl-c">//		publish(&quot;/some/topic&quot;, [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]);</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code js-file-line">		<span class="pl-s">var</span> subs <span class="pl-k">=</span> cache[topic],</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code js-file-line">			len <span class="pl-k">=</span> subs <span class="pl-k">?</span> subs.<span class="pl-sc">length</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code js-file-line">			r;</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code js-file-line">		<span class="pl-c">//can change loop or reverse array if the order matters</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code js-file-line">		<span class="pl-k">while</span>(len<span class="pl-k">--</span>){</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code js-file-line">			r <span class="pl-k">=</span> subs[len].<span class="pl-s3">apply</span>(target, args <span class="pl-k">||</span> []);</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> r <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> r;</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code js-file-line">	<span class="pl-s3">d</span>.<span class="pl-en">subscribe</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-c">/* String */</span> <span class="pl-vpf">topic</span>, <span class="pl-c">/* Function */</span> <span class="pl-vpf">callback</span>, <span class="pl-c">/* Boolean */</span> <span class="pl-vpf">topPriority</span>){</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code js-file-line">		<span class="pl-c">// summary:</span></td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code js-file-line">		<span class="pl-c">//		Register a callback on a named topic.</span></td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code js-file-line">		<span class="pl-c">// topic: String</span></td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code js-file-line">		<span class="pl-c">//		The channel to subscribe to</span></td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code js-file-line">		<span class="pl-c">// callback: Function</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code js-file-line">		<span class="pl-c">//		The handler event. Anytime something is publish&#39;ed on a</span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code js-file-line">		<span class="pl-c">//		subscribed channel, the callback will be called with the</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code js-file-line">		<span class="pl-c">//		published array as ordered arguments.</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code js-file-line">		<span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code js-file-line">		<span class="pl-c">// returns: Array</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code js-file-line">		<span class="pl-c">//		A handle which can be used to unsubscribe this particular subscription.</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code js-file-line">		<span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code js-file-line">		<span class="pl-c">// example:</span></td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code js-file-line">		<span class="pl-c">//		subscribe(&quot;/some/topic&quot;, function(a, b, c){ /* handle data */ });</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>cache[topic]){</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code js-file-line">			cache[topic] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code js-file-line">		<span class="pl-k">if</span> (topPriority)</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code js-file-line">			cache[topic].<span class="pl-s3">push</span>(callback);</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code js-file-line">		<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code js-file-line">			cache[topic].<span class="pl-s3">unshift</span>(callback);</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code js-file-line">		<span class="pl-k">return</span> [topic, callback]; <span class="pl-c">// Array</span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code js-file-line">	<span class="pl-s3">d</span>.<span class="pl-en">unsubscribe</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-c">/* Array */</span> <span class="pl-vpf">handle</span>){</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code js-file-line">		<span class="pl-c">// summary:</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code js-file-line">		<span class="pl-c">//		Disconnect a subscribed function for a topic.</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code js-file-line">		<span class="pl-c">// handle: Array</span></td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code js-file-line">		<span class="pl-c">//		The return value from a subscribe call.</span></td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code js-file-line">		<span class="pl-c">// example:</span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code js-file-line">		<span class="pl-c">//		var handle = subscribe(&quot;/some/topic&quot;, function(){});</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code js-file-line">		<span class="pl-c">//		unsubscribe(handle);</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code js-file-line">		<span class="pl-s">var</span> subs <span class="pl-k">=</span> cache[handle[<span class="pl-c1">0</span>]],</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code js-file-line">			callback <span class="pl-k">=</span> handle[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code js-file-line">			len <span class="pl-k">=</span> subs <span class="pl-k">?</span> subs.<span class="pl-sc">length</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code js-file-line">		<span class="pl-k">while</span>(len<span class="pl-k">--</span>){</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code js-file-line">			<span class="pl-k">if</span>(subs[len] <span class="pl-k">===</span> callback){</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code js-file-line">				subs.<span class="pl-s3">splice</span>(len, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code js-file-line">};<span class="pl-c">// moment.js</span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code js-file-line"><span class="pl-c">// version : 2.0.0</span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code js-file-line"><span class="pl-c">// author : Tim Wood</span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code js-file-line"><span class="pl-c">// license : MIT</span></td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code js-file-line"><span class="pl-c">// momentjs.com</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code js-file-line">(<span class="pl-st">function</span> (<span class="pl-vpf">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code js-file-line"><span class="pl-c">        Constants</span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code js-file-line">    <span class="pl-s">var</span> moment,</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code js-file-line">        VERSION <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>2.0.0<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code js-file-line">        round <span class="pl-k">=</span> <span class="pl-s3">Math</span>.round, i,</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code js-file-line">        <span class="pl-c">// internal storage for language config files</span></td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code js-file-line">        languages <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code js-file-line">        <span class="pl-c">// check for nodeJS</span></td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code js-file-line">        hasModule <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-sv">module</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-sv">module</span>.exports),</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code js-file-line">        <span class="pl-c">// ASP.NET json date format regex</span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code js-file-line">        aspNetJsonRegex <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/</span><span class="pl-k">?</span>Date<span class="pl-cce">\(</span>(<span class="pl-cce">\-</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>,</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code js-file-line">        <span class="pl-c">// format tokens</span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code js-file-line">        formattingTokens <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-cce">\[</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\[</span>]</span><span class="pl-k">*</span><span class="pl-cce">\]</span>)<span class="pl-k">|</span>(<span class="pl-cce">\\</span>)<span class="pl-k">?</span>(Mo<span class="pl-k">|</span>MM<span class="pl-k">?</span>M<span class="pl-k">?</span>M<span class="pl-k">?</span><span class="pl-k">|</span>Do<span class="pl-k">|</span>DDDo<span class="pl-k">|</span>DD<span class="pl-k">?</span>D<span class="pl-k">?</span>D<span class="pl-k">?</span><span class="pl-k">|</span>ddd<span class="pl-k">?</span>d<span class="pl-k">?</span><span class="pl-k">|</span>do<span class="pl-k">?</span><span class="pl-k">|</span>w<span class="pl-c1">[o|w]</span><span class="pl-k">?</span><span class="pl-k">|</span>W<span class="pl-c1">[o|W]</span><span class="pl-k">?</span><span class="pl-k">|</span>YYYYY<span class="pl-k">|</span>YYYY<span class="pl-k">|</span>YY<span class="pl-k">|</span>a<span class="pl-k">|</span>A<span class="pl-k">|</span>hh<span class="pl-k">?</span><span class="pl-k">|</span>HH<span class="pl-k">?</span><span class="pl-k">|</span>mm<span class="pl-k">?</span><span class="pl-k">|</span>ss<span class="pl-k">?</span><span class="pl-k">|</span>SS<span class="pl-k">?</span>S<span class="pl-k">?</span><span class="pl-k">|</span>X<span class="pl-k">|</span>zz<span class="pl-k">?</span><span class="pl-k">|</span>ZZ<span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">.</span>)<span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code js-file-line">        localFormattingTokens <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-cce">\[</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\[</span>]</span><span class="pl-k">*</span><span class="pl-cce">\]</span>)<span class="pl-k">|</span>(<span class="pl-cce">\\</span>)<span class="pl-k">?</span>(LT<span class="pl-k">|</span>LL<span class="pl-k">?</span>L<span class="pl-k">?</span>L<span class="pl-k">?</span><span class="pl-k">|</span>l<span class="pl-k">{1,4}</span>)<span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code js-file-line">        <span class="pl-c">// parsing tokens</span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code js-file-line">        parseMultipleFormatChunker <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">0-9a-zA-Z</span><span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>gi</span>,</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code js-file-line">        <span class="pl-c">// parsing token regexes</span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code js-file-line">        parseTokenOneOrTwoDigits <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\d\d</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>, <span class="pl-c">// 0 - 99</span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code js-file-line">        parseTokenOneToThreeDigits <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">{1,3}</span><span class="pl-pds">/</span></span>, <span class="pl-c">// 0 - 999</span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code js-file-line">        parseTokenThreeDigits <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">{3}</span><span class="pl-pds">/</span></span>, <span class="pl-c">// 000 - 999</span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code js-file-line">        parseTokenFourDigits <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">{1,4}</span><span class="pl-pds">/</span></span>, <span class="pl-c">// 0 - 9999</span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code js-file-line">        parseTokenSixDigits <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[+<span class="pl-cce">\-</span>]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">{1,6}</span><span class="pl-pds">/</span></span>, <span class="pl-c">// -999,999 - 999,999</span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code js-file-line">        parseTokenWord <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-c1">a-z</span><span class="pl-cce">\u</span>00A<span class="pl-c1">0-<span class="pl-cce">\u</span></span>05FF<span class="pl-cce">\u</span>070<span class="pl-c1">0-<span class="pl-cce">\u</span></span>D7FF<span class="pl-cce">\u</span>F90<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FDCF<span class="pl-cce">\u</span>FDF<span class="pl-c1">0-<span class="pl-cce">\u</span></span>FFEF]</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>060<span class="pl-c1">0-<span class="pl-cce">\u</span></span>06FF]</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*?</span><span class="pl-c1">[<span class="pl-cce">\u</span>060<span class="pl-c1">0-<span class="pl-cce">\u</span></span>06FF]</span><span class="pl-k">+</span><span class="pl-pds">/</span>i</span>, <span class="pl-c">// any word (or two) characters or numbers including two word month in arabic.</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code js-file-line">        parseTokenTimezone <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>Z<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\+\-</span>]</span><span class="pl-c1">\d\d</span>:<span class="pl-k">?</span><span class="pl-c1">\d\d</span><span class="pl-pds">/</span>i</span>, <span class="pl-c">// +00:00 -00:00 +0000 -0000 or Z</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code js-file-line">        parseTokenT <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>T<span class="pl-pds">/</span>i</span>, <span class="pl-c">// T (ISO seperator)</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code js-file-line">        parseTokenTimestampMs <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\+\-</span>]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>(<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">{1,3}</span>)<span class="pl-k">?</span><span class="pl-pds">/</span></span>, <span class="pl-c">// 123456789 123456789.123</span></td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code js-file-line">        <span class="pl-c">// preliminary iso regex</span></td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code js-file-line">        <span class="pl-c">// 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000</span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code js-file-line">        isoRegex <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-c1">\d</span><span class="pl-k">{4}</span>-<span class="pl-c1">\d\d</span>-<span class="pl-c1">\d\d</span>((T<span class="pl-k">|</span> )(<span class="pl-c1">\d\d</span>(:<span class="pl-c1">\d\d</span>(:<span class="pl-c1">\d\d</span>(<span class="pl-cce">\.</span><span class="pl-c1">\d\d</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">?</span>)<span class="pl-k">?</span>)<span class="pl-k">?</span>)<span class="pl-k">?</span>)<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-cce">\+\-</span>]</span><span class="pl-c1">\d\d</span>:<span class="pl-k">?</span><span class="pl-c1">\d\d</span>)<span class="pl-k">?</span>)<span class="pl-k">?</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code js-file-line">        isoFormat <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YYYY-MM-DDTHH:mm:ssZ<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code js-file-line">        <span class="pl-c">// iso time formats and regexes</span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code js-file-line">        isoTimes <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code js-file-line">            [<span class="pl-s1"><span class="pl-pds">&#39;</span>HH:mm:ss.S<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"> <span class="pl-pds">/</span>(T<span class="pl-k">|</span> )<span class="pl-c1">\d\d</span>:<span class="pl-c1">\d\d</span>:<span class="pl-c1">\d\d</span><span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">{1,3}</span><span class="pl-pds">/</span></span>],</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code js-file-line">            [<span class="pl-s1"><span class="pl-pds">&#39;</span>HH:mm:ss<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"> <span class="pl-pds">/</span>(T<span class="pl-k">|</span> )<span class="pl-c1">\d\d</span>:<span class="pl-c1">\d\d</span>:<span class="pl-c1">\d\d</span><span class="pl-pds">/</span></span>],</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code js-file-line">            [<span class="pl-s1"><span class="pl-pds">&#39;</span>HH:mm<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"> <span class="pl-pds">/</span>(T<span class="pl-k">|</span> )<span class="pl-c1">\d\d</span>:<span class="pl-c1">\d\d</span><span class="pl-pds">/</span></span>],</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code js-file-line">            [<span class="pl-s1"><span class="pl-pds">&#39;</span>HH<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"> <span class="pl-pds">/</span>(T<span class="pl-k">|</span> )<span class="pl-c1">\d\d</span><span class="pl-pds">/</span></span>]</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code js-file-line">        ],</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code js-file-line">        <span class="pl-c">// timezone chunker &quot;+10:00&quot; &gt; [&quot;10&quot;, &quot;00&quot;] or &quot;-1530&quot; &gt; [&quot;-15&quot;, &quot;30&quot;]</span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code js-file-line">        parseTimezoneChunker <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-cce">\+\-</span>]</span><span class="pl-k">|</span><span class="pl-c1">\d\d</span>)<span class="pl-pds">/</span>gi</span>,</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code js-file-line">        <span class="pl-c">// getter and setter names</span></td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code js-file-line">        proxyGettersAndSetters <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Month|Date|Hours|Minutes|Seconds|Milliseconds<span class="pl-pds">&#39;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code js-file-line">        unitMillisecondFactors <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code js-file-line">            <span class="pl-s1"><span class="pl-pds">&#39;</span>Milliseconds<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code js-file-line">            <span class="pl-s1"><span class="pl-pds">&#39;</span>Seconds<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">1e3</span>,</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code js-file-line">            <span class="pl-s1"><span class="pl-pds">&#39;</span>Minutes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">6e4</span>,</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code js-file-line">            <span class="pl-s1"><span class="pl-pds">&#39;</span>Hours<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">36e5</span>,</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code js-file-line">            <span class="pl-s1"><span class="pl-pds">&#39;</span>Days<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">864e5</span>,</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code js-file-line">            <span class="pl-s1"><span class="pl-pds">&#39;</span>Months<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">2592e6</span>,</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code js-file-line">            <span class="pl-s1"><span class="pl-pds">&#39;</span>Years<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">31536e6</span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code js-file-line">        <span class="pl-c">// format function strings</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code js-file-line">        formatFunctions <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code js-file-line">        <span class="pl-c">// tokens to ordinalize and pad</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code js-file-line">        ordinalizeTokens <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>DDD w W M D d<span class="pl-pds">&#39;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code js-file-line">        paddedTokens <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>M D H h m s w W<span class="pl-pds">&#39;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code js-file-line">        formatTokenFunctions <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code js-file-line">            <span class="pl-en">M</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.month() <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code js-file-line">            <span class="pl-en">MMM</span>  : <span class="pl-st">function</span> (<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().monthsShort(<span class="pl-v">this</span>, format);</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code js-file-line">            <span class="pl-en">MMMM</span> : <span class="pl-st">function</span> (<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().months(<span class="pl-v">this</span>, format);</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code js-file-line">            <span class="pl-en">D</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.date();</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code js-file-line">            <span class="pl-en">DDD</span>  : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.dayOfYear();</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code js-file-line">            <span class="pl-en">d</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.day();</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code js-file-line">            <span class="pl-en">dd</span>   : <span class="pl-st">function</span> (<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().weekdaysMin(<span class="pl-v">this</span>, format);</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code js-file-line">            <span class="pl-en">ddd</span>  : <span class="pl-st">function</span> (<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().weekdaysShort(<span class="pl-v">this</span>, format);</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code js-file-line">            <span class="pl-en">dddd</span> : <span class="pl-st">function</span> (<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().weekdays(<span class="pl-v">this</span>, format);</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code js-file-line">            <span class="pl-en">w</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.week();</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code js-file-line">            <span class="pl-en">W</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.isoWeek();</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code js-file-line">            <span class="pl-en">YY</span>   : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code js-file-line">                <span class="pl-k">return</span> leftZeroFill(<span class="pl-v">this</span>.year() <span class="pl-k">%</span> <span class="pl-c1">100</span>, <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code js-file-line">            <span class="pl-en">YYYY</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code js-file-line">                <span class="pl-k">return</span> leftZeroFill(<span class="pl-v">this</span>.year(), <span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code js-file-line">            <span class="pl-en">YYYYY</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code js-file-line">                <span class="pl-k">return</span> leftZeroFill(<span class="pl-v">this</span>.year(), <span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code js-file-line">            <span class="pl-en">a</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().meridiem(<span class="pl-v">this</span>.hours(), <span class="pl-v">this</span>.minutes(), <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code js-file-line">            <span class="pl-en">A</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().meridiem(<span class="pl-v">this</span>.hours(), <span class="pl-v">this</span>.minutes(), <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code js-file-line">            <span class="pl-en">H</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.hours();</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code js-file-line">            <span class="pl-en">h</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.hours() <span class="pl-k">%</span> <span class="pl-c1">12</span> <span class="pl-k">||</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code js-file-line">            <span class="pl-en">m</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.minutes();</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code js-file-line">            <span class="pl-en">s</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.seconds();</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code js-file-line">            <span class="pl-en">S</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-k">~~</span>(<span class="pl-v">this</span>.milliseconds() / <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code js-file-line">            <span class="pl-en">SS</span>   : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code js-file-line">                <span class="pl-k">return</span> leftZeroFill(<span class="pl-k">~~</span>(<span class="pl-v">this</span>.milliseconds() / <span class="pl-c1">10</span>), <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code js-file-line">            <span class="pl-en">SSS</span>  : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code js-file-line">                <span class="pl-k">return</span> leftZeroFill(<span class="pl-v">this</span>.milliseconds(), <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code js-file-line">            <span class="pl-en">Z</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code js-file-line">                <span class="pl-s">var</span> a <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-v">this</span>.zone(),</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code js-file-line">                    b <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>+<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code js-file-line">                <span class="pl-k">if</span> (a <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code js-file-line">                    a <span class="pl-k">=</span> <span class="pl-k">-</span>a;</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code js-file-line">                    b <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code js-file-line">                <span class="pl-k">return</span> b <span class="pl-k">+</span> leftZeroFill(<span class="pl-k">~~</span>(a / <span class="pl-c1">60</span>), <span class="pl-c1">2</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> leftZeroFill(<span class="pl-k">~~</span>a <span class="pl-k">%</span> <span class="pl-c1">60</span>, <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code js-file-line">            <span class="pl-en">ZZ</span>   : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code js-file-line">                <span class="pl-s">var</span> a <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-v">this</span>.zone(),</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code js-file-line">                    b <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>+<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code js-file-line">                <span class="pl-k">if</span> (a <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code js-file-line">                    a <span class="pl-k">=</span> <span class="pl-k">-</span>a;</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code js-file-line">                    b <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code js-file-line">                <span class="pl-k">return</span> b <span class="pl-k">+</span> leftZeroFill(<span class="pl-k">~~</span>(<span class="pl-c1">10</span> <span class="pl-k">*</span> a / <span class="pl-c1">6</span>), <span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code js-file-line">            <span class="pl-en">X</span>    : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>.unix();</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">padToken</span>(<span class="pl-vpf">func</span>, <span class="pl-vpf">count</span>) {</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-st">function</span> (<span class="pl-vpf">a</span>) {</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code js-file-line">            <span class="pl-k">return</span> leftZeroFill(func.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, a), count);</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">ordinalizeToken</span>(<span class="pl-vpf">func</span>) {</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-st">function</span> (<span class="pl-vpf">a</span>) {</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().ordinal(func.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, a));</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code js-file-line">    <span class="pl-k">while</span> (ordinalizeTokens.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code js-file-line">        i <span class="pl-k">=</span> ordinalizeTokens.<span class="pl-s3">pop</span>();</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code js-file-line">        formatTokenFunctions[i <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>o<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> ordinalizeToken(formatTokenFunctions[i]);</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code js-file-line">    <span class="pl-k">while</span> (paddedTokens.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code js-file-line">        i <span class="pl-k">=</span> paddedTokens.<span class="pl-s3">pop</span>();</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code js-file-line">        formatTokenFunctions[i <span class="pl-k">+</span> i] <span class="pl-k">=</span> padToken(formatTokenFunctions[i], <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code js-file-line">    formatTokenFunctions.DDDD <span class="pl-k">=</span> padToken(formatTokenFunctions.DDD, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code js-file-line"><span class="pl-c">        Constructors</span></td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">Language</span>() {</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code js-file-line">    <span class="pl-c">// Moment prototype object</span></td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">Moment</span>(<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code js-file-line">        extend(<span class="pl-v">this</span>, config);</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code js-file-line">    <span class="pl-c">// Duration Constructor</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">Duration</span>(<span class="pl-vpf">duration</span>) {</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code js-file-line">        <span class="pl-s">var</span> data <span class="pl-k">=</span> <span class="pl-v">this</span>._data <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code js-file-line">            years <span class="pl-k">=</span> duration.years <span class="pl-k">||</span> duration.year <span class="pl-k">||</span> duration.<span class="pl-sc">y</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code js-file-line">            months <span class="pl-k">=</span> duration.months <span class="pl-k">||</span> duration.month <span class="pl-k">||</span> duration.M <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code js-file-line">            weeks <span class="pl-k">=</span> duration.weeks <span class="pl-k">||</span> duration.week <span class="pl-k">||</span> duration.w <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code js-file-line">            days <span class="pl-k">=</span> duration.days <span class="pl-k">||</span> duration.day <span class="pl-k">||</span> duration.d <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code js-file-line">            hours <span class="pl-k">=</span> duration.hours <span class="pl-k">||</span> duration.hour <span class="pl-k">||</span> duration.h <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code js-file-line">            minutes <span class="pl-k">=</span> duration.minutes <span class="pl-k">||</span> duration.minute <span class="pl-k">||</span> duration.m <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code js-file-line">            seconds <span class="pl-k">=</span> duration.seconds <span class="pl-k">||</span> duration.second <span class="pl-k">||</span> duration.s <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code js-file-line">            milliseconds <span class="pl-k">=</span> duration.milliseconds <span class="pl-k">||</span> duration.millisecond <span class="pl-k">||</span> duration.ms <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code js-file-line">        <span class="pl-c">// representation for dateAddRemove</span></td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code js-file-line">        <span class="pl-v">this</span>._milliseconds <span class="pl-k">=</span> milliseconds <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code js-file-line">            seconds <span class="pl-k">*</span> <span class="pl-c1">1e3</span> <span class="pl-k">+</span> <span class="pl-c">// 1000</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code js-file-line">            minutes <span class="pl-k">*</span> <span class="pl-c1">6e4</span> <span class="pl-k">+</span> <span class="pl-c">// 1000 * 60</span></td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code js-file-line">            hours <span class="pl-k">*</span> <span class="pl-c1">36e5</span>; <span class="pl-c">// 1000 * 60 * 60</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code js-file-line">        <span class="pl-c">// Because of dateAddRemove treats 24 hours as different from a</span></td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code js-file-line">        <span class="pl-c">// day when working around DST, we need to store them separately</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code js-file-line">        <span class="pl-v">this</span>._days <span class="pl-k">=</span> days <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code js-file-line">            weeks <span class="pl-k">*</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code js-file-line">        <span class="pl-c">// It is impossible translate months into days without knowing</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code js-file-line">        <span class="pl-c">// which months you are are talking about, so we have to store</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code js-file-line">        <span class="pl-c">// it separately.</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code js-file-line">        <span class="pl-v">this</span>._months <span class="pl-k">=</span> months <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code js-file-line">            years <span class="pl-k">*</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code js-file-line">        <span class="pl-c">// The following code bubbles up values, see the tests for</span></td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code js-file-line">        <span class="pl-c">// examples of what that means.</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code js-file-line">        data.milliseconds <span class="pl-k">=</span> milliseconds <span class="pl-k">%</span> <span class="pl-c1">1000</span>;</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code js-file-line">        seconds <span class="pl-k">+=</span> absRound(milliseconds / <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code js-file-line">        data.seconds <span class="pl-k">=</span> seconds <span class="pl-k">%</span> <span class="pl-c1">60</span>;</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code js-file-line">        minutes <span class="pl-k">+=</span> absRound(seconds / <span class="pl-c1">60</span>);</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code js-file-line">        data.minutes <span class="pl-k">=</span> minutes <span class="pl-k">%</span> <span class="pl-c1">60</span>;</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code js-file-line">        hours <span class="pl-k">+=</span> absRound(minutes / <span class="pl-c1">60</span>);</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code js-file-line">        data.hours <span class="pl-k">=</span> hours <span class="pl-k">%</span> <span class="pl-c1">24</span>;</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code js-file-line">        days <span class="pl-k">+=</span> absRound(hours / <span class="pl-c1">24</span>);</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code js-file-line">        days <span class="pl-k">+=</span> weeks <span class="pl-k">*</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code js-file-line">        data.days <span class="pl-k">=</span> days <span class="pl-k">%</span> <span class="pl-c1">30</span>;</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code js-file-line">        months <span class="pl-k">+=</span> absRound(days / <span class="pl-c1">30</span>);</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code js-file-line">        data.months <span class="pl-k">=</span> months <span class="pl-k">%</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code js-file-line">        years <span class="pl-k">+=</span> absRound(months / <span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code js-file-line">        data.years <span class="pl-k">=</span> years;</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code js-file-line"><span class="pl-c">        Helpers</span></td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">extend</span>(<span class="pl-vpf">a</span>, <span class="pl-vpf">b</span>) {</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code js-file-line">        <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">in</span> b) {</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code js-file-line">            <span class="pl-k">if</span> (b.hasOwnProperty(i)) {</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code js-file-line">                a[i] <span class="pl-k">=</span> b[i];</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code js-file-line">        <span class="pl-k">return</span> a;</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">absRound</span>(<span class="pl-vpf">number</span>) {</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code js-file-line">        <span class="pl-k">if</span> (number <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-s3">Math</span>.<span class="pl-s3">ceil</span>(number);</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-s3">Math</span>.<span class="pl-s3">floor</span>(number);</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code js-file-line">    <span class="pl-c">// left zero fill a number</span></td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code js-file-line">    <span class="pl-c">// see http://jsperf.com/left-zero-filling for performance comparison</span></td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">leftZeroFill</span>(<span class="pl-vpf">number</span>, <span class="pl-vpf">targetLength</span>) {</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code js-file-line">        <span class="pl-s">var</span> output <span class="pl-k">=</span> number <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code js-file-line">        <span class="pl-k">while</span> (output.<span class="pl-sc">length</span> <span class="pl-k">&lt;</span> targetLength) {</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code js-file-line">            output <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> output;</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code js-file-line">        <span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code js-file-line">    <span class="pl-c">// helper function for _.addTime and _.subtractTime</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">addOrSubtractDurationFromMoment</span>(<span class="pl-vpf">mom</span>, <span class="pl-vpf">duration</span>, <span class="pl-vpf">isAdding</span>) {</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code js-file-line">        <span class="pl-s">var</span> ms <span class="pl-k">=</span> duration._milliseconds,</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code js-file-line">            d <span class="pl-k">=</span> duration._days,</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code js-file-line">            M <span class="pl-k">=</span> duration._months,</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code js-file-line">            currentDate;</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code js-file-line">        <span class="pl-k">if</span> (ms) {</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code js-file-line">            mom._d.<span class="pl-s3">setTime</span>(<span class="pl-k">+</span>mom <span class="pl-k">+</span> ms <span class="pl-k">*</span> isAdding);</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code js-file-line">        <span class="pl-k">if</span> (d) {</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code js-file-line">            mom.date(mom.date() <span class="pl-k">+</span> d <span class="pl-k">*</span> isAdding);</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code js-file-line">        <span class="pl-k">if</span> (M) {</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code js-file-line">            currentDate <span class="pl-k">=</span> mom.date();</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code js-file-line">            mom.date(<span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code js-file-line">                .month(mom.month() <span class="pl-k">+</span> M <span class="pl-k">*</span> isAdding)</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code js-file-line">                .date(<span class="pl-s3">Math</span>.<span class="pl-s3">min</span>(currentDate, mom.daysInMonth()));</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code js-file-line">    <span class="pl-c">// check if is an array</span></td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">isArray</span>(<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-s3">Object</span>.<span class="pl-sc">prototype</span>.toString.<span class="pl-s3">call</span>(input) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>[object Array]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code js-file-line">    <span class="pl-c">// compare two arrays, return the number of differences</span></td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">compareArrays</span>(<span class="pl-vpf">array1</span>, <span class="pl-vpf">array2</span>) {</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code js-file-line">        <span class="pl-s">var</span> len <span class="pl-k">=</span> <span class="pl-s3">Math</span>.<span class="pl-s3">min</span>(array1.<span class="pl-sc">length</span>, array2.<span class="pl-sc">length</span>),</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code js-file-line">            lengthDiff <span class="pl-k">=</span> <span class="pl-s3">Math</span>.<span class="pl-s3">abs</span>(array1.<span class="pl-sc">length</span> <span class="pl-k">-</span> array2.<span class="pl-sc">length</span>),</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code js-file-line">            diffs <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code js-file-line">            i;</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code js-file-line">        <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">~~</span>array1[i] <span class="pl-k">!==</span> <span class="pl-k">~~</span>array2[i]) {</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code js-file-line">                diffs<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code js-file-line">        <span class="pl-k">return</span> diffs <span class="pl-k">+</span> lengthDiff;</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code js-file-line"><span class="pl-c">        Languages</span></td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code js-file-line">    <span class="pl-s3">Language</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code js-file-line">        <span class="pl-en">set</span> : <span class="pl-st">function</span> (<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code js-file-line">            <span class="pl-s">var</span> prop, i;</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">in</span> config) {</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code js-file-line">                prop <span class="pl-k">=</span> config[i];</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">typeof</span> prop <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code js-file-line">                    <span class="pl-v">this</span>[i] <span class="pl-k">=</span> prop;</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code js-file-line">                    <span class="pl-v">this</span>[<span class="pl-s1"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i] <span class="pl-k">=</span> prop;</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code js-file-line">        _months <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>January_February_March_April_May_June_July_August_September_October_November_December<span class="pl-pds">&quot;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code js-file-line">        <span class="pl-en">months</span> : <span class="pl-st">function</span> (<span class="pl-vpf">m</span>) {</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._months[m.month()];</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code js-file-line">        _monthsShort <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec<span class="pl-pds">&quot;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code js-file-line">        <span class="pl-en">monthsShort</span> : <span class="pl-st">function</span> (<span class="pl-vpf">m</span>) {</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._monthsShort[m.month()];</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code js-file-line">        <span class="pl-en">monthsParse</span> : <span class="pl-st">function</span> (<span class="pl-vpf">monthName</span>) {</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code js-file-line">            <span class="pl-s">var</span> i, mom, regex, output;</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>._monthsParse) {</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code js-file-line">                <span class="pl-v">this</span>._monthsParse <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">12</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code js-file-line">                <span class="pl-c">// make the regex if we don&#39;t have it already</span></td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>._monthsParse[i]) {</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code js-file-line">                    mom <span class="pl-k">=</span> moment([<span class="pl-c1">2000</span>, i]);</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code js-file-line">                    regex <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.months(mom, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>|^<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.monthsShort(mom, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code js-file-line">                    <span class="pl-v">this</span>._monthsParse[i] <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(regex.<span class="pl-s3">replace</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>), <span class="pl-s1"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code js-file-line">                <span class="pl-c">// test the regex</span></td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code js-file-line">                <span class="pl-k">if</span> (<span class="pl-v">this</span>._monthsParse[i].<span class="pl-s3">test</span>(monthName)) {</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code js-file-line">                    <span class="pl-k">return</span> i;</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code js-file-line">        _weekdays <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday<span class="pl-pds">&quot;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code js-file-line">        <span class="pl-en">weekdays</span> : <span class="pl-st">function</span> (<span class="pl-vpf">m</span>) {</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._weekdays[m.day()];</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code js-file-line">        _weekdaysShort <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Sun_Mon_Tue_Wed_Thu_Fri_Sat<span class="pl-pds">&quot;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code js-file-line">        <span class="pl-en">weekdaysShort</span> : <span class="pl-st">function</span> (<span class="pl-vpf">m</span>) {</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._weekdaysShort[m.day()];</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code js-file-line">        _weekdaysMin <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Su_Mo_Tu_We_Th_Fr_Sa<span class="pl-pds">&quot;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code js-file-line">        <span class="pl-en">weekdaysMin</span> : <span class="pl-st">function</span> (<span class="pl-vpf">m</span>) {</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._weekdaysMin[m.day()];</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code js-file-line">        _longDateFormat <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code js-file-line">            LT <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>h:mm A<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code js-file-line">            L <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MM/DD/YYYY<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code js-file-line">            LL <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MMMM D YYYY<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code js-file-line">            LLL <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>MMMM D YYYY LT<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code js-file-line">            LLLL <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>dddd, MMMM D YYYY LT<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code js-file-line">        <span class="pl-en">longDateFormat</span> : <span class="pl-st">function</span> (<span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code js-file-line">            <span class="pl-s">var</span> output <span class="pl-k">=</span> <span class="pl-v">this</span>._longDateFormat[key];</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>output <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>._longDateFormat[key.<span class="pl-s3">toUpperCase</span>()]) {</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code js-file-line">                output <span class="pl-k">=</span> <span class="pl-v">this</span>._longDateFormat[key.<span class="pl-s3">toUpperCase</span>()].<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>MMMM<span class="pl-k">|</span>MM<span class="pl-k">|</span>DD<span class="pl-k">|</span>dddd<span class="pl-pds">/</span>g</span>, <span class="pl-st">function</span> (<span class="pl-vpf">val</span>) {</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code js-file-line">                    <span class="pl-k">return</span> val.<span class="pl-s3">slice</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code js-file-line">                <span class="pl-v">this</span>._longDateFormat[key] <span class="pl-k">=</span> output;</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code js-file-line">            <span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code js-file-line">        <span class="pl-en">meridiem</span> : <span class="pl-st">function</span> (<span class="pl-vpf">hours</span>, <span class="pl-vpf">minutes</span>, <span class="pl-vpf">isLower</span>) {</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code js-file-line">            <span class="pl-k">if</span> (hours <span class="pl-k">&gt;</span> <span class="pl-c1">11</span>) {</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code js-file-line">                <span class="pl-k">return</span> isLower <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>pm<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>PM<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code js-file-line">                <span class="pl-k">return</span> isLower <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>am<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>AM<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code js-file-line">        _calendar <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code js-file-line">            sameDay <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>[Today at] LT<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code js-file-line">            nextDay <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>[Tomorrow at] LT<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code js-file-line">            nextWeek <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>dddd [at] LT<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code js-file-line">            lastDay <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>[Yesterday at] LT<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code js-file-line">            lastWeek <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>[last] dddd [at] LT<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code js-file-line">            sameElse <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>L<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code js-file-line">        <span class="pl-en">calendar</span> : <span class="pl-st">function</span> (<span class="pl-vpf">key</span>, <span class="pl-vpf">mom</span>) {</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code js-file-line">            <span class="pl-s">var</span> output <span class="pl-k">=</span> <span class="pl-v">this</span>._calendar[key];</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">typeof</span> output <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> output.<span class="pl-s3">apply</span>(mom) <span class="pl-k">:</span> output;</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code js-file-line">        _relativeTime <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code js-file-line">            future <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>in %s<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code js-file-line">            past <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%s ago<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code js-file-line">            s <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>a few seconds<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code js-file-line">            m <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>a minute<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code js-file-line">            mm <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%d minutes<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code js-file-line">            h <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>an hour<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code js-file-line">            hh <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%d hours<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code js-file-line">            d <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>a day<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code js-file-line">            dd <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%d days<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code js-file-line">            M <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>a month<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code js-file-line">            MM <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%d months<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code js-file-line">            y <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>a year<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code js-file-line">            yy <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%d years<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code js-file-line">        <span class="pl-en">relativeTime</span> : <span class="pl-st">function</span> (<span class="pl-vpf">number</span>, <span class="pl-vpf">withoutSuffix</span>, <span class="pl-vpf">string</span>, <span class="pl-vpf">isFuture</span>) {</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code js-file-line">            <span class="pl-s">var</span> output <span class="pl-k">=</span> <span class="pl-v">this</span>._relativeTime[string];</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code js-file-line">            <span class="pl-k">return</span> (<span class="pl-k">typeof</span> output <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code js-file-line">                output(number, withoutSuffix, string, isFuture) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code js-file-line">                output.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%d<span class="pl-pds">/</span>i</span>, number);</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code js-file-line">        <span class="pl-en">pastFuture</span> : <span class="pl-st">function</span> (<span class="pl-vpf">diff</span>, <span class="pl-vpf">output</span>) {</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code js-file-line">            <span class="pl-s">var</span> format <span class="pl-k">=</span> <span class="pl-v">this</span>._relativeTime[diff <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>future<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>past<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">typeof</span> format <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> format(output) <span class="pl-k">:</span> format.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%s<span class="pl-pds">/</span>i</span>, output);</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code js-file-line">        <span class="pl-en">ordinal</span> : <span class="pl-st">function</span> (<span class="pl-vpf">number</span>) {</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._ordinal.<span class="pl-s3">replace</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>%d<span class="pl-pds">&quot;</span></span>, number);</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code js-file-line">        _ordinal <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%d<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code js-file-line">        <span class="pl-en">preparse</span> : <span class="pl-st">function</span> (<span class="pl-vpf">string</span>) {</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code js-file-line">            <span class="pl-k">return</span> string;</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code js-file-line">        <span class="pl-en">postformat</span> : <span class="pl-st">function</span> (<span class="pl-vpf">string</span>) {</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code js-file-line">            <span class="pl-k">return</span> string;</td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code js-file-line">        <span class="pl-en">week</span> : <span class="pl-st">function</span> (<span class="pl-vpf">mom</span>) {</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code js-file-line">            <span class="pl-k">return</span> weekOfYear(mom, <span class="pl-v">this</span>._week.dow, <span class="pl-v">this</span>._week.doy);</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code js-file-line">        _week <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code js-file-line">            dow <span class="pl-k">:</span> <span class="pl-c1">0</span>, <span class="pl-c">// Sunday is the first day of the week.</span></td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code js-file-line">            doy <span class="pl-k">:</span> <span class="pl-c1">6</span>  <span class="pl-c">// The week that contains Jan 1st is the first week of the year.</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code js-file-line">    <span class="pl-c">// Loads a language definition into the `languages` cache.  The function</span></td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code js-file-line">    <span class="pl-c">// takes a key and optionally values.  If not in the browser and no values</span></td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code js-file-line">    <span class="pl-c">// are provided, it will load the language file module.  As a convenience,</span></td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code js-file-line">    <span class="pl-c">// this function also returns the language values.</span></td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">loadLang</span>(<span class="pl-vpf">key</span>, <span class="pl-vpf">values</span>) {</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code js-file-line">        values.<span class="pl-sc">abbr</span> <span class="pl-k">=</span> key;</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>languages[key]) {</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code js-file-line">            languages[key] <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Language</span>();</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code js-file-line">        languages[key].set(values);</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code js-file-line">        <span class="pl-k">return</span> languages[key];</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code js-file-line">    <span class="pl-c">// Determines which language definition to use and returns it.</span></td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code js-file-line">    <span class="pl-c">// With no parameters, it will return the global language.  If you</span></td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code js-file-line">    <span class="pl-c">// pass in a language key, such as &#39;en&#39;, it will return the</span></td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code js-file-line">    <span class="pl-c">// definition for &#39;en&#39;, so long as &#39;en&#39; has already been loaded using</span></td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code js-file-line">    <span class="pl-c">// moment.lang.</span></td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">getLangDefinition</span>(<span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>key) {</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code js-file-line">            <span class="pl-k">return</span> moment.fn._lang;</td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>languages[key] <span class="pl-k">&amp;&amp;</span> hasModule) {</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code js-file-line">            <span class="pl-s3">require</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>./lang/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> key);</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code js-file-line">        <span class="pl-k">return</span> languages[key];</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code js-file-line"><span class="pl-c">        Formatting</span></td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">removeFormattingTokens</span>(<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code js-file-line">        <span class="pl-k">if</span> (input.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\[</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-cce">\]</span><span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code js-file-line">            <span class="pl-k">return</span> input.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\[</span><span class="pl-k">|</span><span class="pl-cce">\]</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code js-file-line">        <span class="pl-k">return</span> input.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeFormatFunction</span>(<span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code js-file-line">        <span class="pl-s">var</span> array <span class="pl-k">=</span> format.<span class="pl-s3">match</span>(formattingTokens), i, length;</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code js-file-line">        <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> array.<span class="pl-sc">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code js-file-line">            <span class="pl-k">if</span> (formatTokenFunctions[array[i]]) {</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code js-file-line">                array[i] <span class="pl-k">=</span> formatTokenFunctions[array[i]];</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code js-file-line">                array[i] <span class="pl-k">=</span> removeFormattingTokens(array[i]);</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-st">function</span> (<span class="pl-vpf">mom</span>) {</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code js-file-line">            <span class="pl-s">var</span> output <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code js-file-line">                output <span class="pl-k">+=</span> <span class="pl-k">typeof</span> array[i].call <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> array[i].<span class="pl-s3">call</span>(mom, format) <span class="pl-k">:</span> array[i];</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code js-file-line">            <span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code js-file-line">    <span class="pl-c">// format date using native date object</span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">formatMoment</span>(<span class="pl-vpf">m</span>, <span class="pl-vpf">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code js-file-line">        <span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code js-file-line">        <span class="pl-st">function</span> <span class="pl-en">replaceLongDateFormatTokens</span>(<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code js-file-line">            <span class="pl-k">return</span> m.<span class="pl-sc">lang</span>().longDateFormat(input) <span class="pl-k">||</span> input;</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code js-file-line">        <span class="pl-k">while</span> (i<span class="pl-k">--</span> <span class="pl-k">&amp;&amp;</span> localFormattingTokens.<span class="pl-s3">test</span>(format)) {</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code js-file-line">            format <span class="pl-k">=</span> format.<span class="pl-s3">replace</span>(localFormattingTokens, replaceLongDateFormatTokens);</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>formatFunctions[format]) {</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code js-file-line">            formatFunctions[format] <span class="pl-k">=</span> makeFormatFunction(format);</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code js-file-line">        <span class="pl-k">return</span> formatFunctions[format](m);</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code js-file-line"><span class="pl-c">        Parsing</span></td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code js-file-line">    <span class="pl-c">// get the regex to find the next token</span></td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">getParseRegexForToken</span>(<span class="pl-vpf">token</span>) {</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code js-file-line">        <span class="pl-k">switch</span> (token) {</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>DDDD<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenThreeDigits;</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YYYY<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenFourDigits;</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YYYYY<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenSixDigits;</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>S<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>SS<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>SSS<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>DDD<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenOneToThreeDigits;</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>MMM<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>MMMM<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>dd<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ddd<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>dddd<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenWord;</td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>X<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenTimestampMs;</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Z<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ZZ<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenTimezone;</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>T<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenT;</td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>MM<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>DD<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YY<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>HH<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hh<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>mm<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ss<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>H<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>h<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code js-file-line">            <span class="pl-k">return</span> parseTokenOneOrTwoDigits;</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code js-file-line">        <span class="pl-k">default</span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(token.<span class="pl-s3">replace</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code js-file-line">    <span class="pl-c">// function to convert string input to date</span></td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">addTimeToArrayFromToken</span>(<span class="pl-vpf">token</span>, <span class="pl-vpf">input</span>, <span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code js-file-line">        <span class="pl-s">var</span> a, b,</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code js-file-line">            datePartArray <span class="pl-k">=</span> config._a;</td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code js-file-line">        <span class="pl-k">switch</span> (token) {</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code js-file-line">        <span class="pl-c">// MONTH</span></td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to MM</span></td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>MM<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code js-file-line">            datePartArray[<span class="pl-c1">1</span>] <span class="pl-k">=</span> (input <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-k">~~</span>input <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>MMM<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to MMMM</span></td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>MMMM<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code js-file-line">            a <span class="pl-k">=</span> getLangDefinition(config._l).monthsParse(input);</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code js-file-line">            <span class="pl-c">// if we didn&#39;t find a month name, mark the date as invalid.</span></td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code js-file-line">            <span class="pl-k">if</span> (a <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code js-file-line">                datePartArray[<span class="pl-c1">1</span>] <span class="pl-k">=</span> a;</td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code js-file-line">                config._isValid <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code js-file-line">        <span class="pl-c">// DAY OF MONTH</span></td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to DDDD</span></td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>DD<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to DDDD</span></td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>DDD<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to DDDD</span></td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>DDDD<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code js-file-line">            <span class="pl-k">if</span> (input <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code js-file-line">                datePartArray[<span class="pl-c1">2</span>] <span class="pl-k">=</span> <span class="pl-k">~~</span>input;</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code js-file-line">        <span class="pl-c">// YEAR</span></td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YY<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code js-file-line">            datePartArray[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-k">~~</span>input <span class="pl-k">+</span> (<span class="pl-k">~~</span>input <span class="pl-k">&gt;</span> <span class="pl-c1">68</span> <span class="pl-k">?</span> <span class="pl-c1">1900</span> <span class="pl-k">:</span> <span class="pl-c1">2000</span>);</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YYYY<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YYYYY<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code js-file-line">            datePartArray[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-k">~~</span>input;</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code js-file-line">        <span class="pl-c">// AM / PM</span></td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to A</span></td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code js-file-line">            config._isPm <span class="pl-k">=</span> ((input <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-s3">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>pm<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code js-file-line">        <span class="pl-c">// 24 HOUR</span></td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>H<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to hh</span></td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>HH<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to hh</span></td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>h<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to hh</span></td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hh<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code js-file-line">            datePartArray[<span class="pl-c1">3</span>] <span class="pl-k">=</span> <span class="pl-k">~~</span>input;</td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code js-file-line">        <span class="pl-c">// MINUTE</span></td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to mm</span></td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>mm<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code js-file-line">            datePartArray[<span class="pl-c1">4</span>] <span class="pl-k">=</span> <span class="pl-k">~~</span>input;</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code js-file-line">        <span class="pl-c">// SECOND</span></td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to ss</span></td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ss<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code js-file-line">            datePartArray[<span class="pl-c1">5</span>] <span class="pl-k">=</span> <span class="pl-k">~~</span>input;</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code js-file-line">        <span class="pl-c">// MILLISECOND</span></td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>S<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>SS<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>SSS<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code js-file-line">            datePartArray[<span class="pl-c1">6</span>] <span class="pl-k">=</span> <span class="pl-k">~~</span> ((<span class="pl-s1"><span class="pl-pds">&#39;</span>0.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> input) <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code js-file-line">        <span class="pl-c">// UNIX TIMESTAMP WITH MS</span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>X<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code js-file-line">            config._d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-s3">parseFloat</span>(input) <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code js-file-line">        <span class="pl-c">// TIMEZONE</span></td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Z<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// fall through to ZZ</span></td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code js-file-line">        <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ZZ<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code js-file-line">            config._useUTC <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code js-file-line">            a <span class="pl-k">=</span> (input <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-s3">match</span>(parseTimezoneChunker);</td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code js-file-line">            <span class="pl-k">if</span> (a <span class="pl-k">&amp;&amp;</span> a[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code js-file-line">                config._tzh <span class="pl-k">=</span> <span class="pl-k">~~</span>a[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code js-file-line">            <span class="pl-k">if</span> (a <span class="pl-k">&amp;&amp;</span> a[<span class="pl-c1">2</span>]) {</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code js-file-line">                config._tzm <span class="pl-k">=</span> <span class="pl-k">~~</span>a[<span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code js-file-line">            <span class="pl-c">// reverse offsets</span></td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code js-file-line">            <span class="pl-k">if</span> (a <span class="pl-k">&amp;&amp;</span> a[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code js-file-line">                config._tzh <span class="pl-k">=</span> <span class="pl-k">-</span>config._tzh;</td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code js-file-line">                config._tzm <span class="pl-k">=</span> <span class="pl-k">-</span>config._tzm;</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code js-file-line">        <span class="pl-c">// if the input is null, the date is not valid</span></td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code js-file-line">        <span class="pl-k">if</span> (input <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code js-file-line">            config._isValid <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code js-file-line">    <span class="pl-c">// convert an array to a date.</span></td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code js-file-line">    <span class="pl-c">// the array should mirror the parameters below</span></td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code js-file-line">    <span class="pl-c">// note: all values past the year are optional and will default to the lowest possible value.</span></td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code js-file-line">    <span class="pl-c">// [year, month, day , hour, minute, second, millisecond]</span></td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">dateFromArray</span>(<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code js-file-line">        <span class="pl-s">var</span> i, date, input <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code js-file-line">        <span class="pl-k">if</span> (config._d) {</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code js-file-line">        <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">7</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code js-file-line">            config._a[i] <span class="pl-k">=</span> input[i] <span class="pl-k">=</span> (config._a[i] <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">?</span> (i <span class="pl-k">===</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">:</span> config._a[i];</td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code js-file-line">        <span class="pl-c">// add the offsets to the time to be parsed so that we can have a clean array for checking isValid</span></td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code js-file-line">        input[<span class="pl-c1">3</span>] <span class="pl-k">+=</span> config._tzh <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code js-file-line">        input[<span class="pl-c1">4</span>] <span class="pl-k">+=</span> config._tzm <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code js-file-line">        date <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code js-file-line">        <span class="pl-k">if</span> (config._useUTC) {</td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code js-file-line">            date.<span class="pl-s3">setUTCFullYear</span>(input[<span class="pl-c1">0</span>], input[<span class="pl-c1">1</span>], input[<span class="pl-c1">2</span>]);</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code js-file-line">            date.<span class="pl-s3">setUTCHours</span>(input[<span class="pl-c1">3</span>], input[<span class="pl-c1">4</span>], input[<span class="pl-c1">5</span>], input[<span class="pl-c1">6</span>]);</td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code js-file-line">            date.<span class="pl-s3">setFullYear</span>(input[<span class="pl-c1">0</span>], input[<span class="pl-c1">1</span>], input[<span class="pl-c1">2</span>]);</td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code js-file-line">            date.<span class="pl-s3">setHours</span>(input[<span class="pl-c1">3</span>], input[<span class="pl-c1">4</span>], input[<span class="pl-c1">5</span>], input[<span class="pl-c1">6</span>]);</td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code js-file-line">        config._d <span class="pl-k">=</span> date;</td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code js-file-line">    <span class="pl-c">// date from string and format string</span></td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeDateFromStringAndFormat</span>(<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code js-file-line">        <span class="pl-c">// This array is used to make a Date, either with `new Date` or `Date.UTC`</span></td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code js-file-line">        <span class="pl-s">var</span> tokens <span class="pl-k">=</span> config._f.<span class="pl-s3">match</span>(formattingTokens),</td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code js-file-line">            string <span class="pl-k">=</span> config._i,</td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code js-file-line">            i, parsedInput;</td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code js-file-line">        config._a <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code js-file-line">        <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> tokens.<span class="pl-sc">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code js-file-line">            parsedInput <span class="pl-k">=</span> (getParseRegexForToken(tokens[i]).<span class="pl-s3">exec</span>(string) <span class="pl-k">||</span> [])[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code js-file-line">            <span class="pl-k">if</span> (parsedInput) {</td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code js-file-line">                string <span class="pl-k">=</span> string.<span class="pl-s3">slice</span>(string.<span class="pl-s3">indexOf</span>(parsedInput) <span class="pl-k">+</span> parsedInput.<span class="pl-sc">length</span>);</td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code js-file-line">            <span class="pl-c">// don&#39;t parse if its not a known token</span></td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code js-file-line">            <span class="pl-k">if</span> (formatTokenFunctions[tokens[i]]) {</td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code js-file-line">                addTimeToArrayFromToken(tokens[i], parsedInput, config);</td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code js-file-line">        <span class="pl-c">// handle am pm</span></td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code js-file-line">        <span class="pl-k">if</span> (config._isPm <span class="pl-k">&amp;&amp;</span> config._a[<span class="pl-c1">3</span>] <span class="pl-k">&lt;</span> <span class="pl-c1">12</span>) {</td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code js-file-line">            config._a[<span class="pl-c1">3</span>] <span class="pl-k">+=</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code js-file-line">        <span class="pl-c">// if is 12 am, change hours to 0</span></td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code js-file-line">        <span class="pl-k">if</span> (config._isPm <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> config._a[<span class="pl-c1">3</span>] <span class="pl-k">===</span> <span class="pl-c1">12</span>) {</td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code js-file-line">            config._a[<span class="pl-c1">3</span>] <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code js-file-line">        <span class="pl-c">// return</span></td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code js-file-line">        dateFromArray(config);</td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code js-file-line">    <span class="pl-c">// date from string and array of format strings</span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeDateFromStringAndArray</span>(<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code js-file-line">        <span class="pl-s">var</span> tempConfig,</td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code js-file-line">            tempMoment,</td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code js-file-line">            bestMoment,</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code js-file-line">            scoreToBeat <span class="pl-k">=</span> <span class="pl-c1">99</span>,</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code js-file-line">            i,</td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code js-file-line">            currentDate,</td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code js-file-line">            currentScore;</td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code js-file-line">        <span class="pl-k">while</span> (config._f.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code js-file-line">            tempConfig <span class="pl-k">=</span> extend({}, config);</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code js-file-line">            tempConfig._f <span class="pl-k">=</span> config._f.<span class="pl-s3">pop</span>();</td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code js-file-line">            makeDateFromStringAndFormat(tempConfig);</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code js-file-line">            tempMoment <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Moment</span>(tempConfig);</td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code js-file-line">            <span class="pl-k">if</span> (tempMoment.isValid()) {</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code js-file-line">                bestMoment <span class="pl-k">=</span> tempMoment;</td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code js-file-line">            currentScore <span class="pl-k">=</span> compareArrays(tempConfig._a, tempMoment.toArray());</td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code js-file-line">            <span class="pl-k">if</span> (currentScore <span class="pl-k">&lt;</span> scoreToBeat) {</td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code js-file-line">                scoreToBeat <span class="pl-k">=</span> currentScore;</td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code js-file-line">                bestMoment <span class="pl-k">=</span> tempMoment;</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code js-file-line">        extend(config, bestMoment);</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code js-file-line">    <span class="pl-c">// date from iso format</span></td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeDateFromString</span>(<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code js-file-line">        <span class="pl-s">var</span> i,</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code js-file-line">            string <span class="pl-k">=</span> config._i;</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code js-file-line">        <span class="pl-k">if</span> (isoRegex.<span class="pl-s3">exec</span>(string)) {</td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code js-file-line">            config._f <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>YYYY-MM-DDT<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">4</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code js-file-line">                <span class="pl-k">if</span> (isoTimes[i][<span class="pl-c1">1</span>].<span class="pl-s3">exec</span>(string)) {</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code js-file-line">                    config._f <span class="pl-k">+=</span> isoTimes[i][<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code js-file-line">                    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code js-file-line">            <span class="pl-k">if</span> (parseTokenTimezone.<span class="pl-s3">exec</span>(string)) {</td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code js-file-line">                config._f <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> Z<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code js-file-line">            makeDateFromStringAndFormat(config);</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code js-file-line">            config._d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(string);</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeDateFromInput</span>(<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code js-file-line">        <span class="pl-s">var</span> input <span class="pl-k">=</span> config._i,</td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code js-file-line">            matched <span class="pl-k">=</span> aspNetJsonRegex.<span class="pl-s3">exec</span>(input);</td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code js-file-line">        <span class="pl-k">if</span> (input <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code js-file-line">            config._d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (matched) {</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code js-file-line">            config._d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-k">+</span>matched[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code js-file-line">            makeDateFromString(config);</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (isArray(input)) {</td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code js-file-line">            config._a <span class="pl-k">=</span> input.<span class="pl-s3">slice</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code js-file-line">            dateFromArray(config);</td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code js-file-line">            config._d <span class="pl-k">=</span> input <span class="pl-k">instanceof</span> <span class="pl-s3">Date</span> <span class="pl-k">?</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-k">+</span>input) <span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(input);</td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code js-file-line"><span class="pl-c">        Relative Time</span></td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code js-file-line">    <span class="pl-c">// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize</span></td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">substituteTimeAgo</span>(<span class="pl-vpf">string</span>, <span class="pl-vpf">number</span>, <span class="pl-vpf">withoutSuffix</span>, <span class="pl-vpf">isFuture</span>, <span class="pl-vpf">lang</span>) {</td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code js-file-line">        <span class="pl-k">return</span> lang.relativeTime(number <span class="pl-k">||</span> <span class="pl-c1">1</span>, <span class="pl-k">!!</span>withoutSuffix, string, isFuture);</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">relativeTime</span>(<span class="pl-vpf">milliseconds</span>, <span class="pl-vpf">withoutSuffix</span>, <span class="pl-vpf">lang</span>) {</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code js-file-line">        <span class="pl-s">var</span> seconds <span class="pl-k">=</span> <span class="pl-s3">round</span>(<span class="pl-s3">Math</span>.<span class="pl-s3">abs</span>(milliseconds) / <span class="pl-c1">1000</span>),</td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code js-file-line">            minutes <span class="pl-k">=</span> <span class="pl-s3">round</span>(seconds / <span class="pl-c1">60</span>),</td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code js-file-line">            hours <span class="pl-k">=</span> <span class="pl-s3">round</span>(minutes / <span class="pl-c1">60</span>),</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code js-file-line">            days <span class="pl-k">=</span> <span class="pl-s3">round</span>(hours / <span class="pl-c1">24</span>),</td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code js-file-line">            years <span class="pl-k">=</span> <span class="pl-s3">round</span>(days / <span class="pl-c1">365</span>),</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code js-file-line">            args <span class="pl-k">=</span> seconds <span class="pl-k">&lt;</span> <span class="pl-c1">45</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span>, seconds] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code js-file-line">                minutes <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span>] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code js-file-line">                minutes <span class="pl-k">&lt;</span> <span class="pl-c1">45</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>mm<span class="pl-pds">&#39;</span></span>, minutes] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code js-file-line">                hours <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>h<span class="pl-pds">&#39;</span></span>] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code js-file-line">                hours <span class="pl-k">&lt;</span> <span class="pl-c1">22</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>hh<span class="pl-pds">&#39;</span></span>, hours] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code js-file-line">                days <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code js-file-line">                days <span class="pl-k">&lt;=</span> <span class="pl-c1">25</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>dd<span class="pl-pds">&#39;</span></span>, days] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code js-file-line">                days <span class="pl-k">&lt;=</span> <span class="pl-c1">45</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span>] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code js-file-line">                days <span class="pl-k">&lt;</span> <span class="pl-c1">345</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>MM<span class="pl-pds">&#39;</span></span>, <span class="pl-s3">round</span>(days / <span class="pl-c1">30</span>)] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code js-file-line">                years <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>y<span class="pl-pds">&#39;</span></span>] <span class="pl-k">||</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>yy<span class="pl-pds">&#39;</span></span>, years];</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code js-file-line">        args[<span class="pl-c1">2</span>] <span class="pl-k">=</span> withoutSuffix;</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code js-file-line">        args[<span class="pl-c1">3</span>] <span class="pl-k">=</span> milliseconds <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code js-file-line">        args[<span class="pl-c1">4</span>] <span class="pl-k">=</span> lang;</td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code js-file-line">        <span class="pl-k">return</span> substituteTimeAgo.<span class="pl-s3">apply</span>({}, args);</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code js-file-line"><span class="pl-c">        Week of Year</span></td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code js-file-line">    <span class="pl-c">// firstDayOfWeek       0 = sun, 6 = sat</span></td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code js-file-line">    <span class="pl-c">//                      the day of the week that starts the week</span></td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code js-file-line">    <span class="pl-c">//                      (usually sunday or monday)</span></td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code js-file-line">    <span class="pl-c">// firstDayOfWeekOfYear 0 = sun, 6 = sat</span></td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code js-file-line">    <span class="pl-c">//                      the first week is the week that contains the first</span></td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code js-file-line">    <span class="pl-c">//                      of this day of the week</span></td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code js-file-line">    <span class="pl-c">//                      (eg. ISO weeks use thursday (4))</span></td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">weekOfYear</span>(<span class="pl-vpf">mom</span>, <span class="pl-vpf">firstDayOfWeek</span>, <span class="pl-vpf">firstDayOfWeekOfYear</span>) {</td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code js-file-line">        <span class="pl-s">var</span> end <span class="pl-k">=</span> firstDayOfWeekOfYear <span class="pl-k">-</span> firstDayOfWeek,</td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code js-file-line">            daysToDayOfWeek <span class="pl-k">=</span> firstDayOfWeekOfYear <span class="pl-k">-</span> mom.day();</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code js-file-line">        <span class="pl-k">if</span> (daysToDayOfWeek <span class="pl-k">&gt;</span> end) {</td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code js-file-line">            daysToDayOfWeek <span class="pl-k">-=</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code js-file-line">        <span class="pl-k">if</span> (daysToDayOfWeek <span class="pl-k">&lt;</span> end <span class="pl-k">-</span> <span class="pl-c1">7</span>) {</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code js-file-line">            daysToDayOfWeek <span class="pl-k">+=</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-s3">Math</span>.<span class="pl-s3">ceil</span>(moment(mom).<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>, daysToDayOfWeek).dayOfYear() / <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code js-file-line"><span class="pl-c">        Top Level Functions</span></td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeMoment</span>(<span class="pl-vpf">config</span>) {</td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code js-file-line">        <span class="pl-s">var</span> input <span class="pl-k">=</span> config._i,</td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code js-file-line">            format <span class="pl-k">=</span> config._f;</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code js-file-line">        <span class="pl-k">if</span> (input <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code js-file-line">            config._i <span class="pl-k">=</span> input <span class="pl-k">=</span> getLangDefinition().preparse(input);</td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code js-file-line">        <span class="pl-k">if</span> (moment.isMoment(input)) {</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code js-file-line">            config <span class="pl-k">=</span> extend({}, input);</td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code js-file-line">            config._d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-k">+</span>input._d);</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (format) {</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code js-file-line">            <span class="pl-k">if</span> (isArray(format)) {</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code js-file-line">                makeDateFromStringAndArray(config);</td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code js-file-line">                makeDateFromStringAndFormat(config);</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code js-file-line">            makeDateFromInput(config);</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Moment</span>(config);</td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code js-file-line">    <span class="pl-en">moment</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">format</span>, <span class="pl-vpf">lang</span>) {</td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code js-file-line">        <span class="pl-k">return</span> makeMoment({</td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code js-file-line">            _i <span class="pl-k">:</span> input,</td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code js-file-line">            _f <span class="pl-k">:</span> format,</td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code js-file-line">            _l <span class="pl-k">:</span> lang,</td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code js-file-line">            _isUTC <span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code js-file-line">    <span class="pl-c">// creating with utc</span></td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code js-file-line">    <span class="pl-s3">moment</span>.<span class="pl-en">utc</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">format</span>, <span class="pl-vpf">lang</span>) {</td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code js-file-line">        <span class="pl-k">return</span> makeMoment({</td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code js-file-line">            _useUTC <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code js-file-line">            _isUTC <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code js-file-line">            _l <span class="pl-k">:</span> lang,</td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code js-file-line">            _i <span class="pl-k">:</span> input,</td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code js-file-line">            _f <span class="pl-k">:</span> format</td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code js-file-line">    <span class="pl-c">// creating with unix timestamp (in seconds)</span></td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code js-file-line">    <span class="pl-s3">moment</span>.<span class="pl-en">unix</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code js-file-line">        <span class="pl-k">return</span> moment(input <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code js-file-line">    <span class="pl-c">// duration</span></td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code js-file-line">    <span class="pl-s3">moment</span>.<span class="pl-en">duration</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code js-file-line">        <span class="pl-s">var</span> isDuration <span class="pl-k">=</span> moment.isDuration(input),</td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code js-file-line">            isNumber <span class="pl-k">=</span> (<span class="pl-k">typeof</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code js-file-line">            duration <span class="pl-k">=</span> (isDuration <span class="pl-k">?</span> input._data <span class="pl-k">:</span> (isNumber <span class="pl-k">?</span> {} <span class="pl-k">:</span> input)),</td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code js-file-line">            ret;</td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code js-file-line">        <span class="pl-k">if</span> (isNumber) {</td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code js-file-line">            <span class="pl-k">if</span> (key) {</td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code js-file-line">                duration[key] <span class="pl-k">=</span> input;</td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code js-file-line">                duration.milliseconds <span class="pl-k">=</span> input;</td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code js-file-line">        ret <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Duration</span>(duration);</td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code js-file-line">        <span class="pl-k">if</span> (isDuration <span class="pl-k">&amp;&amp;</span> input.hasOwnProperty(<span class="pl-s1"><span class="pl-pds">&#39;</span>_lang<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code js-file-line">            ret._lang <span class="pl-k">=</span> input._lang;</td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code js-file-line">        <span class="pl-k">return</span> ret;</td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code js-file-line">    <span class="pl-c">// version number</span></td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code js-file-line">    moment.<span class="pl-sc">version</span> <span class="pl-k">=</span> VERSION;</td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code js-file-line">    <span class="pl-c">// default format</span></td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code js-file-line">    moment.defaultFormat <span class="pl-k">=</span> isoFormat;</td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code js-file-line">    <span class="pl-c">// This function will load languages and then set the global language.  If</span></td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code js-file-line">    <span class="pl-c">// no arguments are passed in, it will simply return the current global</span></td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code js-file-line">    <span class="pl-c">// language key.</span></td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code js-file-line">    <span class="pl-s3">moment</span>.<span class="pl-en">lang</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">key</span>, <span class="pl-vpf">values</span>) {</td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code js-file-line">        <span class="pl-s">var</span> i;</td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>key) {</td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code js-file-line">            <span class="pl-k">return</span> moment.fn._lang._abbr;</td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code js-file-line">        <span class="pl-k">if</span> (values) {</td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code js-file-line">            loadLang(key, values);</td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>languages[key]) {</td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code js-file-line">            getLangDefinition(key);</td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code js-file-line">        moment.duration.fn._lang <span class="pl-k">=</span> moment.fn._lang <span class="pl-k">=</span> getLangDefinition(key);</td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code js-file-line">    <span class="pl-c">// returns language data</span></td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code js-file-line">    <span class="pl-s3">moment</span>.<span class="pl-en">langData</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code js-file-line">        <span class="pl-k">if</span> (key <span class="pl-k">&amp;&amp;</span> key._lang <span class="pl-k">&amp;&amp;</span> key._lang._abbr) {</td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code js-file-line">            key <span class="pl-k">=</span> key._lang._abbr;</td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code js-file-line">        <span class="pl-k">return</span> getLangDefinition(key);</td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code js-file-line">    <span class="pl-c">// compare moment object</span></td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code js-file-line">    <span class="pl-s3">moment</span>.<span class="pl-en">isMoment</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code js-file-line">        <span class="pl-k">return</span> obj <span class="pl-k">instanceof</span> Moment;</td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code js-file-line">    <span class="pl-c">// for typechecking Duration objects</span></td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code js-file-line">    <span class="pl-s3">moment</span>.<span class="pl-en">isDuration</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code js-file-line">        <span class="pl-k">return</span> obj <span class="pl-k">instanceof</span> Duration;</td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code js-file-line"><span class="pl-c">        Moment Prototype</span></td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code js-file-line">    moment.fn <span class="pl-k">=</span> <span class="pl-s3">Moment</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2025" class="blob-num js-line-number" data-line-number="2025"></td>
        <td id="LC2025" class="blob-code js-file-line">        <span class="pl-en">clone</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2026" class="blob-num js-line-number" data-line-number="2026"></td>
        <td id="LC2026" class="blob-code js-file-line">            <span class="pl-k">return</span> moment(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L2027" class="blob-num js-line-number" data-line-number="2027"></td>
        <td id="LC2027" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2028" class="blob-num js-line-number" data-line-number="2028"></td>
        <td id="LC2028" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2029" class="blob-num js-line-number" data-line-number="2029"></td>
        <td id="LC2029" class="blob-code js-file-line">        <span class="pl-en">valueOf</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2030" class="blob-num js-line-number" data-line-number="2030"></td>
        <td id="LC2030" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">+</span><span class="pl-v">this</span>._d;</td>
      </tr>
      <tr>
        <td id="L2031" class="blob-num js-line-number" data-line-number="2031"></td>
        <td id="LC2031" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2032" class="blob-num js-line-number" data-line-number="2032"></td>
        <td id="LC2032" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2033" class="blob-num js-line-number" data-line-number="2033"></td>
        <td id="LC2033" class="blob-code js-file-line">        <span class="pl-en">unix</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2034" class="blob-num js-line-number" data-line-number="2034"></td>
        <td id="LC2034" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-s3">Math</span>.<span class="pl-s3">floor</span>(<span class="pl-k">+</span><span class="pl-v">this</span>._d / <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L2035" class="blob-num js-line-number" data-line-number="2035"></td>
        <td id="LC2035" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2036" class="blob-num js-line-number" data-line-number="2036"></td>
        <td id="LC2036" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2037" class="blob-num js-line-number" data-line-number="2037"></td>
        <td id="LC2037" class="blob-code js-file-line">        <span class="pl-en">toString</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2038" class="blob-num js-line-number" data-line-number="2038"></td>
        <td id="LC2038" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>.format(<span class="pl-s1"><span class="pl-pds">&quot;</span>ddd MMM DD YYYY HH:mm:ss [GMT]ZZ<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2039" class="blob-num js-line-number" data-line-number="2039"></td>
        <td id="LC2039" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2040" class="blob-num js-line-number" data-line-number="2040"></td>
        <td id="LC2040" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2041" class="blob-num js-line-number" data-line-number="2041"></td>
        <td id="LC2041" class="blob-code js-file-line">        <span class="pl-en">toDate</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2042" class="blob-num js-line-number" data-line-number="2042"></td>
        <td id="LC2042" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._d;</td>
      </tr>
      <tr>
        <td id="L2043" class="blob-num js-line-number" data-line-number="2043"></td>
        <td id="LC2043" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2044" class="blob-num js-line-number" data-line-number="2044"></td>
        <td id="LC2044" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2045" class="blob-num js-line-number" data-line-number="2045"></td>
        <td id="LC2045" class="blob-code js-file-line">        <span class="pl-en">toJSON</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2046" class="blob-num js-line-number" data-line-number="2046"></td>
        <td id="LC2046" class="blob-code js-file-line">            <span class="pl-k">return</span> moment.utc(<span class="pl-v">this</span>).format(<span class="pl-s1"><span class="pl-pds">&#39;</span>YYYY-MM-DD[T]HH:mm:ss.SSS[Z]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2047" class="blob-num js-line-number" data-line-number="2047"></td>
        <td id="LC2047" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2048" class="blob-num js-line-number" data-line-number="2048"></td>
        <td id="LC2048" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2049" class="blob-num js-line-number" data-line-number="2049"></td>
        <td id="LC2049" class="blob-code js-file-line">        <span class="pl-en">toArray</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2050" class="blob-num js-line-number" data-line-number="2050"></td>
        <td id="LC2050" class="blob-code js-file-line">            <span class="pl-s">var</span> m <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2051" class="blob-num js-line-number" data-line-number="2051"></td>
        <td id="LC2051" class="blob-code js-file-line">            <span class="pl-k">return</span> [</td>
      </tr>
      <tr>
        <td id="L2052" class="blob-num js-line-number" data-line-number="2052"></td>
        <td id="LC2052" class="blob-code js-file-line">                m.year(),</td>
      </tr>
      <tr>
        <td id="L2053" class="blob-num js-line-number" data-line-number="2053"></td>
        <td id="LC2053" class="blob-code js-file-line">                m.month(),</td>
      </tr>
      <tr>
        <td id="L2054" class="blob-num js-line-number" data-line-number="2054"></td>
        <td id="LC2054" class="blob-code js-file-line">                m.date(),</td>
      </tr>
      <tr>
        <td id="L2055" class="blob-num js-line-number" data-line-number="2055"></td>
        <td id="LC2055" class="blob-code js-file-line">                m.hours(),</td>
      </tr>
      <tr>
        <td id="L2056" class="blob-num js-line-number" data-line-number="2056"></td>
        <td id="LC2056" class="blob-code js-file-line">                m.minutes(),</td>
      </tr>
      <tr>
        <td id="L2057" class="blob-num js-line-number" data-line-number="2057"></td>
        <td id="LC2057" class="blob-code js-file-line">                m.seconds(),</td>
      </tr>
      <tr>
        <td id="L2058" class="blob-num js-line-number" data-line-number="2058"></td>
        <td id="LC2058" class="blob-code js-file-line">                m.milliseconds()</td>
      </tr>
      <tr>
        <td id="L2059" class="blob-num js-line-number" data-line-number="2059"></td>
        <td id="LC2059" class="blob-code js-file-line">            ];</td>
      </tr>
      <tr>
        <td id="L2060" class="blob-num js-line-number" data-line-number="2060"></td>
        <td id="LC2060" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2061" class="blob-num js-line-number" data-line-number="2061"></td>
        <td id="LC2061" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2062" class="blob-num js-line-number" data-line-number="2062"></td>
        <td id="LC2062" class="blob-code js-file-line">        <span class="pl-en">isValid</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2063" class="blob-num js-line-number" data-line-number="2063"></td>
        <td id="LC2063" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-v">this</span>._isValid <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L2064" class="blob-num js-line-number" data-line-number="2064"></td>
        <td id="LC2064" class="blob-code js-file-line">                <span class="pl-k">if</span> (<span class="pl-v">this</span>._a) {</td>
      </tr>
      <tr>
        <td id="L2065" class="blob-num js-line-number" data-line-number="2065"></td>
        <td id="LC2065" class="blob-code js-file-line">                    <span class="pl-v">this</span>._isValid <span class="pl-k">=</span> <span class="pl-k">!</span>compareArrays(<span class="pl-v">this</span>._a, (<span class="pl-v">this</span>._isUTC <span class="pl-k">?</span> moment.utc(<span class="pl-v">this</span>._a) <span class="pl-k">:</span> moment(<span class="pl-v">this</span>._a)).toArray());</td>
      </tr>
      <tr>
        <td id="L2066" class="blob-num js-line-number" data-line-number="2066"></td>
        <td id="LC2066" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2067" class="blob-num js-line-number" data-line-number="2067"></td>
        <td id="LC2067" class="blob-code js-file-line">                    <span class="pl-v">this</span>._isValid <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-s3">isNaN</span>(<span class="pl-v">this</span>._d.<span class="pl-s3">getTime</span>());</td>
      </tr>
      <tr>
        <td id="L2068" class="blob-num js-line-number" data-line-number="2068"></td>
        <td id="LC2068" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L2069" class="blob-num js-line-number" data-line-number="2069"></td>
        <td id="LC2069" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2070" class="blob-num js-line-number" data-line-number="2070"></td>
        <td id="LC2070" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">!!</span><span class="pl-v">this</span>._isValid;</td>
      </tr>
      <tr>
        <td id="L2071" class="blob-num js-line-number" data-line-number="2071"></td>
        <td id="LC2071" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2072" class="blob-num js-line-number" data-line-number="2072"></td>
        <td id="LC2072" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2073" class="blob-num js-line-number" data-line-number="2073"></td>
        <td id="LC2073" class="blob-code js-file-line">        <span class="pl-en">utc</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2074" class="blob-num js-line-number" data-line-number="2074"></td>
        <td id="LC2074" class="blob-code js-file-line">            <span class="pl-v">this</span>._isUTC <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L2075" class="blob-num js-line-number" data-line-number="2075"></td>
        <td id="LC2075" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2076" class="blob-num js-line-number" data-line-number="2076"></td>
        <td id="LC2076" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2077" class="blob-num js-line-number" data-line-number="2077"></td>
        <td id="LC2077" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2078" class="blob-num js-line-number" data-line-number="2078"></td>
        <td id="LC2078" class="blob-code js-file-line">        <span class="pl-en">local</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2079" class="blob-num js-line-number" data-line-number="2079"></td>
        <td id="LC2079" class="blob-code js-file-line">            <span class="pl-v">this</span>._isUTC <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2080" class="blob-num js-line-number" data-line-number="2080"></td>
        <td id="LC2080" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2081" class="blob-num js-line-number" data-line-number="2081"></td>
        <td id="LC2081" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2082" class="blob-num js-line-number" data-line-number="2082"></td>
        <td id="LC2082" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2083" class="blob-num js-line-number" data-line-number="2083"></td>
        <td id="LC2083" class="blob-code js-file-line">        <span class="pl-en">format</span> : <span class="pl-st">function</span> (<span class="pl-vpf">inputString</span>) {</td>
      </tr>
      <tr>
        <td id="L2084" class="blob-num js-line-number" data-line-number="2084"></td>
        <td id="LC2084" class="blob-code js-file-line">            <span class="pl-s">var</span> output <span class="pl-k">=</span> formatMoment(<span class="pl-v">this</span>, inputString <span class="pl-k">||</span> moment.defaultFormat);</td>
      </tr>
      <tr>
        <td id="L2085" class="blob-num js-line-number" data-line-number="2085"></td>
        <td id="LC2085" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().postformat(output);</td>
      </tr>
      <tr>
        <td id="L2086" class="blob-num js-line-number" data-line-number="2086"></td>
        <td id="LC2086" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2087" class="blob-num js-line-number" data-line-number="2087"></td>
        <td id="LC2087" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2088" class="blob-num js-line-number" data-line-number="2088"></td>
        <td id="LC2088" class="blob-code js-file-line">        <span class="pl-en">add</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">val</span>) {</td>
      </tr>
      <tr>
        <td id="L2089" class="blob-num js-line-number" data-line-number="2089"></td>
        <td id="LC2089" class="blob-code js-file-line">            <span class="pl-s">var</span> dur;</td>
      </tr>
      <tr>
        <td id="L2090" class="blob-num js-line-number" data-line-number="2090"></td>
        <td id="LC2090" class="blob-code js-file-line">            <span class="pl-c">// switch args to support add(&#39;s&#39;, 1) and add(1, &#39;s&#39;)</span></td>
      </tr>
      <tr>
        <td id="L2091" class="blob-num js-line-number" data-line-number="2091"></td>
        <td id="LC2091" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2092" class="blob-num js-line-number" data-line-number="2092"></td>
        <td id="LC2092" class="blob-code js-file-line">                dur <span class="pl-k">=</span> moment.duration(<span class="pl-k">+</span>val, input);</td>
      </tr>
      <tr>
        <td id="L2093" class="blob-num js-line-number" data-line-number="2093"></td>
        <td id="LC2093" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2094" class="blob-num js-line-number" data-line-number="2094"></td>
        <td id="LC2094" class="blob-code js-file-line">                dur <span class="pl-k">=</span> moment.duration(input, val);</td>
      </tr>
      <tr>
        <td id="L2095" class="blob-num js-line-number" data-line-number="2095"></td>
        <td id="LC2095" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2096" class="blob-num js-line-number" data-line-number="2096"></td>
        <td id="LC2096" class="blob-code js-file-line">            addOrSubtractDurationFromMoment(<span class="pl-v">this</span>, dur, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L2097" class="blob-num js-line-number" data-line-number="2097"></td>
        <td id="LC2097" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2098" class="blob-num js-line-number" data-line-number="2098"></td>
        <td id="LC2098" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2099" class="blob-num js-line-number" data-line-number="2099"></td>
        <td id="LC2099" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2100" class="blob-num js-line-number" data-line-number="2100"></td>
        <td id="LC2100" class="blob-code js-file-line">        <span class="pl-en">subtract</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">val</span>) {</td>
      </tr>
      <tr>
        <td id="L2101" class="blob-num js-line-number" data-line-number="2101"></td>
        <td id="LC2101" class="blob-code js-file-line">            <span class="pl-s">var</span> dur;</td>
      </tr>
      <tr>
        <td id="L2102" class="blob-num js-line-number" data-line-number="2102"></td>
        <td id="LC2102" class="blob-code js-file-line">            <span class="pl-c">// switch args to support subtract(&#39;s&#39;, 1) and subtract(1, &#39;s&#39;)</span></td>
      </tr>
      <tr>
        <td id="L2103" class="blob-num js-line-number" data-line-number="2103"></td>
        <td id="LC2103" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2104" class="blob-num js-line-number" data-line-number="2104"></td>
        <td id="LC2104" class="blob-code js-file-line">                dur <span class="pl-k">=</span> moment.duration(<span class="pl-k">+</span>val, input);</td>
      </tr>
      <tr>
        <td id="L2105" class="blob-num js-line-number" data-line-number="2105"></td>
        <td id="LC2105" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2106" class="blob-num js-line-number" data-line-number="2106"></td>
        <td id="LC2106" class="blob-code js-file-line">                dur <span class="pl-k">=</span> moment.duration(input, val);</td>
      </tr>
      <tr>
        <td id="L2107" class="blob-num js-line-number" data-line-number="2107"></td>
        <td id="LC2107" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2108" class="blob-num js-line-number" data-line-number="2108"></td>
        <td id="LC2108" class="blob-code js-file-line">            addOrSubtractDurationFromMoment(<span class="pl-v">this</span>, dur, <span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L2109" class="blob-num js-line-number" data-line-number="2109"></td>
        <td id="LC2109" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2110" class="blob-num js-line-number" data-line-number="2110"></td>
        <td id="LC2110" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2111" class="blob-num js-line-number" data-line-number="2111"></td>
        <td id="LC2111" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2112" class="blob-num js-line-number" data-line-number="2112"></td>
        <td id="LC2112" class="blob-code js-file-line">        <span class="pl-en">diff</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">units</span>, <span class="pl-vpf">asFloat</span>) {</td>
      </tr>
      <tr>
        <td id="L2113" class="blob-num js-line-number" data-line-number="2113"></td>
        <td id="LC2113" class="blob-code js-file-line">            <span class="pl-s">var</span> that <span class="pl-k">=</span> <span class="pl-v">this</span>._isUTC <span class="pl-k">?</span> moment(input).utc() <span class="pl-k">:</span> moment(input).local(),</td>
      </tr>
      <tr>
        <td id="L2114" class="blob-num js-line-number" data-line-number="2114"></td>
        <td id="LC2114" class="blob-code js-file-line">                zoneDiff <span class="pl-k">=</span> (<span class="pl-v">this</span>.zone() <span class="pl-k">-</span> that.zone()) <span class="pl-k">*</span> <span class="pl-c1">6e4</span>,</td>
      </tr>
      <tr>
        <td id="L2115" class="blob-num js-line-number" data-line-number="2115"></td>
        <td id="LC2115" class="blob-code js-file-line">                diff, output;</td>
      </tr>
      <tr>
        <td id="L2116" class="blob-num js-line-number" data-line-number="2116"></td>
        <td id="LC2116" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2117" class="blob-num js-line-number" data-line-number="2117"></td>
        <td id="LC2117" class="blob-code js-file-line">            <span class="pl-k">if</span> (units) {</td>
      </tr>
      <tr>
        <td id="L2118" class="blob-num js-line-number" data-line-number="2118"></td>
        <td id="LC2118" class="blob-code js-file-line">                <span class="pl-c">// standardize on singular form</span></td>
      </tr>
      <tr>
        <td id="L2119" class="blob-num js-line-number" data-line-number="2119"></td>
        <td id="LC2119" class="blob-code js-file-line">                units <span class="pl-k">=</span> units.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>s<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2120" class="blob-num js-line-number" data-line-number="2120"></td>
        <td id="LC2120" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2121" class="blob-num js-line-number" data-line-number="2121"></td>
        <td id="LC2121" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2122" class="blob-num js-line-number" data-line-number="2122"></td>
        <td id="LC2122" class="blob-code js-file-line">            <span class="pl-k">if</span> (units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>month<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2123" class="blob-num js-line-number" data-line-number="2123"></td>
        <td id="LC2123" class="blob-code js-file-line">                diff <span class="pl-k">=</span> (<span class="pl-v">this</span>.daysInMonth() <span class="pl-k">+</span> that.daysInMonth()) <span class="pl-k">*</span> <span class="pl-c1">432e5</span>; <span class="pl-c">// 24 * 60 * 60 * 1000 / 2</span></td>
      </tr>
      <tr>
        <td id="L2124" class="blob-num js-line-number" data-line-number="2124"></td>
        <td id="LC2124" class="blob-code js-file-line">                output <span class="pl-k">=</span> ((<span class="pl-v">this</span>.year() <span class="pl-k">-</span> that.year()) <span class="pl-k">*</span> <span class="pl-c1">12</span>) <span class="pl-k">+</span> (<span class="pl-v">this</span>.month() <span class="pl-k">-</span> that.month());</td>
      </tr>
      <tr>
        <td id="L2125" class="blob-num js-line-number" data-line-number="2125"></td>
        <td id="LC2125" class="blob-code js-file-line">                output <span class="pl-k">+=</span> ((<span class="pl-v">this</span> <span class="pl-k">-</span> moment(<span class="pl-v">this</span>).startOf(<span class="pl-s1"><span class="pl-pds">&#39;</span>month<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">-</span> (that <span class="pl-k">-</span> moment(that).startOf(<span class="pl-s1"><span class="pl-pds">&#39;</span>month<span class="pl-pds">&#39;</span></span>))) / diff;</td>
      </tr>
      <tr>
        <td id="L2126" class="blob-num js-line-number" data-line-number="2126"></td>
        <td id="LC2126" class="blob-code js-file-line">                <span class="pl-k">if</span> (units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2127" class="blob-num js-line-number" data-line-number="2127"></td>
        <td id="LC2127" class="blob-code js-file-line">                    output <span class="pl-k">=</span> output / <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L2128" class="blob-num js-line-number" data-line-number="2128"></td>
        <td id="LC2128" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L2129" class="blob-num js-line-number" data-line-number="2129"></td>
        <td id="LC2129" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2130" class="blob-num js-line-number" data-line-number="2130"></td>
        <td id="LC2130" class="blob-code js-file-line">                diff <span class="pl-k">=</span> (<span class="pl-v">this</span> <span class="pl-k">-</span> that) <span class="pl-k">-</span> zoneDiff;</td>
      </tr>
      <tr>
        <td id="L2131" class="blob-num js-line-number" data-line-number="2131"></td>
        <td id="LC2131" class="blob-code js-file-line">                output <span class="pl-k">=</span> units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>second<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> diff / <span class="pl-c1">1e3</span> <span class="pl-k">:</span> <span class="pl-c">// 1000</span></td>
      </tr>
      <tr>
        <td id="L2132" class="blob-num js-line-number" data-line-number="2132"></td>
        <td id="LC2132" class="blob-code js-file-line">                    units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>minute<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> diff / <span class="pl-c1">6e4</span> <span class="pl-k">:</span> <span class="pl-c">// 1000 * 60</span></td>
      </tr>
      <tr>
        <td id="L2133" class="blob-num js-line-number" data-line-number="2133"></td>
        <td id="LC2133" class="blob-code js-file-line">                    units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hour<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> diff / <span class="pl-c1">36e5</span> <span class="pl-k">:</span> <span class="pl-c">// 1000 * 60 * 60</span></td>
      </tr>
      <tr>
        <td id="L2134" class="blob-num js-line-number" data-line-number="2134"></td>
        <td id="LC2134" class="blob-code js-file-line">                    units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>day<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> diff / <span class="pl-c1">864e5</span> <span class="pl-k">:</span> <span class="pl-c">// 1000 * 60 * 60 * 24</span></td>
      </tr>
      <tr>
        <td id="L2135" class="blob-num js-line-number" data-line-number="2135"></td>
        <td id="LC2135" class="blob-code js-file-line">                    units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>week<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> diff / <span class="pl-c1">6048e5</span> <span class="pl-k">:</span> <span class="pl-c">// 1000 * 60 * 60 * 24 * 7</span></td>
      </tr>
      <tr>
        <td id="L2136" class="blob-num js-line-number" data-line-number="2136"></td>
        <td id="LC2136" class="blob-code js-file-line">                    diff;</td>
      </tr>
      <tr>
        <td id="L2137" class="blob-num js-line-number" data-line-number="2137"></td>
        <td id="LC2137" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2138" class="blob-num js-line-number" data-line-number="2138"></td>
        <td id="LC2138" class="blob-code js-file-line">            <span class="pl-k">return</span> asFloat <span class="pl-k">?</span> output <span class="pl-k">:</span> absRound(output);</td>
      </tr>
      <tr>
        <td id="L2139" class="blob-num js-line-number" data-line-number="2139"></td>
        <td id="LC2139" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2140" class="blob-num js-line-number" data-line-number="2140"></td>
        <td id="LC2140" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2141" class="blob-num js-line-number" data-line-number="2141"></td>
        <td id="LC2141" class="blob-code js-file-line">        <span class="pl-en">from</span> : <span class="pl-st">function</span> (<span class="pl-vpf">time</span>, <span class="pl-vpf">withoutSuffix</span>) {</td>
      </tr>
      <tr>
        <td id="L2142" class="blob-num js-line-number" data-line-number="2142"></td>
        <td id="LC2142" class="blob-code js-file-line">            <span class="pl-k">return</span> moment.duration(<span class="pl-v">this</span>.diff(time)).<span class="pl-sc">lang</span>(<span class="pl-v">this</span>.<span class="pl-sc">lang</span>()._abbr).humanize(<span class="pl-k">!</span>withoutSuffix);</td>
      </tr>
      <tr>
        <td id="L2143" class="blob-num js-line-number" data-line-number="2143"></td>
        <td id="LC2143" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2144" class="blob-num js-line-number" data-line-number="2144"></td>
        <td id="LC2144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2145" class="blob-num js-line-number" data-line-number="2145"></td>
        <td id="LC2145" class="blob-code js-file-line">        <span class="pl-en">fromNow</span> : <span class="pl-st">function</span> (<span class="pl-vpf">withoutSuffix</span>) {</td>
      </tr>
      <tr>
        <td id="L2146" class="blob-num js-line-number" data-line-number="2146"></td>
        <td id="LC2146" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>.from(moment(), withoutSuffix);</td>
      </tr>
      <tr>
        <td id="L2147" class="blob-num js-line-number" data-line-number="2147"></td>
        <td id="LC2147" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2148" class="blob-num js-line-number" data-line-number="2148"></td>
        <td id="LC2148" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2149" class="blob-num js-line-number" data-line-number="2149"></td>
        <td id="LC2149" class="blob-code js-file-line">        <span class="pl-en">calendar</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2150" class="blob-num js-line-number" data-line-number="2150"></td>
        <td id="LC2150" class="blob-code js-file-line">            <span class="pl-s">var</span> diff <span class="pl-k">=</span> <span class="pl-v">this</span>.diff(moment().startOf(<span class="pl-s1"><span class="pl-pds">&#39;</span>day<span class="pl-pds">&#39;</span></span>), <span class="pl-s1"><span class="pl-pds">&#39;</span>days<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>),</td>
      </tr>
      <tr>
        <td id="L2151" class="blob-num js-line-number" data-line-number="2151"></td>
        <td id="LC2151" class="blob-code js-file-line">                format <span class="pl-k">=</span> diff <span class="pl-k">&lt;</span> <span class="pl-k">-</span><span class="pl-c1">6</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>sameElse<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2152" class="blob-num js-line-number" data-line-number="2152"></td>
        <td id="LC2152" class="blob-code js-file-line">                diff <span class="pl-k">&lt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>lastWeek<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2153" class="blob-num js-line-number" data-line-number="2153"></td>
        <td id="LC2153" class="blob-code js-file-line">                diff <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>lastDay<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2154" class="blob-num js-line-number" data-line-number="2154"></td>
        <td id="LC2154" class="blob-code js-file-line">                diff <span class="pl-k">&lt;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>sameDay<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2155" class="blob-num js-line-number" data-line-number="2155"></td>
        <td id="LC2155" class="blob-code js-file-line">                diff <span class="pl-k">&lt;</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>nextDay<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2156" class="blob-num js-line-number" data-line-number="2156"></td>
        <td id="LC2156" class="blob-code js-file-line">                diff <span class="pl-k">&lt;</span> <span class="pl-c1">7</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>nextWeek<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>sameElse<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2157" class="blob-num js-line-number" data-line-number="2157"></td>
        <td id="LC2157" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>.format(<span class="pl-v">this</span>.<span class="pl-sc">lang</span>().calendar(format, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L2158" class="blob-num js-line-number" data-line-number="2158"></td>
        <td id="LC2158" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2159" class="blob-num js-line-number" data-line-number="2159"></td>
        <td id="LC2159" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2160" class="blob-num js-line-number" data-line-number="2160"></td>
        <td id="LC2160" class="blob-code js-file-line">        <span class="pl-en">isLeapYear</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2161" class="blob-num js-line-number" data-line-number="2161"></td>
        <td id="LC2161" class="blob-code js-file-line">            <span class="pl-s">var</span> year <span class="pl-k">=</span> <span class="pl-v">this</span>.year();</td>
      </tr>
      <tr>
        <td id="L2162" class="blob-num js-line-number" data-line-number="2162"></td>
        <td id="LC2162" class="blob-code js-file-line">            <span class="pl-k">return</span> (year <span class="pl-k">%</span> <span class="pl-c1">4</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> year <span class="pl-k">%</span> <span class="pl-c1">100</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span>) <span class="pl-k">||</span> year <span class="pl-k">%</span> <span class="pl-c1">400</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2163" class="blob-num js-line-number" data-line-number="2163"></td>
        <td id="LC2163" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2164" class="blob-num js-line-number" data-line-number="2164"></td>
        <td id="LC2164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2165" class="blob-num js-line-number" data-line-number="2165"></td>
        <td id="LC2165" class="blob-code js-file-line">        <span class="pl-en">isDST</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2166" class="blob-num js-line-number" data-line-number="2166"></td>
        <td id="LC2166" class="blob-code js-file-line">            <span class="pl-k">return</span> (<span class="pl-v">this</span>.zone() <span class="pl-k">&lt;</span> moment([<span class="pl-v">this</span>.year()]).zone() <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L2167" class="blob-num js-line-number" data-line-number="2167"></td>
        <td id="LC2167" class="blob-code js-file-line">                <span class="pl-v">this</span>.zone() <span class="pl-k">&lt;</span> moment([<span class="pl-v">this</span>.year(), <span class="pl-c1">5</span>]).zone());</td>
      </tr>
      <tr>
        <td id="L2168" class="blob-num js-line-number" data-line-number="2168"></td>
        <td id="LC2168" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2169" class="blob-num js-line-number" data-line-number="2169"></td>
        <td id="LC2169" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2170" class="blob-num js-line-number" data-line-number="2170"></td>
        <td id="LC2170" class="blob-code js-file-line">        <span class="pl-en">day</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L2171" class="blob-num js-line-number" data-line-number="2171"></td>
        <td id="LC2171" class="blob-code js-file-line">            <span class="pl-s">var</span> day <span class="pl-k">=</span> <span class="pl-v">this</span>._isUTC <span class="pl-k">?</span> <span class="pl-v">this</span>._d.<span class="pl-s3">getUTCDay</span>() <span class="pl-k">:</span> <span class="pl-v">this</span>._d.<span class="pl-s3">getDay</span>();</td>
      </tr>
      <tr>
        <td id="L2172" class="blob-num js-line-number" data-line-number="2172"></td>
        <td id="LC2172" class="blob-code js-file-line">            <span class="pl-k">return</span> input <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> day <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2173" class="blob-num js-line-number" data-line-number="2173"></td>
        <td id="LC2173" class="blob-code js-file-line">                <span class="pl-v">this</span>.<span class="pl-s3">add</span>({ d <span class="pl-k">:</span> input <span class="pl-k">-</span> day });</td>
      </tr>
      <tr>
        <td id="L2174" class="blob-num js-line-number" data-line-number="2174"></td>
        <td id="LC2174" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2175" class="blob-num js-line-number" data-line-number="2175"></td>
        <td id="LC2175" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2176" class="blob-num js-line-number" data-line-number="2176"></td>
        <td id="LC2176" class="blob-code js-file-line">        <span class="pl-en">startOf</span>: <span class="pl-st">function</span> (<span class="pl-vpf">units</span>) {</td>
      </tr>
      <tr>
        <td id="L2177" class="blob-num js-line-number" data-line-number="2177"></td>
        <td id="LC2177" class="blob-code js-file-line">            units <span class="pl-k">=</span> units.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>s<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2178" class="blob-num js-line-number" data-line-number="2178"></td>
        <td id="LC2178" class="blob-code js-file-line">            <span class="pl-c">// the following switch intentionally omits break keywords</span></td>
      </tr>
      <tr>
        <td id="L2179" class="blob-num js-line-number" data-line-number="2179"></td>
        <td id="LC2179" class="blob-code js-file-line">            <span class="pl-c">// to utilize falling through the cases.</span></td>
      </tr>
      <tr>
        <td id="L2180" class="blob-num js-line-number" data-line-number="2180"></td>
        <td id="LC2180" class="blob-code js-file-line">            <span class="pl-k">switch</span> (units) {</td>
      </tr>
      <tr>
        <td id="L2181" class="blob-num js-line-number" data-line-number="2181"></td>
        <td id="LC2181" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2182" class="blob-num js-line-number" data-line-number="2182"></td>
        <td id="LC2182" class="blob-code js-file-line">                <span class="pl-v">this</span>.month(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L2183" class="blob-num js-line-number" data-line-number="2183"></td>
        <td id="LC2183" class="blob-code js-file-line">                <span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L2184" class="blob-num js-line-number" data-line-number="2184"></td>
        <td id="LC2184" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>month<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2185" class="blob-num js-line-number" data-line-number="2185"></td>
        <td id="LC2185" class="blob-code js-file-line">                <span class="pl-v">this</span>.date(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L2186" class="blob-num js-line-number" data-line-number="2186"></td>
        <td id="LC2186" class="blob-code js-file-line">                <span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L2187" class="blob-num js-line-number" data-line-number="2187"></td>
        <td id="LC2187" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>week<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2188" class="blob-num js-line-number" data-line-number="2188"></td>
        <td id="LC2188" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>day<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2189" class="blob-num js-line-number" data-line-number="2189"></td>
        <td id="LC2189" class="blob-code js-file-line">                <span class="pl-v">this</span>.hours(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L2190" class="blob-num js-line-number" data-line-number="2190"></td>
        <td id="LC2190" class="blob-code js-file-line">                <span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L2191" class="blob-num js-line-number" data-line-number="2191"></td>
        <td id="LC2191" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hour<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2192" class="blob-num js-line-number" data-line-number="2192"></td>
        <td id="LC2192" class="blob-code js-file-line">                <span class="pl-v">this</span>.minutes(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L2193" class="blob-num js-line-number" data-line-number="2193"></td>
        <td id="LC2193" class="blob-code js-file-line">                <span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L2194" class="blob-num js-line-number" data-line-number="2194"></td>
        <td id="LC2194" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>minute<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2195" class="blob-num js-line-number" data-line-number="2195"></td>
        <td id="LC2195" class="blob-code js-file-line">                <span class="pl-v">this</span>.seconds(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L2196" class="blob-num js-line-number" data-line-number="2196"></td>
        <td id="LC2196" class="blob-code js-file-line">                <span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L2197" class="blob-num js-line-number" data-line-number="2197"></td>
        <td id="LC2197" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>second<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2198" class="blob-num js-line-number" data-line-number="2198"></td>
        <td id="LC2198" class="blob-code js-file-line">                <span class="pl-v">this</span>.milliseconds(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L2199" class="blob-num js-line-number" data-line-number="2199"></td>
        <td id="LC2199" class="blob-code js-file-line">                <span class="pl-c">/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L2200" class="blob-num js-line-number" data-line-number="2200"></td>
        <td id="LC2200" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2201" class="blob-num js-line-number" data-line-number="2201"></td>
        <td id="LC2201" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2202" class="blob-num js-line-number" data-line-number="2202"></td>
        <td id="LC2202" class="blob-code js-file-line">            <span class="pl-c">// weeks are a special case</span></td>
      </tr>
      <tr>
        <td id="L2203" class="blob-num js-line-number" data-line-number="2203"></td>
        <td id="LC2203" class="blob-code js-file-line">            <span class="pl-k">if</span> (units <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>week<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2204" class="blob-num js-line-number" data-line-number="2204"></td>
        <td id="LC2204" class="blob-code js-file-line">                <span class="pl-v">this</span>.day(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L2205" class="blob-num js-line-number" data-line-number="2205"></td>
        <td id="LC2205" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2206" class="blob-num js-line-number" data-line-number="2206"></td>
        <td id="LC2206" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2207" class="blob-num js-line-number" data-line-number="2207"></td>
        <td id="LC2207" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2208" class="blob-num js-line-number" data-line-number="2208"></td>
        <td id="LC2208" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2209" class="blob-num js-line-number" data-line-number="2209"></td>
        <td id="LC2209" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2210" class="blob-num js-line-number" data-line-number="2210"></td>
        <td id="LC2210" class="blob-code js-file-line">        <span class="pl-en">endOf</span>: <span class="pl-st">function</span> (<span class="pl-vpf">units</span>) {</td>
      </tr>
      <tr>
        <td id="L2211" class="blob-num js-line-number" data-line-number="2211"></td>
        <td id="LC2211" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>.startOf(units).<span class="pl-s3">add</span>(units.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>s<span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">1</span>).subtract(<span class="pl-s1"><span class="pl-pds">&#39;</span>ms<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L2212" class="blob-num js-line-number" data-line-number="2212"></td>
        <td id="LC2212" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2213" class="blob-num js-line-number" data-line-number="2213"></td>
        <td id="LC2213" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2214" class="blob-num js-line-number" data-line-number="2214"></td>
        <td id="LC2214" class="blob-code js-file-line">        <span class="pl-en">isAfter</span>: <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">units</span>) {</td>
      </tr>
      <tr>
        <td id="L2215" class="blob-num js-line-number" data-line-number="2215"></td>
        <td id="LC2215" class="blob-code js-file-line">            units <span class="pl-k">=</span> <span class="pl-k">typeof</span> units <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> units <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>millisecond<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2216" class="blob-num js-line-number" data-line-number="2216"></td>
        <td id="LC2216" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">+</span><span class="pl-v">this</span>.clone().startOf(units) <span class="pl-k">&gt;</span> <span class="pl-k">+</span>moment(input).startOf(units);</td>
      </tr>
      <tr>
        <td id="L2217" class="blob-num js-line-number" data-line-number="2217"></td>
        <td id="LC2217" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2218" class="blob-num js-line-number" data-line-number="2218"></td>
        <td id="LC2218" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2219" class="blob-num js-line-number" data-line-number="2219"></td>
        <td id="LC2219" class="blob-code js-file-line">        <span class="pl-en">isBefore</span>: <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">units</span>) {</td>
      </tr>
      <tr>
        <td id="L2220" class="blob-num js-line-number" data-line-number="2220"></td>
        <td id="LC2220" class="blob-code js-file-line">            units <span class="pl-k">=</span> <span class="pl-k">typeof</span> units <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> units <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>millisecond<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2221" class="blob-num js-line-number" data-line-number="2221"></td>
        <td id="LC2221" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">+</span><span class="pl-v">this</span>.clone().startOf(units) <span class="pl-k">&lt;</span> <span class="pl-k">+</span>moment(input).startOf(units);</td>
      </tr>
      <tr>
        <td id="L2222" class="blob-num js-line-number" data-line-number="2222"></td>
        <td id="LC2222" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2223" class="blob-num js-line-number" data-line-number="2223"></td>
        <td id="LC2223" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2224" class="blob-num js-line-number" data-line-number="2224"></td>
        <td id="LC2224" class="blob-code js-file-line">        <span class="pl-en">isSame</span>: <span class="pl-st">function</span> (<span class="pl-vpf">input</span>, <span class="pl-vpf">units</span>) {</td>
      </tr>
      <tr>
        <td id="L2225" class="blob-num js-line-number" data-line-number="2225"></td>
        <td id="LC2225" class="blob-code js-file-line">            units <span class="pl-k">=</span> <span class="pl-k">typeof</span> units <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> units <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>millisecond<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2226" class="blob-num js-line-number" data-line-number="2226"></td>
        <td id="LC2226" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">+</span><span class="pl-v">this</span>.clone().startOf(units) <span class="pl-k">===</span> <span class="pl-k">+</span>moment(input).startOf(units);</td>
      </tr>
      <tr>
        <td id="L2227" class="blob-num js-line-number" data-line-number="2227"></td>
        <td id="LC2227" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2228" class="blob-num js-line-number" data-line-number="2228"></td>
        <td id="LC2228" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2229" class="blob-num js-line-number" data-line-number="2229"></td>
        <td id="LC2229" class="blob-code js-file-line">        <span class="pl-en">zone</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2230" class="blob-num js-line-number" data-line-number="2230"></td>
        <td id="LC2230" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._isUTC <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-v">this</span>._d.<span class="pl-s3">getTimezoneOffset</span>();</td>
      </tr>
      <tr>
        <td id="L2231" class="blob-num js-line-number" data-line-number="2231"></td>
        <td id="LC2231" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2232" class="blob-num js-line-number" data-line-number="2232"></td>
        <td id="LC2232" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2233" class="blob-num js-line-number" data-line-number="2233"></td>
        <td id="LC2233" class="blob-code js-file-line">        <span class="pl-en">daysInMonth</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2234" class="blob-num js-line-number" data-line-number="2234"></td>
        <td id="LC2234" class="blob-code js-file-line">            <span class="pl-k">return</span> moment.utc([<span class="pl-v">this</span>.year(), <span class="pl-v">this</span>.month() <span class="pl-k">+</span> <span class="pl-c1">1</span>, <span class="pl-c1">0</span>]).date();</td>
      </tr>
      <tr>
        <td id="L2235" class="blob-num js-line-number" data-line-number="2235"></td>
        <td id="LC2235" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2236" class="blob-num js-line-number" data-line-number="2236"></td>
        <td id="LC2236" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2237" class="blob-num js-line-number" data-line-number="2237"></td>
        <td id="LC2237" class="blob-code js-file-line">        <span class="pl-en">dayOfYear</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L2238" class="blob-num js-line-number" data-line-number="2238"></td>
        <td id="LC2238" class="blob-code js-file-line">            <span class="pl-s">var</span> dayOfYear <span class="pl-k">=</span> <span class="pl-s3">round</span>((moment(<span class="pl-v">this</span>).startOf(<span class="pl-s1"><span class="pl-pds">&#39;</span>day<span class="pl-pds">&#39;</span></span>) <span class="pl-k">-</span> moment(<span class="pl-v">this</span>).startOf(<span class="pl-s1"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span>)) / <span class="pl-c1">864e5</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L2239" class="blob-num js-line-number" data-line-number="2239"></td>
        <td id="LC2239" class="blob-code js-file-line">            <span class="pl-k">return</span> input <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> dayOfYear <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, (input <span class="pl-k">-</span> dayOfYear));</td>
      </tr>
      <tr>
        <td id="L2240" class="blob-num js-line-number" data-line-number="2240"></td>
        <td id="LC2240" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2241" class="blob-num js-line-number" data-line-number="2241"></td>
        <td id="LC2241" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2242" class="blob-num js-line-number" data-line-number="2242"></td>
        <td id="LC2242" class="blob-code js-file-line">        <span class="pl-en">isoWeek</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L2243" class="blob-num js-line-number" data-line-number="2243"></td>
        <td id="LC2243" class="blob-code js-file-line">            <span class="pl-s">var</span> week <span class="pl-k">=</span> weekOfYear(<span class="pl-v">this</span>, <span class="pl-c1">1</span>, <span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L2244" class="blob-num js-line-number" data-line-number="2244"></td>
        <td id="LC2244" class="blob-code js-file-line">            <span class="pl-k">return</span> input <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> week <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, (input <span class="pl-k">-</span> week) <span class="pl-k">*</span> <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L2245" class="blob-num js-line-number" data-line-number="2245"></td>
        <td id="LC2245" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2246" class="blob-num js-line-number" data-line-number="2246"></td>
        <td id="LC2246" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2247" class="blob-num js-line-number" data-line-number="2247"></td>
        <td id="LC2247" class="blob-code js-file-line">        <span class="pl-en">week</span> : <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L2248" class="blob-num js-line-number" data-line-number="2248"></td>
        <td id="LC2248" class="blob-code js-file-line">            <span class="pl-s">var</span> week <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().week(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L2249" class="blob-num js-line-number" data-line-number="2249"></td>
        <td id="LC2249" class="blob-code js-file-line">            <span class="pl-k">return</span> input <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> week <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-s3">add</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>, (input <span class="pl-k">-</span> week) <span class="pl-k">*</span> <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L2250" class="blob-num js-line-number" data-line-number="2250"></td>
        <td id="LC2250" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2251" class="blob-num js-line-number" data-line-number="2251"></td>
        <td id="LC2251" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2252" class="blob-num js-line-number" data-line-number="2252"></td>
        <td id="LC2252" class="blob-code js-file-line">        <span class="pl-c">// If passed a language key, it will set the language for this</span></td>
      </tr>
      <tr>
        <td id="L2253" class="blob-num js-line-number" data-line-number="2253"></td>
        <td id="LC2253" class="blob-code js-file-line">        <span class="pl-c">// instance.  Otherwise, it will return the language configuration</span></td>
      </tr>
      <tr>
        <td id="L2254" class="blob-num js-line-number" data-line-number="2254"></td>
        <td id="LC2254" class="blob-code js-file-line">        <span class="pl-c">// variables for this instance.</span></td>
      </tr>
      <tr>
        <td id="L2255" class="blob-num js-line-number" data-line-number="2255"></td>
        <td id="LC2255" class="blob-code js-file-line">        <span class="pl-en">lang</span> : <span class="pl-st">function</span> (<span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L2256" class="blob-num js-line-number" data-line-number="2256"></td>
        <td id="LC2256" class="blob-code js-file-line">            <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2257" class="blob-num js-line-number" data-line-number="2257"></td>
        <td id="LC2257" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>._lang;</td>
      </tr>
      <tr>
        <td id="L2258" class="blob-num js-line-number" data-line-number="2258"></td>
        <td id="LC2258" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2259" class="blob-num js-line-number" data-line-number="2259"></td>
        <td id="LC2259" class="blob-code js-file-line">                <span class="pl-v">this</span>._lang <span class="pl-k">=</span> getLangDefinition(key);</td>
      </tr>
      <tr>
        <td id="L2260" class="blob-num js-line-number" data-line-number="2260"></td>
        <td id="LC2260" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2261" class="blob-num js-line-number" data-line-number="2261"></td>
        <td id="LC2261" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2262" class="blob-num js-line-number" data-line-number="2262"></td>
        <td id="LC2262" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2263" class="blob-num js-line-number" data-line-number="2263"></td>
        <td id="LC2263" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2264" class="blob-num js-line-number" data-line-number="2264"></td>
        <td id="LC2264" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2265" class="blob-num js-line-number" data-line-number="2265"></td>
        <td id="LC2265" class="blob-code js-file-line">    <span class="pl-c">// helper for adding shortcuts</span></td>
      </tr>
      <tr>
        <td id="L2266" class="blob-num js-line-number" data-line-number="2266"></td>
        <td id="LC2266" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeGetterAndSetter</span>(<span class="pl-vpf">name</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L2267" class="blob-num js-line-number" data-line-number="2267"></td>
        <td id="LC2267" class="blob-code js-file-line">        moment.fn[name] <span class="pl-k">=</span> moment.fn[name <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L2268" class="blob-num js-line-number" data-line-number="2268"></td>
        <td id="LC2268" class="blob-code js-file-line">            <span class="pl-s">var</span> utc <span class="pl-k">=</span> <span class="pl-v">this</span>._isUTC <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>UTC<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2269" class="blob-num js-line-number" data-line-number="2269"></td>
        <td id="LC2269" class="blob-code js-file-line">            <span class="pl-k">if</span> (input <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L2270" class="blob-num js-line-number" data-line-number="2270"></td>
        <td id="LC2270" class="blob-code js-file-line">                <span class="pl-v">this</span>._d[<span class="pl-s1"><span class="pl-pds">&#39;</span>set<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> utc <span class="pl-k">+</span> key](input);</td>
      </tr>
      <tr>
        <td id="L2271" class="blob-num js-line-number" data-line-number="2271"></td>
        <td id="LC2271" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2272" class="blob-num js-line-number" data-line-number="2272"></td>
        <td id="LC2272" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2273" class="blob-num js-line-number" data-line-number="2273"></td>
        <td id="LC2273" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-v">this</span>._d[<span class="pl-s1"><span class="pl-pds">&#39;</span>get<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> utc <span class="pl-k">+</span> key]();</td>
      </tr>
      <tr>
        <td id="L2274" class="blob-num js-line-number" data-line-number="2274"></td>
        <td id="LC2274" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2275" class="blob-num js-line-number" data-line-number="2275"></td>
        <td id="LC2275" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L2276" class="blob-num js-line-number" data-line-number="2276"></td>
        <td id="LC2276" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2277" class="blob-num js-line-number" data-line-number="2277"></td>
        <td id="LC2277" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2278" class="blob-num js-line-number" data-line-number="2278"></td>
        <td id="LC2278" class="blob-code js-file-line">    <span class="pl-c">// loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)</span></td>
      </tr>
      <tr>
        <td id="L2279" class="blob-num js-line-number" data-line-number="2279"></td>
        <td id="LC2279" class="blob-code js-file-line">    <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> proxyGettersAndSetters.<span class="pl-sc">length</span>; i <span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L2280" class="blob-num js-line-number" data-line-number="2280"></td>
        <td id="LC2280" class="blob-code js-file-line">        makeGetterAndSetter(proxyGettersAndSetters[i].<span class="pl-s3">toLowerCase</span>().<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>s<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>), proxyGettersAndSetters[i]);</td>
      </tr>
      <tr>
        <td id="L2281" class="blob-num js-line-number" data-line-number="2281"></td>
        <td id="LC2281" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2282" class="blob-num js-line-number" data-line-number="2282"></td>
        <td id="LC2282" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2283" class="blob-num js-line-number" data-line-number="2283"></td>
        <td id="LC2283" class="blob-code js-file-line">    <span class="pl-c">// add shortcut for year (uses different syntax than the getter/setter &#39;year&#39; == &#39;FullYear&#39;)</span></td>
      </tr>
      <tr>
        <td id="L2284" class="blob-num js-line-number" data-line-number="2284"></td>
        <td id="LC2284" class="blob-code js-file-line">    makeGetterAndSetter(<span class="pl-s1"><span class="pl-pds">&#39;</span>year<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>FullYear<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2285" class="blob-num js-line-number" data-line-number="2285"></td>
        <td id="LC2285" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2286" class="blob-num js-line-number" data-line-number="2286"></td>
        <td id="LC2286" class="blob-code js-file-line">    <span class="pl-c">// add plural methods</span></td>
      </tr>
      <tr>
        <td id="L2287" class="blob-num js-line-number" data-line-number="2287"></td>
        <td id="LC2287" class="blob-code js-file-line">    moment.fn.days <span class="pl-k">=</span> moment.fn.day;</td>
      </tr>
      <tr>
        <td id="L2288" class="blob-num js-line-number" data-line-number="2288"></td>
        <td id="LC2288" class="blob-code js-file-line">    moment.fn.weeks <span class="pl-k">=</span> moment.fn.week;</td>
      </tr>
      <tr>
        <td id="L2289" class="blob-num js-line-number" data-line-number="2289"></td>
        <td id="LC2289" class="blob-code js-file-line">    moment.fn.isoWeeks <span class="pl-k">=</span> moment.fn.isoWeek;</td>
      </tr>
      <tr>
        <td id="L2290" class="blob-num js-line-number" data-line-number="2290"></td>
        <td id="LC2290" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2291" class="blob-num js-line-number" data-line-number="2291"></td>
        <td id="LC2291" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L2292" class="blob-num js-line-number" data-line-number="2292"></td>
        <td id="LC2292" class="blob-code js-file-line"><span class="pl-c">        Duration Prototype</span></td>
      </tr>
      <tr>
        <td id="L2293" class="blob-num js-line-number" data-line-number="2293"></td>
        <td id="LC2293" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L2294" class="blob-num js-line-number" data-line-number="2294"></td>
        <td id="LC2294" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2295" class="blob-num js-line-number" data-line-number="2295"></td>
        <td id="LC2295" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2296" class="blob-num js-line-number" data-line-number="2296"></td>
        <td id="LC2296" class="blob-code js-file-line">    moment.duration.fn <span class="pl-k">=</span> <span class="pl-s3">Duration</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L2297" class="blob-num js-line-number" data-line-number="2297"></td>
        <td id="LC2297" class="blob-code js-file-line">        <span class="pl-en">weeks</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2298" class="blob-num js-line-number" data-line-number="2298"></td>
        <td id="LC2298" class="blob-code js-file-line">            <span class="pl-k">return</span> absRound(<span class="pl-v">this</span>.days() / <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L2299" class="blob-num js-line-number" data-line-number="2299"></td>
        <td id="LC2299" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2300" class="blob-num js-line-number" data-line-number="2300"></td>
        <td id="LC2300" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2301" class="blob-num js-line-number" data-line-number="2301"></td>
        <td id="LC2301" class="blob-code js-file-line">        <span class="pl-en">valueOf</span> : <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2302" class="blob-num js-line-number" data-line-number="2302"></td>
        <td id="LC2302" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._milliseconds <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L2303" class="blob-num js-line-number" data-line-number="2303"></td>
        <td id="LC2303" class="blob-code js-file-line">              <span class="pl-v">this</span>._days <span class="pl-k">*</span> <span class="pl-c1">864e5</span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L2304" class="blob-num js-line-number" data-line-number="2304"></td>
        <td id="LC2304" class="blob-code js-file-line">              <span class="pl-v">this</span>._months <span class="pl-k">*</span> <span class="pl-c1">2592e6</span>;</td>
      </tr>
      <tr>
        <td id="L2305" class="blob-num js-line-number" data-line-number="2305"></td>
        <td id="LC2305" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2306" class="blob-num js-line-number" data-line-number="2306"></td>
        <td id="LC2306" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2307" class="blob-num js-line-number" data-line-number="2307"></td>
        <td id="LC2307" class="blob-code js-file-line">        <span class="pl-en">humanize</span> : <span class="pl-st">function</span> (<span class="pl-vpf">withSuffix</span>) {</td>
      </tr>
      <tr>
        <td id="L2308" class="blob-num js-line-number" data-line-number="2308"></td>
        <td id="LC2308" class="blob-code js-file-line">            <span class="pl-s">var</span> difference <span class="pl-k">=</span> <span class="pl-k">+</span><span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L2309" class="blob-num js-line-number" data-line-number="2309"></td>
        <td id="LC2309" class="blob-code js-file-line">                output <span class="pl-k">=</span> relativeTime(difference, <span class="pl-k">!</span>withSuffix, <span class="pl-v">this</span>.<span class="pl-sc">lang</span>());</td>
      </tr>
      <tr>
        <td id="L2310" class="blob-num js-line-number" data-line-number="2310"></td>
        <td id="LC2310" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2311" class="blob-num js-line-number" data-line-number="2311"></td>
        <td id="LC2311" class="blob-code js-file-line">            <span class="pl-k">if</span> (withSuffix) {</td>
      </tr>
      <tr>
        <td id="L2312" class="blob-num js-line-number" data-line-number="2312"></td>
        <td id="LC2312" class="blob-code js-file-line">                output <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().pastFuture(difference, output);</td>
      </tr>
      <tr>
        <td id="L2313" class="blob-num js-line-number" data-line-number="2313"></td>
        <td id="LC2313" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2314" class="blob-num js-line-number" data-line-number="2314"></td>
        <td id="LC2314" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2315" class="blob-num js-line-number" data-line-number="2315"></td>
        <td id="LC2315" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">lang</span>().postformat(output);</td>
      </tr>
      <tr>
        <td id="L2316" class="blob-num js-line-number" data-line-number="2316"></td>
        <td id="LC2316" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2317" class="blob-num js-line-number" data-line-number="2317"></td>
        <td id="LC2317" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2318" class="blob-num js-line-number" data-line-number="2318"></td>
        <td id="LC2318" class="blob-code js-file-line">        lang <span class="pl-k">:</span> moment.fn.<span class="pl-sc">lang</span></td>
      </tr>
      <tr>
        <td id="L2319" class="blob-num js-line-number" data-line-number="2319"></td>
        <td id="LC2319" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2320" class="blob-num js-line-number" data-line-number="2320"></td>
        <td id="LC2320" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2321" class="blob-num js-line-number" data-line-number="2321"></td>
        <td id="LC2321" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeDurationGetter</span>(<span class="pl-vpf">name</span>) {</td>
      </tr>
      <tr>
        <td id="L2322" class="blob-num js-line-number" data-line-number="2322"></td>
        <td id="LC2322" class="blob-code js-file-line">        moment.duration.fn[name] <span class="pl-k">=</span> <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2323" class="blob-num js-line-number" data-line-number="2323"></td>
        <td id="LC2323" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-v">this</span>._data[name];</td>
      </tr>
      <tr>
        <td id="L2324" class="blob-num js-line-number" data-line-number="2324"></td>
        <td id="LC2324" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L2325" class="blob-num js-line-number" data-line-number="2325"></td>
        <td id="LC2325" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2326" class="blob-num js-line-number" data-line-number="2326"></td>
        <td id="LC2326" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2327" class="blob-num js-line-number" data-line-number="2327"></td>
        <td id="LC2327" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">makeDurationAsGetter</span>(<span class="pl-vpf">name</span>, <span class="pl-vpf">factor</span>) {</td>
      </tr>
      <tr>
        <td id="L2328" class="blob-num js-line-number" data-line-number="2328"></td>
        <td id="LC2328" class="blob-code js-file-line">        moment.duration.fn[<span class="pl-s1"><span class="pl-pds">&#39;</span>as<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name] <span class="pl-k">=</span> <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2329" class="blob-num js-line-number" data-line-number="2329"></td>
        <td id="LC2329" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-k">+</span><span class="pl-v">this</span> / factor;</td>
      </tr>
      <tr>
        <td id="L2330" class="blob-num js-line-number" data-line-number="2330"></td>
        <td id="LC2330" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L2331" class="blob-num js-line-number" data-line-number="2331"></td>
        <td id="LC2331" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2332" class="blob-num js-line-number" data-line-number="2332"></td>
        <td id="LC2332" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2333" class="blob-num js-line-number" data-line-number="2333"></td>
        <td id="LC2333" class="blob-code js-file-line">    <span class="pl-k">for</span> (i <span class="pl-k">in</span> unitMillisecondFactors) {</td>
      </tr>
      <tr>
        <td id="L2334" class="blob-num js-line-number" data-line-number="2334"></td>
        <td id="LC2334" class="blob-code js-file-line">        <span class="pl-k">if</span> (unitMillisecondFactors.hasOwnProperty(i)) {</td>
      </tr>
      <tr>
        <td id="L2335" class="blob-num js-line-number" data-line-number="2335"></td>
        <td id="LC2335" class="blob-code js-file-line">            makeDurationAsGetter(i, unitMillisecondFactors[i]);</td>
      </tr>
      <tr>
        <td id="L2336" class="blob-num js-line-number" data-line-number="2336"></td>
        <td id="LC2336" class="blob-code js-file-line">            makeDurationGetter(i.<span class="pl-s3">toLowerCase</span>());</td>
      </tr>
      <tr>
        <td id="L2337" class="blob-num js-line-number" data-line-number="2337"></td>
        <td id="LC2337" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2338" class="blob-num js-line-number" data-line-number="2338"></td>
        <td id="LC2338" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2339" class="blob-num js-line-number" data-line-number="2339"></td>
        <td id="LC2339" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2340" class="blob-num js-line-number" data-line-number="2340"></td>
        <td id="LC2340" class="blob-code js-file-line">    makeDurationAsGetter(<span class="pl-s1"><span class="pl-pds">&#39;</span>Weeks<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">6048e5</span>);</td>
      </tr>
      <tr>
        <td id="L2341" class="blob-num js-line-number" data-line-number="2341"></td>
        <td id="LC2341" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2342" class="blob-num js-line-number" data-line-number="2342"></td>
        <td id="LC2342" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2343" class="blob-num js-line-number" data-line-number="2343"></td>
        <td id="LC2343" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L2344" class="blob-num js-line-number" data-line-number="2344"></td>
        <td id="LC2344" class="blob-code js-file-line"><span class="pl-c">        Default Lang</span></td>
      </tr>
      <tr>
        <td id="L2345" class="blob-num js-line-number" data-line-number="2345"></td>
        <td id="LC2345" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L2346" class="blob-num js-line-number" data-line-number="2346"></td>
        <td id="LC2346" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2347" class="blob-num js-line-number" data-line-number="2347"></td>
        <td id="LC2347" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2348" class="blob-num js-line-number" data-line-number="2348"></td>
        <td id="LC2348" class="blob-code js-file-line">    <span class="pl-c">// Set default language, other languages will inherit from English.</span></td>
      </tr>
      <tr>
        <td id="L2349" class="blob-num js-line-number" data-line-number="2349"></td>
        <td id="LC2349" class="blob-code js-file-line">    moment.<span class="pl-sc">lang</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L2350" class="blob-num js-line-number" data-line-number="2350"></td>
        <td id="LC2350" class="blob-code js-file-line">        <span class="pl-en">ordinal</span> : <span class="pl-st">function</span> (<span class="pl-vpf">number</span>) {</td>
      </tr>
      <tr>
        <td id="L2351" class="blob-num js-line-number" data-line-number="2351"></td>
        <td id="LC2351" class="blob-code js-file-line">            <span class="pl-s">var</span> b <span class="pl-k">=</span> number <span class="pl-k">%</span> <span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L2352" class="blob-num js-line-number" data-line-number="2352"></td>
        <td id="LC2352" class="blob-code js-file-line">                output <span class="pl-k">=</span> (<span class="pl-k">~~</span> (number <span class="pl-k">%</span> <span class="pl-c1">100</span> / <span class="pl-c1">10</span>) <span class="pl-k">===</span> <span class="pl-c1">1</span>) <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2353" class="blob-num js-line-number" data-line-number="2353"></td>
        <td id="LC2353" class="blob-code js-file-line">                (b <span class="pl-k">===</span> <span class="pl-c1">1</span>) <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>st<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2354" class="blob-num js-line-number" data-line-number="2354"></td>
        <td id="LC2354" class="blob-code js-file-line">                (b <span class="pl-k">===</span> <span class="pl-c1">2</span>) <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>nd<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2355" class="blob-num js-line-number" data-line-number="2355"></td>
        <td id="LC2355" class="blob-code js-file-line">                (b <span class="pl-k">===</span> <span class="pl-c1">3</span>) <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>rd<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2356" class="blob-num js-line-number" data-line-number="2356"></td>
        <td id="LC2356" class="blob-code js-file-line">            <span class="pl-k">return</span> number <span class="pl-k">+</span> output;</td>
      </tr>
      <tr>
        <td id="L2357" class="blob-num js-line-number" data-line-number="2357"></td>
        <td id="LC2357" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2358" class="blob-num js-line-number" data-line-number="2358"></td>
        <td id="LC2358" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L2359" class="blob-num js-line-number" data-line-number="2359"></td>
        <td id="LC2359" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2360" class="blob-num js-line-number" data-line-number="2360"></td>
        <td id="LC2360" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2361" class="blob-num js-line-number" data-line-number="2361"></td>
        <td id="LC2361" class="blob-code js-file-line">    <span class="pl-c">/************************************</span></td>
      </tr>
      <tr>
        <td id="L2362" class="blob-num js-line-number" data-line-number="2362"></td>
        <td id="LC2362" class="blob-code js-file-line"><span class="pl-c">        Exposing Moment</span></td>
      </tr>
      <tr>
        <td id="L2363" class="blob-num js-line-number" data-line-number="2363"></td>
        <td id="LC2363" class="blob-code js-file-line"><span class="pl-c">    ************************************/</span></td>
      </tr>
      <tr>
        <td id="L2364" class="blob-num js-line-number" data-line-number="2364"></td>
        <td id="LC2364" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2365" class="blob-num js-line-number" data-line-number="2365"></td>
        <td id="LC2365" class="blob-code js-file-line">    <span class="pl-v">this</span>[<span class="pl-s1"><span class="pl-pds">&#39;</span>moment<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> moment;</td>
      </tr>
      <tr>
        <td id="L2366" class="blob-num js-line-number" data-line-number="2366"></td>
        <td id="LC2366" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2367" class="blob-num js-line-number" data-line-number="2367"></td>
        <td id="LC2367" class="blob-code js-file-line">}).<span class="pl-s3">call</span>(<span class="pl-k">typeof</span> Kalendae <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s3">window</span> <span class="pl-k">:</span> Kalendae);</td>
      </tr>
      <tr>
        <td id="L2368" class="blob-num js-line-number" data-line-number="2368"></td>
        <td id="LC2368" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2369" class="blob-num js-line-number" data-line-number="2369"></td>
        <td id="LC2369" class="blob-code js-file-line"><span class="pl-k">if</span> (<span class="pl-k">!</span>Kalendae.moment) {</td>
      </tr>
      <tr>
        <td id="L2370" class="blob-num js-line-number" data-line-number="2370"></td>
        <td id="LC2370" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-s3">window</span>.moment) {</td>
      </tr>
      <tr>
        <td id="L2371" class="blob-num js-line-number" data-line-number="2371"></td>
        <td id="LC2371" class="blob-code js-file-line">		Kalendae.moment <span class="pl-k">=</span> <span class="pl-s3">window</span>.moment;</td>
      </tr>
      <tr>
        <td id="L2372" class="blob-num js-line-number" data-line-number="2372"></td>
        <td id="LC2372" class="blob-code js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2373" class="blob-num js-line-number" data-line-number="2373"></td>
        <td id="LC2373" class="blob-code js-file-line">		<span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Kalendae requires moment.js. You must use kalendae.standalone.js if moment is not available on the page.<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2374" class="blob-num js-line-number" data-line-number="2374"></td>
        <td id="LC2374" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2375" class="blob-num js-line-number" data-line-number="2375"></td>
        <td id="LC2375" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L2376" class="blob-num js-line-number" data-line-number="2376"></td>
        <td id="LC2376" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2377" class="blob-num js-line-number" data-line-number="2377"></td>
        <td id="LC2377" class="blob-code js-file-line">moment <span class="pl-k">=</span> Kalendae.moment;</td>
      </tr>
      <tr>
        <td id="L2378" class="blob-num js-line-number" data-line-number="2378"></td>
        <td id="LC2378" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2379" class="blob-num js-line-number" data-line-number="2379"></td>
        <td id="LC2379" class="blob-code js-file-line"><span class="pl-c">//function to reset the date object to 00:00 GMT</span></td>
      </tr>
      <tr>
        <td id="L2380" class="blob-num js-line-number" data-line-number="2380"></td>
        <td id="LC2380" class="blob-code js-file-line"><span class="pl-s3">moment.fn</span>.<span class="pl-en">stripTime</span> <span class="pl-k">=</span> <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2381" class="blob-num js-line-number" data-line-number="2381"></td>
        <td id="LC2381" class="blob-code js-file-line">	<span class="pl-v">this</span>._d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-s3">Math</span>.<span class="pl-s3">floor</span>(<span class="pl-v">this</span>._d.<span class="pl-s3">valueOf</span>() / <span class="pl-c1">86400000</span>) <span class="pl-k">*</span> <span class="pl-c1">86400000</span>);</td>
      </tr>
      <tr>
        <td id="L2382" class="blob-num js-line-number" data-line-number="2382"></td>
        <td id="LC2382" class="blob-code js-file-line">	<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2383" class="blob-num js-line-number" data-line-number="2383"></td>
        <td id="LC2383" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L2384" class="blob-num js-line-number" data-line-number="2384"></td>
        <td id="LC2384" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2385" class="blob-num js-line-number" data-line-number="2385"></td>
        <td id="LC2385" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2386" class="blob-num js-line-number" data-line-number="2386"></td>
        <td id="LC2386" class="blob-code js-file-line"><span class="pl-c">//function to get the total number of days since the epoch.</span></td>
      </tr>
      <tr>
        <td id="L2387" class="blob-num js-line-number" data-line-number="2387"></td>
        <td id="LC2387" class="blob-code js-file-line"><span class="pl-s3">moment.fn</span>.<span class="pl-en">yearDay</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L2388" class="blob-num js-line-number" data-line-number="2388"></td>
        <td id="LC2388" class="blob-code js-file-line">	<span class="pl-s">var</span> yearday <span class="pl-k">=</span> <span class="pl-s3">Math</span>.<span class="pl-s3">floor</span>(<span class="pl-v">this</span>._d / <span class="pl-c1">86400000</span>);</td>
      </tr>
      <tr>
        <td id="L2389" class="blob-num js-line-number" data-line-number="2389"></td>
        <td id="LC2389" class="blob-code js-file-line">    <span class="pl-k">return</span> (<span class="pl-k">typeof</span> input <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> yearday <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2390" class="blob-num js-line-number" data-line-number="2390"></td>
        <td id="LC2390" class="blob-code js-file-line">        <span class="pl-v">this</span>.<span class="pl-s3">add</span>({ d <span class="pl-k">:</span> input <span class="pl-k">-</span> yearday });</td>
      </tr>
      <tr>
        <td id="L2391" class="blob-num js-line-number" data-line-number="2391"></td>
        <td id="LC2391" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L2392" class="blob-num js-line-number" data-line-number="2392"></td>
        <td id="LC2392" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2393" class="blob-num js-line-number" data-line-number="2393"></td>
        <td id="LC2393" class="blob-code js-file-line">today <span class="pl-k">=</span> Kalendae.moment().stripTime();</td>
      </tr>
      <tr>
        <td id="L2394" class="blob-num js-line-number" data-line-number="2394"></td>
        <td id="LC2394" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2395" class="blob-num js-line-number" data-line-number="2395"></td>
        <td id="LC2395" class="blob-code js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> jQuery <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">typeof</span> <span class="pl-s3">document</span>.addEventListener <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> util.isIE8())) {</td>
      </tr>
      <tr>
        <td id="L2396" class="blob-num js-line-number" data-line-number="2396"></td>
        <td id="LC2396" class="blob-code js-file-line">	<span class="pl-s3">jQuery.fn</span>.<span class="pl-en">kalendae</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L2397" class="blob-num js-line-number" data-line-number="2397"></td>
        <td id="LC2397" class="blob-code js-file-line">		<span class="pl-v">this</span>.each(<span class="pl-st">function</span> (<span class="pl-vpf">i</span>, <span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L2398" class="blob-num js-line-number" data-line-number="2398"></td>
        <td id="LC2398" class="blob-code js-file-line">			<span class="pl-k">if</span> (e.<span class="pl-sc">tagName</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>INPUT<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2399" class="blob-num js-line-number" data-line-number="2399"></td>
        <td id="LC2399" class="blob-code js-file-line">				<span class="pl-c">//if element is an input, bind a popup calendar to the input.</span></td>
      </tr>
      <tr>
        <td id="L2400" class="blob-num js-line-number" data-line-number="2400"></td>
        <td id="LC2400" class="blob-code js-file-line">				$(e).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>kalendae<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">Kalendae.Input</span>(e, options));</td>
      </tr>
      <tr>
        <td id="L2401" class="blob-num js-line-number" data-line-number="2401"></td>
        <td id="LC2401" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2402" class="blob-num js-line-number" data-line-number="2402"></td>
        <td id="LC2402" class="blob-code js-file-line">				<span class="pl-c">//otherwise, insert a flat calendar into the element.</span></td>
      </tr>
      <tr>
        <td id="L2403" class="blob-num js-line-number" data-line-number="2403"></td>
        <td id="LC2403" class="blob-code js-file-line">				$(e).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>kalendae<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">Kalendae</span>($.extend({}, {attachTo<span class="pl-k">:</span>e}, options)));</td>
      </tr>
      <tr>
        <td id="L2404" class="blob-num js-line-number" data-line-number="2404"></td>
        <td id="LC2404" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2405" class="blob-num js-line-number" data-line-number="2405"></td>
        <td id="LC2405" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L2406" class="blob-num js-line-number" data-line-number="2406"></td>
        <td id="LC2406" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L2407" class="blob-num js-line-number" data-line-number="2407"></td>
        <td id="LC2407" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L2408" class="blob-num js-line-number" data-line-number="2408"></td>
        <td id="LC2408" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L2409" class="blob-num js-line-number" data-line-number="2409"></td>
        <td id="LC2409" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2410" class="blob-num js-line-number" data-line-number="2410"></td>
        <td id="LC2410" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2411" class="blob-num js-line-number" data-line-number="2411"></td>
        <td id="LC2411" class="blob-code js-file-line">})();</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.10055s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-153d6254b838872c8db73c8bd92905913f6f5b2164b7e40e5292286bd5a39403.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-341533e826e8eda6352720e2a6edded2591cc74f9a9a250fc1f9f2ded364ebee.js" type="text/javascript"></script>
      
      
  </body>
</html>
