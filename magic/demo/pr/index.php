<?php

    //Get the url
    $url = $_GET['demo_url'];

    $parsed_url = parse_url($url);

    //Get the html of url
    function get_data($url) 
    { 
       $ch = curl_init();
       $timeout = 5;
       //$userAgent = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US)AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.X.Y.Z Safari/525.13.";
       $userAgent = "IE 7 – Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)";
      curl_setopt($ch, CURLOPT_USERAGENT, $userAgent);
      curl_setopt($ch, CURLOPT_FAILONERROR, true);
      curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
      curl_setopt($ch, CURLOPT_AUTOREFERER, true);
      curl_setopt($ch, CURLOPT_TIMEOUT, 10);
      curl_setopt($ch, CURLOPT_URL,$url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
      curl_setopt($ch, CURLOPT_CONNECTTIMEOUT,$timeout);
      $data = curl_exec($ch);
      curl_close($ch);
#      echo $data
#      $data = preg_replace('/\/head>/i','<script id="shoppable_magic_v0-1" options=\'"titleColor":"red", "subtitleColor":"blue", "bodyColor":"", "subTextColor":"" , "bgColor":"", "bgOpacity":"", "pdpBgColor":"", "btnColor":"", "btnTextColor":"", "token":"FbSD6nUL4KRy6LCJ655e9c04ce5077d9"\' src="http://int.magic.shoppable.co/assets/application.js"><\/head>',$data);
      return $data;
    }

    $html = file_get_contents($url);
    $html2 = preg_replace('/<\/head>/','<base href="http://' . $parsed_url['host'] . '"><script id="shoppable_magic_v0-1" options=\'"titleColor":"red", "subtitleColor":"blue", "bodyColor":"", "subTextColor":"" , "bgColor":"", "bgOpacity":"", "pdpBgColor":"", "btnColor":"", "btnTextColor":"", "token":"UT8x212GWF3B0QRE2c4d9cf50bf489f6"\' src="http://int.magic.shoppable.co/assets/application.js"></script></head>',$html);
#     $html2 = preg_replace('/<\/head>/','<script id="shoppable_magic_v0-1" options=\'"titleColor":"red", "subtitleColor":"blue", "bodyColor":"", "subTextColor":"" , "bgColor":"", "bgOpacity":"", "pdpBgColor":"", "btnColor":"", "btnTextColor":"", "token":"FbSD6nUL4KRy6LCJ655e9c04ce5077d9"\' src="http://int.magic.shoppable.co/assets/application.js">   	</head>',$html);

    echo $html2;

?>