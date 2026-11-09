/* Movement for the landing page, with no libraries. All of it is decoration: without it the page still reads whole. */
(function () {
  var still = matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window);

  /* ---- The lap in the hero: the real Baltar track from the sample session, as normalised coordinates ---- */
  var TRACK = {w:1000,h:678,p:[[751.8,278.0,0.0015,18.7],[734.0,261.2,0.0058,19.2],[709.5,238.1,0.0101,19.7],[691.1,220.8,0.0144,20.2],[686.7,216.6,0.0148,20.2],[688.3,218.2,0.0152,20.2],[685.4,215.5,0.0156,20.2],[672.1,202.9,0.0187,20.5],[654.3,186.1,0.0218,20.7],[639.1,171.7,0.0249,21.0],[630.8,163.9,0.0265,20.6],[625.0,158.6,0.028,20.3],[615.5,150.6,0.0296,20.0],[597.3,135.7,0.0335,19.1],[575.3,118.1,0.0374,18.2],[559.1,105.1,0.0413,17.3],[555.4,102.0,0.0416,17.1],[557.3,103.4,0.042,16.9],[554.1,101.0,0.0424,16.8],[538.9,89.1,0.0467,15.6],[518.7,73.3,0.051,14.5],[503.5,61.5,0.0553,13.4],[500.2,58.4,0.0557,13.4],[502.0,59.4,0.0561,13.3],[499.1,58.8,0.0564,13.3],[485.1,53.6,0.0607,12.4],[466.4,46.8,0.065,11.5],[452.5,41.8,0.0693,10.5],[448.1,40.4,0.0697,10.4],[448.5,40.8,0.0701,10.3],[448.6,41.3,0.0705,10.2],[447.4,40.6,0.0712,9.9],[445.8,39.9,0.072,9.6],[441.3,40.8,0.0728,9.3],[431.1,44.1,0.0767,9.5],[418.0,49.0,0.0806,9.8],[407.1,54.7,0.0845,10.1],[400.5,61.3,0.0872,9.9],[396.2,68.7,0.0899,9.8],[393.2,76.7,0.0927,9.7],[391.6,85.7,0.0954,9.8],[391.3,95.1,0.0981,10.0],[391.8,103.6,0.1008,10.2],[393.2,110.5,0.1028,10.0],[395.3,116.4,0.1047,9.8],[397.6,121.8,0.1067,9.5],[399.3,126.1,0.1082,9.6],[401.1,129.9,0.1098,9.7],[405.3,135.0,0.1114,9.8],[413.5,143.3,0.1153,10.0],[424.1,152.9,0.1192,10.2],[434.4,160.6,0.123,10.3],[443.6,165.1,0.1258,10.3],[452.6,167.6,0.1285,10.2],[460.8,169.1,0.1312,10.1],[468.2,169.6,0.1332,10.3],[474.8,169.1,0.1351,10.6],[481.2,168.5,0.1371,10.8],[486.7,167.8,0.1386,11.0],[492.0,167.1,0.1402,11.2],[498.4,166.7,0.1417,11.5],[507.9,166.9,0.1445,11.0],[518.7,167.5,0.1472,10.5],[527.1,168.2,0.1499,10.0],[531.1,168.5,0.1507,10.0],[532.8,168.9,0.1515,10.0],[534.7,169.4,0.1523,9.9],[537.3,169.6,0.1534,9.4],[540.0,169.9,0.1546,8.9],[544.3,172.7,0.1558,8.4],[551.8,180.1,0.1597,8.7],[560.7,189.9,0.1636,9.0],[567.3,197.3,0.1674,9.3],[569.5,198.9,0.1678,9.4],[569.3,198.0,0.1682,9.4],[568.7,200.7,0.1686,9.5],[569.0,210.5,0.1725,9.5],[568.8,223.8,0.1764,9.4],[565.8,236.0,0.1803,9.4],[557.5,246.0,0.1842,9.6],[546.5,254.9,0.1881,9.9],[538.1,261.2,0.192,10.2],[536.6,263.4,0.1924,10.4],[537.8,262.8,0.1928,10.5],[534.2,262.9,0.1931,10.6],[520.3,265.0,0.1974,11.0],[501.6,267.6,0.2017,11.4],[487.6,269.5,0.206,11.7],[484.5,270.2,0.2064,11.7],[486.2,270.1,0.2068,11.7],[483.1,268.9,0.2072,11.7],[469.0,265.8,0.2111,12.1],[450.2,261.6,0.215,12.6],[435.5,258.3,0.2189,13.0],[431.0,257.2,0.2196,13.1],[430.6,257.0,0.2204,13.2],[425.4,256.4,0.2212,13.2],[409.0,254.7,0.2251,13.6],[387.8,252.7,0.229,13.9],[372.0,251.2,0.2329,14.3],[368.7,250.5,0.2333,14.3],[370.8,250.4,0.2337,14.3],[366.5,251.2,0.234,14.3],[347.7,253.6,0.2383,14.7],[322.5,256.8,0.2426,15.1],[303.0,259.5,0.2469,15.6],[296.2,260.5,0.2477,15.4],[295.2,260.9,0.2485,15.3],[291.6,262.2,0.2492,15.2],[281.6,265.2,0.2516,15.5],[269.1,269.1,0.2539,15.9],[256.4,272.9,0.2562,16.2],[244.8,276.2,0.2586,16.2],[232.9,279.4,0.2609,16.2],[220.3,283.0,0.2633,16.2],[205.4,287.4,0.266,16.5],[189.6,292.0,0.2687,16.8],[176.6,295.9,0.2714,17.2],[170.0,297.6,0.2726,17.2],[166.1,298.5,0.2738,17.2],[157.5,301.2,0.2749,17.2],[138.4,308.1,0.2792,16.1],[114.6,316.9,0.2835,15.0],[97.1,323.5,0.2878,13.9],[92.3,325.0,0.2882,13.8],[93.8,324.3,0.2886,13.7],[92.4,325.9,0.289,13.6],[83.7,331.9,0.2921,13.0],[72.2,340.2,0.2952,12.4],[62.2,349.1,0.2983,11.9],[55.3,357.9,0.301,12.1],[50.0,367.3,0.3038,12.2],[45.9,377.2,0.3065,12.4],[43.3,388.8,0.3092,12.3],[41.9,400.9,0.3119,12.1],[41.1,409.8,0.3147,11.9],[40.3,411.9,0.3151,11.9],[40.0,410.9,0.3154,11.8],[41.5,414.3,0.3158,11.7],[46.3,427.5,0.3197,12.1],[52.8,445.0,0.3236,12.5],[58.2,458.5,0.3275,12.9],[59.6,462.7,0.3283,12.9],[59.8,462.9,0.3291,12.9],[64.1,466.6,0.3299,12.9],[75.5,477.9,0.3341,13.3],[91.1,492.8,0.3384,13.8],[106.1,506.2,0.3427,14.2],[119.8,516.5,0.3458,14.5],[133.1,525.3,0.3489,14.8],[143.8,532.2,0.3521,15.1],[150.6,536.6,0.3532,14.7],[154.8,539.1,0.3544,14.4],[157.9,541.0,0.3556,14.1],[158.7,541.6,0.3559,14.0],[158.4,541.5,0.3563,13.9],[162.6,543.7,0.3567,13.9],[176.2,550.8,0.361,12.8],[194.2,560.3,0.3653,11.8],[207.6,567.3,0.3696,10.8],[210.6,569.4,0.37,10.6],[209.1,569.1,0.3704,10.5],[211.3,568.9,0.3707,10.4],[222.3,570.4,0.375,9.4],[237.0,572.1,0.3793,8.5],[249.1,572.6,0.3836,7.6],[255.7,570.9,0.3855,7.8],[259.7,567.9,0.3875,7.9],[262.6,565.3,0.3894,8.1],[264.6,564.2,0.3902,7.8],[265.5,563.4,0.391,7.5],[266.7,561.3,0.3918,7.1],[269.1,557.1,0.3941,7.4],[271.9,551.6,0.3965,7.6],[274.1,546.0,0.3988,7.8],[275.2,540.9,0.4007,8.1],[275.8,535.7,0.4027,8.4],[275.8,530.1,0.4046,8.6],[275.6,524.3,0.407,8.6],[274.8,518.2,0.4093,8.5],[272.6,511.4,0.4116,8.4],[267.8,502.8,0.4151,8.7],[261.5,493.4,0.4187,9.0],[255.7,486.0,0.4222,9.3],[251.9,482.0,0.4237,9.2],[248.8,480.0,0.4253,9.2],[244.1,477.9,0.4268,9.2],[236.3,474.8,0.4296,9.6],[227.0,471.7,0.4323,10.1],[218.8,469.0,0.435,10.6],[213.7,467.7,0.4366,10.2],[209.7,466.9,0.4381,9.8],[204.3,464.8,0.4397,9.4],[195.3,459.8,0.4436,8.8],[184.8,453.4,0.4475,8.1],[177.1,448.7,0.4514,7.5],[174.8,447.5,0.4518,7.4],[175.4,447.8,0.4521,7.4],[175.2,446.6,0.4525,7.3],[172.9,442.0,0.4553,7.0],[169.9,435.8,0.458,6.8],[167.8,430.0,0.4607,6.5],[166.8,425.9,0.4627,6.7],[166.7,422.1,0.4646,6.9],[168.7,416.8,0.4666,7.1],[174.5,407.7,0.4708,7.7],[182.4,397.0,0.4751,8.3],[188.5,389.1,0.4794,9.0],[189.5,386.9,0.4798,8.9],[188.6,387.6,0.4802,8.9],[191.2,387.0,0.4806,8.9],[201.2,383.2,0.4845,9.3],[214.8,378.3,0.4884,9.6],[225.8,374.6,0.4923,9.9],[231.2,373.4,0.4934,10.0],[234.1,373.5,0.4946,10.0],[237.6,373.8,0.4958,10.0],[242.1,374.2,0.4973,10.3],[247.2,374.7,0.4989,10.5],[254.0,374.8,0.5004,10.8],[263.5,374.3,0.5036,10.6],[274.7,373.4,0.5067,10.4],[286.0,370.9,0.5098,10.2],[297.3,365.9,0.5133,10.5],[308.7,359.3,0.5168,10.8],[318.4,353.1,0.5203,11.2],[325.0,348.0,0.5223,11.5],[329.9,343.3,0.5242,11.8],[335.9,338.6,0.5261,12.1],[345.0,333.4,0.5289,11.7],[355.2,328.2,0.5316,11.2],[363.3,324.3,0.5343,10.8],[366.2,322.5,0.5351,10.9],[367.0,321.9,0.5359,11.1],[371.7,321.3,0.5367,11.2],[384.9,319.8,0.5402,11.8],[402.0,318.2,0.5437,12.4],[414.8,317.2,0.5472,12.9],[417.5,316.8,0.5476,13.0],[415.9,316.9,0.548,13.1],[419.9,317.6,0.5483,13.2],[436.1,319.2,0.5522,13.7],[457.7,321.4,0.5561,14.3],[474.6,322.9,0.56,14.8],[480.3,323.5,0.5608,14.7],[481.2,323.5,0.5616,14.6],[485.9,322.6,0.5624,14.5],[499.3,320.9,0.5659,13.8],[516.5,318.3,0.5694,13.1],[532.0,314.8,0.5729,12.5],[543.7,309.8,0.5756,12.8],[553.6,303.8,0.5783,13.1],[562.9,298.0,0.5811,13.4],[572.1,292.5,0.5834,12.8],[580.7,287.2,0.5857,12.2],[587.4,283.1,0.5881,11.6],[590.3,281.0,0.5889,11.6],[591.3,280.2,0.5896,11.5],[595.4,279.4,0.5904,11.5],[606.0,277.7,0.5939,10.9],[619.7,276.0,0.5974,10.3],[631.0,275.3,0.6009,9.7],[637.2,276.0,0.6025,9.8],[641.0,277.7,0.604,9.9],[645.2,280.4,0.6056,9.9],[650.9,284.5,0.6079,9.8],[656.9,289.7,0.6103,9.7],[662.0,295.1,0.6126,9.6],[665.5,300.3,0.6146,9.7],[668.0,305.8,0.6165,9.8],[670.2,312.0,0.6185,9.9],[672.3,318.5,0.6208,10.0],[674.0,325.8,0.6231,10.2],[674.4,334.9,0.6255,10.3],[672.7,348.0,0.6297,10.0],[669.6,362.9,0.634,9.7],[666.6,374.8,0.6383,9.4],[663.8,381.3,0.6399,9.6],[661.0,384.9,0.6414,9.8],[658.5,387.6,0.643,10.0],[657.5,389.5,0.6438,9.9],[656.9,390.6,0.6445,9.8],[653.5,393.4,0.6453,9.8],[644.7,399.9,0.6488,10.1],[633.2,408.2,0.6523,10.4],[624.0,414.4,0.6558,10.8],[621.2,416.3,0.6566,10.8],[620.9,416.2,0.6574,10.9],[616.0,417.3,0.6582,10.9],[601.3,421.4,0.6625,11.4],[582.1,426.6,0.6667,11.9],[567.7,430.5,0.671,12.4],[564.6,431.4,0.6714,12.4],[566.3,431.0,0.6718,12.4],[563.0,431.7,0.6722,12.5],[548.2,434.9,0.6761,12.8],[528.4,439.2,0.68,13.2],[513.5,442.5,0.6839,13.5],[510.3,443.1,0.6843,13.5],[512.1,442.6,0.6847,13.5],[508.4,443.5,0.6851,13.5],[492.6,447.7,0.6889,13.9],[471.4,453.2,0.6928,14.4],[454.9,457.6,0.6967,14.8],[449.7,458.8,0.6975,14.7],[449.3,458.9,0.6983,14.7],[444.1,460.7,0.6991,14.6],[427.5,466.6,0.7034,14.0],[406.1,474.2,0.7076,13.3],[390.3,480.0,0.7119,12.6],[386.4,481.1,0.7123,12.6],[388.0,480.4,0.7127,12.5],[386.1,482.3,0.7131,12.5],[375.4,490.3,0.717,11.8],[361.1,500.9,0.7209,11.1],[350.5,508.9,0.7248,10.4],[347.2,511.5,0.7252,10.4],[347.6,511.5,0.7256,10.4],[347.7,511.8,0.7259,10.4],[346.4,512.4,0.7267,10.2],[345.0,513.4,0.7275,9.9],[342.7,517.7,0.7283,9.7],[338.4,527.5,0.7322,9.9],[333.3,540.6,0.7361,10.1],[330.2,553.9,0.74,10.4],[330.4,566.6,0.7435,10.6],[332.6,579.4,0.747,10.8],[335.8,590.4,0.7505,11.0],[339.8,598.9,0.7528,11.0],[344.7,605.6,0.7552,11.1],[349.8,611.4,0.7575,11.2],[354.2,616.6,0.7594,10.8],[358.8,621.0,0.7614,10.3],[365.0,625.0,0.7633,9.9],[374.4,629.2,0.7664,10.1],[385.5,633.1,0.7696,10.4],[394.9,635.9,0.7727,10.6],[401.3,637.2,0.7742,10.3],[406.0,637.4,0.7758,10.1],[410.3,637.4,0.7774,9.8],[413.7,637.8,0.7785,9.8],[416.6,638.0,0.7797,9.9],[422.0,636.8,0.7809,10.0],[432.4,633.3,0.7844,10.3],[445.3,628.5,0.7879,10.6],[455.8,623.9,0.7914,11.0],[461.2,620.9,0.7929,10.9],[464.3,618.2,0.7945,10.9],[468.7,612.9,0.796,10.9],[476.6,602.4,0.7996,11.5],[485.8,589.3,0.8031,12.1],[492.6,579.5,0.8066,12.8],[493.8,577.6,0.807,12.7],[492.6,578.8,0.8073,12.7],[495.2,575.4,0.8077,12.6],[505.9,561.6,0.812,13.4],[520.3,543.0,0.8163,14.1],[531.2,529.2,0.8206,14.8],[533.3,526.0,0.821,14.8],[531.9,527.4,0.8214,14.8],[535.3,525.1,0.8218,14.8],[549.2,513.7,0.8256,15.4],[568.0,498.5,0.8295,16.0],[582.6,486.8,0.8334,16.6],[587.8,482.7,0.8342,16.6],[588.9,482.0,0.835,16.6],[593.6,480.2,0.8358,16.7],[605.9,474.7,0.8385,16.9],[621.7,467.9,0.8412,17.2],[636.5,462.5,0.844,17.5],[647.5,459.5,0.8459,17.3],[657.4,457.8,0.8478,17.1],[669.2,456.9,0.8498,17.0],[684.8,456.4,0.8529,16.4],[702.2,456.7,0.856,15.9],[718.6,458.3,0.8591,15.4],[732.8,461.3,0.8619,15.4],[745.9,465.7,0.8646,15.4],[758.5,471.3,0.8673,15.4],[771.6,479.5,0.87,15.6],[784.0,489.0,0.8728,15.9],[793.2,496.2,0.8755,16.1],[795.4,497.8,0.8759,16.1],[794.3,497.0,0.8763,16.1],[797.7,500.5,0.8767,16.1],[811.3,513.3,0.881,15.1],[829.5,530.3,0.8852,14.2],[843.0,542.9,0.8895,13.2],[846.2,546.2,0.8899,13.0],[844.8,545.2,0.8903,12.8],[846.8,546.0,0.8907,12.7],[856.8,551.8,0.8942,11.7],[870.1,559.4,0.8977,10.8],[880.5,565.2,0.9012,9.9],[883.8,567.3,0.902,9.9],[884.2,567.5,0.9028,9.8],[888.0,567.0,0.9035,9.8],[900.1,566.0,0.9078,9.5],[915.7,564.3,0.9121,9.2],[927.3,562.8,0.9164,8.9],[930.2,563.2,0.9168,8.9],[929.0,563.9,0.9172,8.9],[930.4,561.3,0.9176,8.9],[938.2,552.3,0.9218,9.3],[948.6,540.1,0.9261,9.8],[956.3,530.4,0.9304,10.2],[958.9,527.2,0.9312,10.2],[958.9,526.5,0.932,10.2],[958.8,523.0,0.9328,10.2],[959.3,513.0,0.9359,10.5],[959.6,500.3,0.939,10.9],[959.5,490.3,0.9421,11.2],[959.9,487.0,0.9429,11.3],[960.0,486.4,0.9437,11.3],[957.2,481.9,0.9444,11.4],[948.9,468.8,0.9487,11.9],[937.7,451.8,0.953,12.4],[929.2,439.2,0.9573,12.9],[927.4,436.2,0.9577,13.0],[928.3,437.5,0.9581,13.1],[925.6,435.6,0.9585,13.2],[914.9,426.1,0.962,13.8],[900.5,413.2,0.9655,14.4],[888.8,402.7,0.969,15.0],[884.2,398.4,0.9701,15.2],[882.3,396.5,0.9713,15.3],[876.1,390.6,0.9725,15.5],[860.3,375.7,0.9768,16.0],[840.2,356.8,0.981,16.6],[825.2,342.7,0.9853,17.2],[821.9,339.6,0.9857,17.2],[823.7,341.2,0.9861,17.3],[820.3,338.1,0.9865,17.4],[804.9,323.7,0.9904,17.9],[784.3,304.5,0.9943,18.4],[768.8,290.1,0.9982,19.0],[763.4,285.1,0.9986,18.9],[763.1,284.9,0.999,18.8]]};
  var LAP = 85.528, SPEEDUP = 10, HOLD = 1500;

  function mix(stops, x) {
    var a = stops[Math.floor(x)], b = stops[Math.min(stops.length - 1, Math.floor(x) + 1)], f = x - Math.floor(x);
    return 'rgb(' + a.map(function (c, i) { return Math.round(c + (b[i] - c) * f); }).join(',') + ')';
  }
  function speedColor(v, lo, hi) {
    return mix([[230, 5, 20], [242, 183, 5], [31, 184, 90]], Math.min(1, Math.max(0, (v - lo) / (hi - lo))) * 2);
  }
  function chip(cls, label, value, extra) {
    var el = document.createElement('div');
    el.className = 'chip ' + cls;
    el.innerHTML = '<small>' + label + (extra || '') + '</small><b>' + value + '</b>';
    return el;
  }
  function clockText(s) {
    var ms = Math.round(s * 1000), m = Math.floor(ms / 60000), r = (ms % 60000) / 1000;
    return m + ':' + (r < 10 ? '0' : '') + r.toFixed(3);
  }

  var phones = document.querySelector('.phones');
  if (phones && TRACK) {
    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + TRACK.w + ' ' + TRACK.h);
    svg.setAttribute('class', 'hero-line');
    var pts = TRACK.p;
    var outline = 'M' + pts.map(function (p) { return p[0] + ' ' + p[1]; }).join('L') + 'Z';
    ['shoulder', 'asphalt'].forEach(function (cls) {
      var base = document.createElementNS(NS, 'path');
      base.setAttribute('d', outline);
      base.setAttribute('class', cls);
      svg.appendChild(base);
    });

    var speeds = pts.map(function (p) { return p[3]; }).sort(function (a, b) { return a - b; });
    var lo = speeds[Math.floor(speeds.length * .05)], hi = speeds[Math.floor(speeds.length * .95)];
    var laps = document.createElementNS(NS, 'g');
    laps.setAttribute('class', 'laps');
    var segs = [];
    for (var i = 0; i < pts.length - 1; i++) {
      var s = document.createElementNS(NS, 'path');
      s.setAttribute('d', 'M' + pts[i][0] + ' ' + pts[i][1] + 'L' + pts[i + 1][0] + ' ' + pts[i + 1][1]);
      s.setAttribute('class', 'seg');
      s.setAttribute('stroke', speedColor(pts[i][3], lo, hi));
      if (!still) s.style.display = 'none';
      laps.appendChild(s);
      segs.push(s);
    }
    svg.appendChild(laps);

    var clock = chip('chip-clock', 'Lap 8', still ? '1:25.528' : '0:00.000', '<span class="fast">Fast</span>');
    if (still) clock.classList.add('done');
    phones.appendChild(svg);
    phones.appendChild(clock);
    phones.appendChild(chip('chip-delta', 'Lap 5', '+0.773'));
    phones.appendChild(chip('chip-ms', 'Mini-sector 1', '13.0'));

    if (!still) {
      var halo = document.createElementNS(NS, 'circle');
      halo.setAttribute('r', 26); halo.setAttribute('class', 'halo');
      var kart = document.createElementNS(NS, 'circle');
      kart.setAttribute('r', 10); kart.setAttribute('class', 'kart');
      svg.appendChild(halo); svg.appendChild(kart);

      var clockValue = clock.querySelector('b');
      var start = null, shown = 0, visible = true, pausedAt = 0, raf = 0, holding = false;
      var frame = function (now) {
        raf = requestAnimationFrame(frame);
        if (holding) return;
        if (start === null) start = now;
        var f = Math.min(1, ((now - start) / 1000) * SPEEDUP / LAP);
        while (shown < pts.length - 1 && pts[shown + 1][2] <= f) { segs[shown].style.display = ''; shown++; }
        var p = pts[shown];
        halo.setAttribute('cx', p[0]); halo.setAttribute('cy', p[1]);
        kart.setAttribute('cx', p[0]); kart.setAttribute('cy', p[1]);
        clockValue.textContent = clockText(f * LAP);
        if (f >= 1) {
          segs.forEach(function (x) { x.style.display = ''; });
          clock.classList.add('done');
          holding = true;
          setTimeout(function () { laps.classList.add('fading'); }, HOLD - 500);
          setTimeout(function () {
            segs.forEach(function (x) { x.style.display = 'none'; });
            laps.classList.remove('fading');
            clock.classList.remove('done');
            shown = 0; start = null; holding = false;
          }, HOLD);
        }
      };
      /* Stops when the hero leaves the screen, and picks up where it was */
      new IntersectionObserver(function (e) {
        var on = e[0].isIntersecting;
        if (on === visible) return;
        visible = on;
        if (on) { if (start !== null) start += performance.now() - pausedAt; cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
        else { pausedAt = performance.now(); cancelAnimationFrame(raf); }
      }).observe(phones);
      setTimeout(function () { if (visible) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); } }, 700);

      /* The hero follows the pointer, only with a real mouse */
      if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelector('.hero').addEventListener('pointermove', function (e) {
          phones.style.setProperty('--mx', ((e.clientX / innerWidth - .5) * 2).toFixed(3));
          phones.style.setProperty('--my', ((e.clientY / innerHeight - .5) * 2).toFixed(3));
        });
      }
    }
  }

  /* ---- The race analysis, drawn as in the app, with made-up drivers and times ---- */
  var RACE = [
    { name: 'L. Moretti', color: '#e60514', laps: [58.9, 55.4, 55.1, 54.9, 55.0, 54.6, 54.8, 54.3, 54.7, 54.5] },
    { name: 'Jonas', color: '#0a84ff', laps: [57.8, 55.6, 55.5, 55.2, 54.9, 55.3, 55.0, 55.1, 54.8, 55.0] },
    { name: 'Sophie M.', color: '#1fb85a', laps: [57.2, 55.9, 55.4, 55.8, 55.3, 55.5, 60.2, 55.2, 55.4, 55.3] },
    { name: 'You', color: '#e8871e', laps: [56.6, 56.2, 55.8, 55.9, 55.6, 55.7, 55.5, 55.8, 55.4, 55.1] }
  ];
  /* As in the app: each driver against their own laps. Red is over 1.07 times their median, and the ramp runs to +6% of their best */
  var allLaps = [];
  RACE.forEach(function (d) {
    allLaps = allLaps.concat(d.laps);
    var sorted = d.laps.slice().sort(function (a, b) { return a - b; });
    d.best = sorted[0];
    d.limit = sorted[Math.floor(sorted.length / 2)] * 1.07;
    d.clean = function (lap) { return lap <= d.limit; };
  });
  var bestLap = Math.min.apply(null, allLaps);
  function heatColor(lap, d) {
    if (!d.clean(lap)) return '#e60514';
    return mix([[31, 184, 90], [242, 183, 5], [232, 135, 30]], Math.min(1, (lap - d.best) / d.best / .06) * 2);
  }

  var analysis = document.querySelector('.analysis');
  var heat = document.querySelector('.heat'), lines = document.querySelector('.lines'), boxes = document.querySelector('.boxes');
  if (analysis && heat && lines && boxes) {
    var html = '<span></span>';
    for (var c = 1; c <= 10; c++) html += '<span class="n">' + c + '</span>';
    RACE.forEach(function (d, row) {
      html += '<span class="d">' + d.name + '</span>';
      d.laps.forEach(function (lap, col) {
        html += '<i class="c' + (lap === bestLap ? ' fast' : '') + '" style="background:' + heatColor(lap, d) + ';--col:' + col + ';--row:' + row + '"></i>';
      });
    });
    heat.innerHTML = html;

    /* As in the app: without lap 1, and the slower laps at the top */
    var rest = [];
    RACE.forEach(function (d) { rest = rest.concat(d.laps.slice(1).filter(d.clean)); });
    var fast = Math.min.apply(null, rest), slow = Math.max.apply(null, rest);
    lines.innerHTML = RACE.map(function (d) {
      var line = d.laps.slice(1).map(function (l, i) {
        return [i * (320 / 8), 8 + ((slow - Math.min(l, slow)) / (slow - fast)) * 104];
      });
      var path = 'M' + line[0][0] + ' ' + line[0][1];
      for (var i = 0; i < line.length - 1; i++) {
        var p0 = line[Math.max(i - 1, 0)], p1 = line[i], p2 = line[i + 1], p3 = line[Math.min(i + 2, line.length - 1)];
        path += 'C' + (p1[0] + (p2[0] - p0[0]) / 6) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6) + ' ' +
          (p2[0] - (p3[0] - p1[0]) / 6) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6) + ' ' + p2[0] + ' ' + p2[1];
      }
      return '<path pathLength="1" d="' + path + '" stroke="' + d.color + '"/>';
    }).join('');

    var x = function (v) { return ((Math.min(v, slow) - fast) / (slow - fast) * 100).toFixed(1) + '%'; };
    boxes.innerHTML = RACE.map(function (d) {
      var sorted = d.laps.slice(1).filter(d.clean).sort(function (a, b) { return a - b; });
      var q = function (f) { return sorted[Math.round((sorted.length - 1) * f)]; };
      return '<div class="box-row"><span>' + d.name + '</span><div class="box-plot">' +
        '<i class="wh" style="left:' + x(q(0)) + ';width:calc(' + x(q(1)) + ' - ' + x(q(0)) + ');background:' + d.color + '"></i>' +
        '<i class="bx" style="left:' + x(q(.25)) + ';width:calc(' + x(q(.75)) + ' - ' + x(q(.25)) + ');background:' + d.color + '"></i>' +
        '<i class="md" style="left:' + x(q(.5)) + ';background:' + d.color + '"></i></div></div>';
    }).join('');
    analysis.classList.add('ready');
  }

  if (still) return;

  /* ---- Appear on arrival ---- */
  ['.league-head > *', '.league-visual', '.l-card', '.league .fineprint', '.analysis .copy > *', '.b-card', '.feature .copy > *', '.feature .visual',
    '.compat .section-title', '.compat .intro', '.compat tbody tr', '.compat-foot p', '.more .section-title', '.grid > div',
    '.pricing .section-title', '.pricing .intro', '.free h3', '.free-list li', '.credit', '.credit-prices tbody tr', '.fineprint', '.cta .container > *'
  ].forEach(function (sel) {
    var perParent = new Map();
    document.querySelectorAll(sel).forEach(function (el) {
      var n = perParent.get(el.parentNode) || 0;
      perParent.set(el.parentNode, n + 1);
      el.classList.add('reveal');
      el.style.setProperty('--i', Math.min(n, 8) * .07 + 's');
    });
  });
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('in');
      /* Once it has arrived, the delay must not weigh on hover */
      setTimeout(function () { el.style.setProperty('--i', '0s'); }, 1600);
      el.querySelectorAll('.pts[data-to]').forEach(function (p) {
        var to = +p.dataset.to, t0 = performance.now();
        (function tick(now) {
          var f = Math.min(1, Math.max(0, (now - t0) / 1300));
          p.textContent = Math.round(to * (1 - Math.pow(1 - f, 3)));
          if (f < 1) requestAnimationFrame(tick);
        })(t0);
      });
      el.querySelectorAll('.rows').forEach(function (r) {
        r.querySelectorAll('li').forEach(function (li, i) { li.style.setProperty('--n', i); });
        r.classList.add('play');
      });
      seen.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });
  document.querySelectorAll('.reveal').forEach(function (el) { seen.observe(el); });

  /* ---- The quote lights up with the scroll, and the progress bar ---- */
  var quote = document.querySelector('.maker blockquote');
  var words = [];
  if (quote) {
    quote.innerHTML = quote.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    words = [].slice.call(quote.querySelectorAll('.w'));
  }
  var topbar = document.querySelector('.topbar');
  var bar = document.createElement('div');
  bar.className = 'lap-progress';
  topbar.appendChild(bar);
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
    topbar.classList.toggle('scrolled', y > 8);
    if (words.length) {
      var r = quote.getBoundingClientRect();
      var f = Math.min(1, Math.max(0, (innerHeight * .88 - r.top) / (innerHeight * .5 + r.height)));
      words.forEach(function (w, i) {
        w.style.setProperty('--o', (.18 + .82 * Math.min(1, Math.max(0, f * words.length - i + 1))).toFixed(2));
      });
    }
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();
})();
