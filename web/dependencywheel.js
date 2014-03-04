




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>dependency_wheel/dependencywheel.js at master · versioneye/dependency_wheel · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="versioneye/dependency_wheel" name="twitter:title" /><meta content="dependency_wheel - JS Lib to visualize recursive dependencies for software libraries. " name="twitter:description" /><meta content="https://0.gravatar.com/avatar/879225ddb1056345f41cdb5575ed13f7?d=https%3A%2F%2Fidenticons.github.com%2F11a280b4b747132f97c9ed8f71d740ac.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://0.gravatar.com/avatar/879225ddb1056345f41cdb5575ed13f7?d=https%3A%2F%2Fidenticons.github.com%2F11a280b4b747132f97c9ed8f71d740ac.png&amp;r=x&amp;s=400" property="og:image" /><meta content="versioneye/dependency_wheel" property="og:title" /><meta content="https://github.com/versioneye/dependency_wheel" property="og:url" /><meta content="dependency_wheel - JS Lib to visualize recursive dependencies for software libraries. " property="og:description" />

    <meta name="hostname" content="github-fe129-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="529FB04A:0719:1337B18:52F24D97" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="q/9vsa1vX051+q/93EOW2UsGbKfpmzCrdM3nHR+yORg=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-71564d84c77aaffaa3f004e2616af4a1113b044b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-9435e6151d831c7c0ea851d5963b20db08f8b3d0.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-6629588efc908265e5f194016e81140bfa95e9ee.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-ab273a0202e49e595f9934f53e64bd784939ea3b.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="8447cdbc95f8302777cddcad10da94f0">

        <link data-pjax-transient rel='permalink' href='/versioneye/dependency_wheel/blob/f23188acb8b906876c47b27aa3238c3e9376aa05/dependencywheel.js'>

  <meta name="description" content="dependency_wheel - JS Lib to visualize recursive dependencies for software libraries. " />

  <meta content="3974102" name="octolytics-dimension-user_id" /><meta content="versioneye" name="octolytics-dimension-user_login" /><meta content="4765907" name="octolytics-dimension-repository_id" /><meta content="versioneye/dependency_wheel" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4765907" name="octolytics-dimension-repository_network_root_id" /><meta content="versioneye/dependency_wheel" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/versioneye/dependency_wheel/commits/master.atom" rel="alternate" title="Recent Commits to dependency_wheel:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fversioneye%2Fdependency_wheel%2Fblob%2Fmaster%2Fdependencywheel.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="versioneye/dependency_wheel"
      data-branch="master"
      data-sha="3f431105bd1398d9e86f8bab1ec61dc8f0ccf94e"
  >

    <input type="hidden" name="nwo" value="versioneye/dependency_wheel" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fversioneye%2Fdependency_wheel"
    class="minibutton with-count js-toggler-target star-button tooltipped upwards"
    title="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/versioneye/dependency_wheel/stargazers">
      6
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fversioneye%2Fdependency_wheel"
        class="minibutton with-count js-toggler-target fork-button tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/versioneye/dependency_wheel/network" class="social-count">
        3
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/versioneye" class="url fn" itemprop="url" rel="author"><span itemprop="title">versioneye</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/versioneye/dependency_wheel" class="js-current-repository js-repo-home-link">dependency_wheel</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/versioneye/dependency_wheel" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /versioneye/dependency_wheel">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/versioneye/dependency_wheel/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /versioneye/dependency_wheel/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/versioneye/dependency_wheel/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /versioneye/dependency_wheel/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/versioneye/dependency_wheel/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /versioneye/dependency_wheel/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/versioneye/dependency_wheel/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /versioneye/dependency_wheel/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/versioneye/dependency_wheel/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /versioneye/dependency_wheel/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/versioneye/dependency_wheel.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/versioneye/dependency_wheel.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/versioneye/dependency_wheel" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/versioneye/dependency_wheel" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/versioneye/dependency_wheel/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:b9d37808c9fa972bc945749c667981d4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/versioneye/dependency_wheel/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
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
              <a href="/versioneye/dependency_wheel/blob/gb-sandbox/dependencywheel.js"
                 data-name="gb-sandbox"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gb-sandbox">gb-sandbox</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/versioneye/dependency_wheel/blob/master/dependencywheel.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/versioneye/dependency_wheel" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dependency_wheel</span></a></span></span><span class="separator"> / </span><strong class="final-path">dependencywheel.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dependencywheel.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Robert Reiz" class="main-avatar" height="24" src="https://1.gravatar.com/avatar/11c3ac04d669661020cf80a822cd9620?d=https%3A%2F%2Fidenticons.github.com%2F001946c78373a160c3c4ba0ce91f8161.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/reiz" rel="author">reiz</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-05-28T07:12:56-07:00" title="2013-05-28 07:12:56">May 28, 2013</time>
    <div class="commit-title">
        <a href="/versioneye/dependency_wheel/commit/9cb76d23b9880b10a9a8140fc1ea390401c508d5" class="message" data-pjax="true" title="remove white spaces and add link to github page.">remove white spaces and add link to github page.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Robert Reiz" height="24" src="https://1.gravatar.com/avatar/11c3ac04d669661020cf80a822cd9620?d=https%3A%2F%2Fidenticons.github.com%2F001946c78373a160c3c4ba0ce91f8161.png&amp;r=x&amp;s=140" width="24" />
            <a href="/reiz">reiz</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
          <span>606 lines (489 sloc)</span>
        <span>20.452 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped leftwards" href="#"
                 title="You must be signed in to make or propose changes">Edit</a>
          <a href="/versioneye/dependency_wheel/raw/master/dependencywheel.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/versioneye/dependency_wheel/blame/master/dependencywheel.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/versioneye/dependency_wheel/commits/master/dependencywheel.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped leftwards" href="#"
             title="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">    Class: DependencyWheel</span></div><div class='line' id='LC3'><span class="cm">    Version: 0.1</span></div><div class='line' id='LC4'><span class="cm">    License: MIT</span></div><div class='line' id='LC5'><span class="cm">    Author: Robert Reiz (VersionEye GmbH)</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="cm">    This is a fork from the MooWheel Class version 0.2 from unwieldy studios.</span></div><div class='line' id='LC8'><span class="cm">    Written by Augusto Becciu (http://www.tweetwheel.com)</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">    This fork is customized to visualize dependencies for software libraries.</span></div><div class='line' id='LC11'><span class="cm">    It is used on https://www.versioneye.com</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="cm">    You will find source code and documentation on GitHub:</span></div><div class='line' id='LC14'><span class="cm">    https://github.com/versioneye/dependency_wheel</span></div><div class='line' id='LC15'><span class="cm">*/</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="kd">var</span> <span class="nx">DependencyWheel</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Class</span><span class="p">({</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;default&#39;</span><span class="p">,</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">center</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span><span class="o">:</span> <span class="mi">100</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lines</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;random&#39;</span><span class="p">,</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lineWidth</span><span class="o">:</span> <span class="mi">2</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imageSize</span><span class="o">:</span> <span class="p">[</span><span class="mi">24</span><span class="p">,</span><span class="mi">24</span><span class="p">],</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">radialMultiplier</span><span class="o">:</span> <span class="mf">3.47</span><span class="p">,</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hover</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hoverLines</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;rgba(255,255,255,255)&#39;</span><span class="p">,</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lineWidth</span><span class="o">:</span> <span class="mi">6</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onItemClick</span><span class="o">:</span> <span class="nx">$empty</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">infoBox</span><span class="o">:</span> <span class="s1">&#39;mooinfo&#39;</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">infoNumber</span><span class="o">:</span> <span class="s1">&#39;moonumber&#39;</span><span class="p">,</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="o">:</span> <span class="s2">&quot;compile&quot;</span><span class="p">,</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data_border</span><span class="o">:</span> <span class="mi">70</span><span class="p">,</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">canvas_id</span><span class="o">:</span> <span class="s1">&#39;canvas&#39;</span><span class="p">,</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">canvas_hover_id</span><span class="o">:</span> <span class="s1">&#39;canvas_hover&#39;</span><span class="p">,</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">show_label</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resize</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resize_ids</span><span class="o">:</span> <span class="s2">&quot;container,section&quot;</span><span class="p">,</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resize_factor</span><span class="o">:</span> <span class="mi">11</span><span class="p">,</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container_id</span><span class="o">:</span> <span class="s2">&quot;canvas-container&quot;</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">ct</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data_length</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">radialMultiplier</span> <span class="o">*</span> <span class="nx">data_length</span><span class="p">);</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data_length</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">){</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="s2">&quot;77&quot;</span><span class="p">;</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="s2">&quot;77&quot;</span><span class="p">;</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">show_label</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">show_label</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">border</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">data_border</span><span class="p">;</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data_length</span> <span class="o">&gt;</span> <span class="nx">border</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resize</span> <span class="o">==</span> <span class="kc">false</span> <span class="p">){</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">show_info_box</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// calculate canvas height/width if necessary</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hw</span><span class="p">;</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">height</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hw</span> <span class="o">=</span> <span class="mi">2</span> <span class="o">*</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">+</span> <span class="p">(</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">))</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">imageSize</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span> <span class="mi">12</span><span class="p">;</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ct</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ct</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ct</span><span class="p">);</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">canvas</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s1">&#39;canvas&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span>  <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">:</span> <span class="nx">hw</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">:</span> <span class="nx">hw</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">canvas_id</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ct</span><span class="p">.</span><span class="nx">adopt</span><span class="p">(</span><span class="nx">canvas</span><span class="p">);</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="p">(</span><span class="nx">G_vmlCanvasManager</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">canvas</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">G_vmlCanvasManager</span><span class="p">.</span><span class="nx">initElement</span><span class="p">(</span><span class="nx">canvas</span><span class="p">));</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">canvas</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">;</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxCount</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">canvasPos</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">getCoordinates</span><span class="p">();</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span> <span class="o">=</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span><span class="p">};</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CanvasTextFunctions</span><span class="p">.</span><span class="nx">enable</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">);</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data_length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">){</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="s2">&quot;green&quot;</span><span class="p">;</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">font</span> <span class="o">=</span> <span class="s2">&quot;42px Arial&quot;</span><span class="p">;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">fillText</span><span class="p">(</span><span class="s2">&quot;0&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">45</span><span class="p">);</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">show_info_box</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">hover</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Element</span><span class="p">(</span><span class="s1">&#39;canvas&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;styles&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span><span class="o">:</span> <span class="s1">&#39;absolute&#39;</span><span class="p">,</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">left</span><span class="o">:</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">top</span><span class="o">:</span>  <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">zIndex</span><span class="o">:</span> <span class="mi">9</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">canvas_hover_id</span><span class="p">,</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">injectAfter</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">);</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s1">&#39;resize&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">canvasPos</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">getCoordinates</span><span class="p">();</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">setStyles</span><span class="p">({</span><span class="nx">left</span><span class="o">:</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span> <span class="nx">top</span><span class="o">:</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">canvasPos</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">G_vmlCanvasManager</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">G_vmlCanvasManager</span><span class="p">.</span><span class="nx">initElement</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">));</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span><span class="p">[</span><span class="s1">&#39;connections&#39;</span><span class="p">].</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">subitem</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$type</span><span class="p">(</span><span class="nx">subitem</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;array&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">subitem</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxCount</span><span class="p">)</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxCount</span> <span class="o">=</span> <span class="nx">subitem</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">draw</span><span class="p">();</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;<span class="c1">// define each point on the wheel, including it&#39;s position and color</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;<span class="nx">setPoints</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">points</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bboxes</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">numDegrees</span> <span class="o">=</span> <span class="p">(</span><span class="mi">360</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">numDegrees</span><span class="p">,</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;colors&#39;</span><span class="p">])</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">color</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">lines</span><span class="p">.</span><span class="nx">color</span> <span class="o">==</span> <span class="s1">&#39;random&#39;</span><span class="p">){</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">p1</span> <span class="o">=</span> <span class="mi">100</span><span class="p">;</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">p2</span> <span class="o">=</span> <span class="mi">100</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">color</span><span class="p">[</span><span class="s1">&#39;__default&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;rgba(&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="nx">p1</span><span class="p">)</span> <span class="o">+</span> <span class="nx">p2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="nx">p1</span><span class="p">)</span> <span class="o">+</span> <span class="nx">p2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;,&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="nx">p1</span><span class="p">)</span> <span class="o">+</span> <span class="nx">p2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;, 1)&quot;</span><span class="p">;</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span><span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">color</span><span class="p">[</span><span class="s1">&#39;__default&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">lines</span><span class="p">.</span><span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;colors&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;<span class="nx">pc</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">x</span><span class="o">/</span><span class="mi">7</span><span class="p">)</span> <span class="o">*</span> <span class="mi">7</span><span class="p">;</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;<span class="c1">// calculate the bounding box of particular text</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;<span class="nx">calcbbox</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">px</span><span class="p">,</span> <span class="nx">py</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">px</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">px</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">py</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">py</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// calculate hover bounding box</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xc</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">yc</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">m0</span> <span class="o">=</span> <span class="p">(</span><span class="nx">py</span> <span class="o">-</span> <span class="nx">yc</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="nx">px</span> <span class="o">-</span> <span class="nx">xc</span><span class="p">);</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pr3</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span><span class="o">:</span> <span class="nx">px</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">((</span><span class="nx">i</span><span class="o">+</span><span class="mi">90</span><span class="p">)</span><span class="o">*</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="o">/</span><span class="mi">180</span><span class="p">))</span><span class="o">*</span><span class="mi">5</span><span class="p">,</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span><span class="o">:</span> <span class="nx">py</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">((</span><span class="nx">i</span><span class="o">+</span><span class="mi">90</span><span class="p">)</span><span class="o">*</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="o">/</span><span class="mi">180</span><span class="p">))</span><span class="o">*</span><span class="mi">5</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b3</span> <span class="o">=</span> <span class="nx">pr3</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">m0</span> <span class="o">*</span> <span class="nx">pr3</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dr3</span><span class="p">;</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">m0</span> <span class="o">==</span> <span class="kc">Infinity</span> <span class="o">||</span> <span class="nx">m0</span> <span class="o">==</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">)</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dr3</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">((</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">pr3</span><span class="p">.</span><span class="nx">x</span><span class="p">));</span> <span class="p">};</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dr3</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">m0</span> <span class="o">*</span> <span class="nx">x</span> <span class="o">-</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">b3</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">m0</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">txtlen</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">measureText</span><span class="p">(</span><span class="s1">&#39;sans&#39;</span><span class="p">,</span><span class="s1">&#39;10&#39;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;text&#39;</span><span class="p">]);</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">txtlen</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">txtlen</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pr4</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span><span class="o">:</span> <span class="nx">px</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">((</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">90</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="mi">5</span><span class="p">,</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span><span class="o">:</span> <span class="nx">py</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">((</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">90</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="mi">5</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b4</span> <span class="o">=</span> <span class="nx">pr4</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">m0</span><span class="o">*</span><span class="nx">pr4</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dr4</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">m0</span> <span class="o">==</span> <span class="kc">Infinity</span> <span class="o">||</span> <span class="nx">m0</span> <span class="o">==</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">)</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dr4</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">((</span><span class="nx">x</span><span class="o">-</span><span class="nx">pr4</span><span class="p">.</span><span class="nx">x</span><span class="p">));</span> <span class="p">};</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dr4</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">m0</span><span class="o">*</span><span class="nx">x</span><span class="o">-</span><span class="nx">y</span><span class="o">+</span><span class="nx">b4</span><span class="p">)</span><span class="o">/</span><span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">m0</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bboxes</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">x</span><span class="o">-</span><span class="nx">px</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">90</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">x</span><span class="o">-</span><span class="nx">px</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">y</span><span class="o">-</span><span class="nx">py</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="mi">90</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">y</span><span class="o">-</span><span class="nx">py</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">90</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">180</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">x</span><span class="o">-</span><span class="nx">px</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">y</span><span class="o">-</span><span class="nx">py</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="mi">180</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">x</span><span class="o">-</span><span class="nx">px</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">180</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">270</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">x</span><span class="o">-</span><span class="nx">px</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">y</span><span class="o">-</span><span class="nx">py</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="mi">270</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">y</span><span class="o">-</span><span class="nx">py</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">270</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">360</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">x</span><span class="o">-</span><span class="nx">px</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">y</span><span class="o">-</span><span class="nx">py</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">d</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">((</span><span class="nx">x</span><span class="o">-</span><span class="nx">px</span><span class="p">),</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">((</span><span class="nx">y</span><span class="o">-</span><span class="nx">py</span><span class="p">),</span><span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">d3</span> <span class="o">=</span> <span class="nx">dr3</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">),</span> <span class="nx">d4</span> <span class="o">=</span> <span class="nx">dr4</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">d</span> <span class="o">&lt;=</span> <span class="p">(</span><span class="nx">txtlen</span><span class="o">+</span><span class="mi">8</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">d3</span> <span class="o">&lt;=</span> <span class="mi">10</span> <span class="o">&amp;&amp;</span> <span class="nx">d4</span> <span class="o">&lt;=</span> <span class="mi">10</span><span class="p">)</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;<span class="c1">// draw the points onto the canvas</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;<span class="nx">drawPoints</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">numDegrees</span><span class="p">,</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">beginPath</span><span class="p">();</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">strokeStyle</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;colors&#39;</span><span class="p">][</span><span class="s1">&#39;__default&#39;</span><span class="p">];</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// solve for the dot location on the large circle</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">i</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">i</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// draw the colored dot</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">arc</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">fill</span><span class="p">();</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">closePath</span><span class="p">();</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">calcbbox</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">);</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">points</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">pc</span><span class="p">(</span><span class="nx">x</span><span class="p">)])</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">points</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">pc</span><span class="p">(</span><span class="nx">x</span><span class="p">)]</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">points</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">pc</span><span class="p">(</span><span class="nx">x</span><span class="p">)][</span><span class="k">this</span><span class="p">.</span><span class="nx">pc</span><span class="p">(</span><span class="nx">y</span><span class="p">)]</span> <span class="o">=</span> <span class="nx">j</span><span class="p">;</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// draw the text</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">translate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">rotate</span><span class="p">((</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">90</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">270</span> <span class="o">?</span> <span class="nx">i</span><span class="o">-</span><span class="mi">180</span> <span class="o">:</span> <span class="nx">i</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">));</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">txtSlice</span><span class="p">,</span> <span class="nx">imgSlice</span><span class="p">;</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">90</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">270</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">txtSlice</span> <span class="o">=</span> <span class="o">-</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">measureText</span><span class="p">(</span><span class="s1">&#39;sans&#39;</span><span class="p">,</span><span class="s1">&#39;10&#39;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;text&#39;</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="mi">8</span><span class="p">);</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imgSlice</span> <span class="o">=</span> <span class="nx">txtSlice</span> <span class="o">-</span> <span class="mi">30</span><span class="p">;</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">txtSlice</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">+</span> <span class="mi">8</span><span class="p">;</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imgSlice</span> <span class="o">=</span> <span class="nx">txtSlice</span><span class="o">+</span><span class="mi">6</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">measureText</span><span class="p">(</span><span class="s1">&#39;sans&#39;</span><span class="p">,</span><span class="s1">&#39;10&#39;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;text&#39;</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">drawText</span><span class="p">(</span><span class="s1">&#39;sans&#39;</span><span class="p">,</span><span class="s1">&#39;10&#39;</span><span class="p">,</span> <span class="nx">txtSlice</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">fontAscent</span><span class="p">(</span><span class="s1">&#39;sans&#39;</span><span class="p">,</span><span class="s1">&#39;10&#39;</span><span class="p">)</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;text&#39;</span><span class="p">]);</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;image&#39;</span><span class="p">])</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;image&#39;</span><span class="p">]),</span> <span class="nx">imgSlice</span><span class="p">,</span> <span class="o">-</span><span class="mi">12</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">imageSize</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">imageSize</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">.</span><span class="nx">restore</span><span class="p">();</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;<span class="c1">// calculate a radian angle</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;<span class="nx">getAngle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">idx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">idx</span> <span class="o">*</span> <span class="p">(</span><span class="mi">360</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;<span class="nx">getItemIdxById</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">$type</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;array&#39;</span><span class="p">)</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">id</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="s1">&#39;id&#39;</span><span class="p">]</span> <span class="o">==</span> <span class="nx">id</span><span class="p">)</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;<span class="c1">// draw the connection lines for a particular item</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;<span class="nx">drawConnection</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">hover</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hover</span><span class="p">){</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// BugFix for overlay bug in Safari &amp; Chrome</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">canvas_hover_id</span><span class="p">).</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">canvas_id</span><span class="p">).</span><span class="nx">getCoordinates</span><span class="p">().</span><span class="nx">top</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cx</span> <span class="o">=</span> <span class="nx">hover</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">cx</span><span class="p">;</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">connections</span> <span class="o">=</span> <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;connections&#39;</span><span class="p">];</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getAngle</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// solve for the line starting point location on the large circle</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">angle</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">angle</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">lineWidth</span> <span class="o">=</span> <span class="nx">hover</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">hoverLines</span><span class="p">.</span><span class="nx">lineWidth</span> <span class="o">:</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// draw the bezier curve</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// note: the control points of the curve are the radius / 2</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">connections</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">itemIdx</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getItemIdxById</span><span class="p">(</span><span class="nx">connections</span><span class="p">[</span><span class="nx">j</span><span class="p">]);</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">connectionName</span> <span class="o">=</span> <span class="nx">connections</span><span class="p">[</span> <span class="nx">j</span> <span class="p">];</span></div><div class='line' id='LC331'><br/></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isDependency</span> <span class="o">=</span> <span class="o">!!</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="s1">&#39;dependencies&#39;</span> <span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">item</span><span class="p">[</span> <span class="s1">&#39;dependencies&#39;</span> <span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">connectionName</span> <span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC333'><br/></div><div class='line' id='LC334'><span class="c1">//         cx.strokeStyle = hover ? (item[&#39;colors&#39;][connections[j][0]] ? item[&#39;colors&#39;][connections[j][0]] : item[&#39;colors&#39;][&quot;__default&quot;]).replace(/, \d\.?\d+?\)/, &#39;,1)&#39;) :</span></div><div class='line' id='LC335'><span class="c1">//                                  (item[&#39;colors&#39;][connections[j][0]] ? item[&#39;colors&#39;][connections[j][0]] : item[&#39;colors&#39;][&quot;__default&quot;]);</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">beginPath</span><span class="p">();</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">moveTo</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rpos</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getAngle</span><span class="p">(</span><span class="nx">itemIdx</span><span class="p">);</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x2</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">rpos</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y2</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">rpos</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cp1x</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">angle</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">/</span> <span class="mf">1.5</span><span class="p">);</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cp1y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">angle</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">/</span> <span class="mf">1.5</span><span class="p">);</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cp2x</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">rpos</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">/</span> <span class="mf">1.5</span><span class="p">);</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cp2y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">rpos</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">180</span><span class="p">))</span> <span class="o">*</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">/</span> <span class="mf">1.5</span><span class="p">);</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">stopItem</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span> <span class="nx">itemIdx</span> <span class="p">];</span></div><div class='line' id='LC348'><br/></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">strokeStyle</span> <span class="o">=</span> <span class="nx">hover</span> <span class="o">?</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">getStrokeGradient</span><span class="p">(</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">,</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">x1</span><span class="o">:</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y1</span><span class="o">:</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">c1</span><span class="o">:</span> <span class="nx">item</span><span class="p">[</span> <span class="s1">&#39;colors&#39;</span> <span class="p">][</span> <span class="s1">&#39;__default&#39;</span> <span class="p">],</span> <span class="nx">x2</span><span class="o">:</span> <span class="nx">x2</span><span class="p">,</span> <span class="nx">y2</span><span class="o">:</span> <span class="nx">y2</span><span class="p">,</span> <span class="nx">c2</span><span class="o">:</span> <span class="nx">stopItem</span><span class="p">[</span> <span class="s1">&#39;colors&#39;</span> <span class="p">][</span> <span class="s1">&#39;__default&#39;</span> <span class="p">]</span> <span class="p">},</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isDependency</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">item</span><span class="p">[</span><span class="s1">&#39;colors&#39;</span><span class="p">][</span><span class="nx">connections</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">]]</span> <span class="o">?</span> <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;colors&#39;</span><span class="p">][</span><span class="nx">connections</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="mi">0</span><span class="p">]]</span> <span class="o">:</span> <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;colors&#39;</span><span class="p">][</span><span class="s2">&quot;__default&quot;</span><span class="p">]);</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">lineCap</span> <span class="o">=</span> <span class="s1">&#39;round&#39;</span><span class="p">;</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    cx.strokeStyle = this.getStrokeGradient( cx, { x1: x, y1: y, c1: item[ &#39;colors&#39; ][ &#39;__default&#39; ], x2: x2, y2: y2, c2: stopItem[ &#39;colors&#39; ][ &#39;__default&#39; ] } );</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">beginPath</span><span class="p">();</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">moveTo</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'><br/></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">bezierCurveTo</span><span class="p">(</span><span class="nx">cp1x</span><span class="p">,</span> <span class="nx">cp1y</span><span class="p">,</span> <span class="nx">cp2x</span><span class="p">,</span> <span class="nx">cp2y</span><span class="p">,</span> <span class="nx">x2</span><span class="p">,</span> <span class="nx">y2</span><span class="p">);</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">stroke</span><span class="p">();</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">closePath</span><span class="p">();</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC367'><br/></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hover</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">self</span><span class="p">.</span><span class="nx">drawConnection</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span> <span class="p">},</span> <span class="mi">25</span><span class="p">);</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">drawPoints</span><span class="p">();</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">show_label</span><span class="p">){</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="s2">&quot;lightgray&quot;</span><span class="p">;</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">font</span> <span class="o">=</span> <span class="s2">&quot;14px Arial&quot;</span><span class="p">;</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">fillText</span><span class="p">(</span><span class="s2">&quot;www.VersionEye.com&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="mi">70</span><span class="p">,</span> <span class="mi">30</span><span class="p">);</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">show_info_box</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC387'><span class="cm">     * Creates gradient for connection</span></div><div class='line' id='LC388'><span class="cm">     *</span></div><div class='line' id='LC389'><span class="cm">     * @param ctx convas context</span></div><div class='line' id='LC390'><span class="cm">     * @param {Object} connectionRect Configuration of dots to be connected</span></div><div class='line' id='LC391'><span class="cm">     * @param connectionRect.x1 x-coordinate of start point</span></div><div class='line' id='LC392'><span class="cm">     * @param connectionRect.y1 y-coordinate of start point</span></div><div class='line' id='LC393'><span class="cm">     * @param connectionRect.c1 color of start point</span></div><div class='line' id='LC394'><span class="cm">     * @param connectionRect.x2 x-coordinate of end point</span></div><div class='line' id='LC395'><span class="cm">     * @param connectionRect.y2 y-coordinate of end point</span></div><div class='line' id='LC396'><span class="cm">     * @param connectionRect.c2 color of end point</span></div><div class='line' id='LC397'><span class="cm">     * @param {Boolean} isDependency</span></div><div class='line' id='LC398'><span class="cm">     *</span></div><div class='line' id='LC399'><span class="cm">     * @returns {*|CanvasGradient}</span></div><div class='line' id='LC400'><span class="cm">     */</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getStrokeGradient</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">ctx</span><span class="p">,</span> <span class="nx">connectionRect</span><span class="p">,</span> <span class="nx">isDependency</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">grad</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">createLinearGradient</span><span class="p">(</span> <span class="nx">connectionRect</span><span class="p">.</span><span class="nx">x1</span><span class="p">,</span> <span class="nx">connectionRect</span><span class="p">.</span><span class="nx">y1</span><span class="p">,</span> <span class="nx">connectionRect</span><span class="p">.</span><span class="nx">x2</span><span class="p">,</span> <span class="nx">connectionRect</span><span class="p">.</span><span class="nx">y2</span> <span class="p">);</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">isDependency</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">grad</span><span class="p">.</span><span class="nx">addColorStop</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="s1">&#39;rgba(0,0,127,0.5)&#39;</span><span class="p">);</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">grad</span><span class="p">.</span><span class="nx">addColorStop</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;rgba(0,0,127,1)&#39;</span><span class="p">);</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">grad</span><span class="p">.</span><span class="nx">addColorStop</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="s1">&#39;rgba(0,127,0,0.5)&#39;</span> <span class="p">);</span><span class="c1">//connectionRect.c1 );</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">grad</span><span class="p">.</span><span class="nx">addColorStop</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;rgba(0,127,0,1)&#39;</span> <span class="p">);</span><span class="c1">//connectionRect.c2);</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC412'><br/></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">grad</span><span class="p">;</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;<span class="c1">// draw the entire DependencyWheel</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;<span class="nx">draw</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setPoints</span><span class="p">();</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">drawConnection</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC422'><br/></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">hover</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">).</span><span class="nx">addEvent</span><span class="p">(</span><span class="s1">&#39;mousemove&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Event</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC426'><br/></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">).</span><span class="nx">getCoordinates</span><span class="p">();</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// convert page coordinates to canvas coordinates</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mpos</span> <span class="o">=</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">page</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">left</span><span class="p">),</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span><span class="o">:</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">page</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">top</span><span class="p">)};</span></div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">test</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">point</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cpoint</span> <span class="o">=</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">pc</span><span class="p">(</span><span class="nx">point</span><span class="p">.</span><span class="nx">x</span><span class="p">),</span> <span class="nx">y</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">pc</span><span class="p">(</span><span class="nx">point</span><span class="p">.</span><span class="nx">y</span><span class="p">)};</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$defined</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">points</span><span class="p">[</span><span class="nx">cpoint</span><span class="p">.</span><span class="nx">x</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">$defined</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">points</span><span class="p">[</span><span class="nx">cpoint</span><span class="p">.</span><span class="nx">x</span><span class="p">][</span><span class="nx">cpoint</span><span class="p">.</span><span class="nx">y</span><span class="p">]))</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">points</span><span class="p">[</span><span class="nx">cpoint</span><span class="p">.</span><span class="nx">x</span><span class="p">][</span><span class="nx">cpoint</span><span class="p">.</span><span class="nx">y</span><span class="p">];</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">bboxes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bbox</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">bboxes</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">bbox</span><span class="p">(</span><span class="nx">point</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span><span class="nx">point</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC444'><br/></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC446'><br/></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">conn</span> <span class="o">=</span> <span class="nx">test</span><span class="p">(</span><span class="nx">mpos</span><span class="p">);</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">conn</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">lastMouseOver</span> <span class="o">==</span> <span class="nx">conn</span><span class="p">)</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC453'><br/></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">drawConnection</span><span class="p">(</span><span class="nx">conn</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">lastMouseOver</span> <span class="o">=</span> <span class="nx">conn</span><span class="p">;</span></div><div class='line' id='LC457'><br/></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">(</span><span class="s1">&#39;opacity&#39;</span><span class="p">,</span> <span class="s1">&#39;0.5&#39;</span><span class="p">);</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">(</span><span class="s1">&#39;cursor&#39;</span><span class="p">,</span> <span class="s1">&#39;pointer&#39;</span><span class="p">);</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">$defined</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">lastMouseOver</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cx</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">clearRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">lastMouseOver</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC466'><br/></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">(</span><span class="s1">&#39;opacity&#39;</span><span class="p">,</span> <span class="s1">&#39;1.0&#39;</span><span class="p">);</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">.</span><span class="nx">setStyle</span><span class="p">(</span><span class="s1">&#39;cursor&#39;</span><span class="p">,</span> <span class="s1">&#39;default&#39;</span><span class="p">);</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC471'><br/></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hoverCanvas</span><span class="p">).</span><span class="nx">addEvent</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if (!this.lastMouseOver) return false;</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//this.options.onItemClick(this.data[this.lastMouseOver], e);</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC478'><br/></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;<span class="c1">// get the brightness/color of a particular line when heat/cold maps are used</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;<span class="nx">getTemperature</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;heat&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="p">{</span><span class="nx">r</span><span class="o">:</span> <span class="nx">percent</span> <span class="o">/</span> <span class="mf">0.33</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">-</span> <span class="mf">0.33</span><span class="p">)</span> <span class="o">/</span> <span class="mf">0.33</span><span class="p">,</span> <span class="nx">w</span><span class="o">:</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">-</span> <span class="mf">0.66</span><span class="p">)</span> <span class="o">/</span> <span class="mf">0.66</span><span class="p">};</span></div><div class='line' id='LC483'><br/></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">r</span> <span class="o">*</span> <span class="mi">255</span> <span class="o">&gt;</span> <span class="mi">255</span> <span class="o">?</span> <span class="mi">255</span> <span class="o">:</span> <span class="nx">p</span><span class="p">.</span><span class="nx">r</span> <span class="o">*</span> <span class="mi">255</span><span class="p">);</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">y</span> <span class="o">*</span> <span class="mi">255</span> <span class="o">&gt;</span> <span class="mi">255</span> <span class="o">?</span> <span class="mi">255</span> <span class="o">:</span> <span class="nx">p</span><span class="p">.</span><span class="nx">y</span> <span class="o">*</span> <span class="mi">255</span><span class="p">);</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">w</span> <span class="o">*</span> <span class="mi">255</span> <span class="o">&gt;</span> <span class="mi">255</span> <span class="o">?</span> <span class="mi">255</span> <span class="o">:</span> <span class="nx">p</span><span class="p">.</span><span class="nx">w</span> <span class="o">*</span> <span class="mi">255</span><span class="p">);</span></div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;rgba(&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">r</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">r</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;,&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">y</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;,&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">w</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">w</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;, &#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">*</span> <span class="mf">0.8</span> <span class="o">+</span> <span class="mf">0.2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">;</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;cold&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">percent</span> <span class="o">*</span> <span class="mi">255</span><span class="p">);</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">g</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="mi">130</span> <span class="o">+</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">*</span> <span class="mi">125</span><span class="p">));</span></div><div class='line' id='LC492'><br/></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;rgba(&#39;</span> <span class="o">+</span> <span class="nx">r</span> <span class="o">+</span> <span class="s1">&#39;,&#39;</span> <span class="o">+</span> <span class="nx">g</span> <span class="o">+</span> <span class="s1">&#39;,255, &#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">*</span> <span class="mf">0.8</span> <span class="o">+</span> <span class="mf">0.2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">;</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC496'><span class="p">});</span></div><div class='line' id='LC497'><span class="nx">DependencyWheel</span><span class="p">.</span><span class="nx">implement</span><span class="p">(</span><span class="k">new</span> <span class="nx">Options</span><span class="p">);</span></div><div class='line' id='LC498'><br/></div><div class='line' id='LC499'><span class="c1">// helper class for AJAX/JSON-based wheel information retrieval</span></div><div class='line' id='LC500'><span class="nx">DependencyWheel</span><span class="p">.</span><span class="nx">Remote</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Class</span><span class="p">({</span></div><div class='line' id='LC501'><br/></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Extends</span><span class="o">:</span> <span class="nx">DependencyWheel</span><span class="p">,</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">ct</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">preloadImages</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wheelData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">imageUrls</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">map</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">wheelData</span><span class="p">){</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC511'><br/></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">border</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data_border</span><span class="p">;</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">wheelData</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">border</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">resize</span> <span class="o">==</span> <span class="kc">true</span><span class="p">){</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">wheelData</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="nx">options</span><span class="p">.</span><span class="nx">resize_factor</span><span class="p">;</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">wheelData</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="nx">options</span><span class="p">.</span><span class="nx">resize_factor</span><span class="p">;</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element_ids</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">resize_ids</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">);</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">element_count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">element_count</span> <span class="o">&lt;</span> <span class="nx">element_ids</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">element_count</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">element_ids</span><span class="p">[</span><span class="nx">element_count</span><span class="p">]);</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">new_width</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="p">(</span><span class="nx">element_count</span> <span class="o">*</span> <span class="mi">20</span><span class="p">);</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">offsetWidth</span> <span class="o">&lt;</span> <span class="nx">new_width</span><span class="p">){</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">new_width</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC525'><br/></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">wheelData</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">wheelData</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="s1">&#39;imageUrl&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imageUrls</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">wheelData</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="s1">&#39;imageUrl&#39;</span><span class="p">]);</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">map</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">imageUrls</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">imageUrls</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC535'><br/></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">images</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Asset</span><span class="p">.</span><span class="nx">images</span><span class="p">(</span><span class="nx">imageUrls</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onComplete</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="k">in</span> <span class="nx">map</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wheelData</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="s1">&#39;image&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">map</span><span class="p">[</span><span class="nx">j</span><span class="p">]];</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC541'><br/></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// hack to make this.parent work within callback</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">_parent_</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">_parent_</span><span class="p">;</span></div><div class='line' id='LC544'><br/></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">wheelData</span><span class="p">,</span> <span class="nx">ct</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get token and param from the meta tags</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// var token = jQuery(&#39;meta[name=&quot;csrf-token&quot;]&#39;).attr(&#39;content&#39;);</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// var param = jQuery(&#39;meta[name=&quot;csrf-param&quot;]&#39;).attr(&#39;content&#39;);</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">json_url</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span> <span class="c1">// + &quot;?_method=POST&amp;&quot; + param + &quot;=&quot; + token;</span></div><div class='line' id='LC558'><br/></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Request</span><span class="p">.</span><span class="nx">JSON</span><span class="p">({</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">json_url</span><span class="p">,</span></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onComplete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wheelData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">wheelData</span><span class="p">;</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// hack to make this.parent work within callback</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">_parent_</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">_parent_</span><span class="p">;</span></div><div class='line' id='LC566'><br/></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">preloadImages</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">ct</span><span class="p">,</span> <span class="nx">options</span><span class="p">))</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">ct</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">preloadImages</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">ct</span><span class="p">,</span> <span class="nx">options</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">ct</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC576'><span class="p">});</span></div><div class='line' id='LC577'><br/></div><div class='line' id='LC578'><span class="kd">function</span> <span class="nx">show_info_box</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC579'>&nbsp;&nbsp;<span class="nx">box_name</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">infoBox</span><span class="p">;</span></div><div class='line' id='LC580'>&nbsp;&nbsp;<span class="nx">number_name</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">infoNumber</span><span class="p">;</span></div><div class='line' id='LC581'>&nbsp;&nbsp;<span class="nx">recursive_deps</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC582'>&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">data_length</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC583'><br/></div><div class='line' id='LC584'>&nbsp;&nbsp;<span class="nx">info_box</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">box_name</span><span class="p">);</span></div><div class='line' id='LC585'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">info_box</span><span class="p">){</span></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">info_box</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="s2">&quot;inline-block&quot;</span><span class="p">;</span></div><div class='line' id='LC587'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'>&nbsp;&nbsp;<span class="nx">info_number</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">number_name</span><span class="p">);</span></div><div class='line' id='LC590'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">info_number</span><span class="p">){</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">info_number</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">recursive_deps</span><span class="p">;</span></div><div class='line' id='LC592'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'>&nbsp;&nbsp;<span class="nx">scope_name</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;scope_name&quot;</span><span class="p">);</span></div><div class='line' id='LC595'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">scope_name</span><span class="p">){</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scope</span> <span class="o">==</span> <span class="s2">&quot;all&quot;</span><span class="p">){</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope_name</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope_name</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">scope</span><span class="p">;</span></div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC601'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC602'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">handle_path</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">){</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handle_path</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC604'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC605'><span class="p">}</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
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
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.10394s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/versioneye/dependency_wheel/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

