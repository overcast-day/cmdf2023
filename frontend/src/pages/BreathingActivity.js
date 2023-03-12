import '../App.css';
import React from 'react'
import Timer from '../components/Timer.js';
import { Link, useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import {ReactComponent as LogoSwirl } from "../images/Interlaced-flower.svg"

export default function Breathe() {
    const handleClickScroll = () => {
        const element = document.getElementById('bottom-section');
        if (element) {
          element.scrollIntoView({behavior: 'smooth' });
        }
    };
    const handleClick = (e) => {
        window.close();
    };

    return (

        <div className="Breathe">
        
        <div id = "top-section">
            <div class="whole-page">
            <h2>It's time for a break! Let's do a </h2>
            <h1>Breathing Exercise </h1>
            <h3>5 minutes</h3>
            <p>Take some time to take deep breaths</p>
            <button 
                className="scroll-button"
                class="confirm-button" 
                onClick={handleClickScroll}>
                    Start
            </button></div>
        </div>
        <div id = "bottom-section">
            <div class="whole-page">
            <h2> 1,2,3...in...1,2,3....out. Take this time to be in the moment</h2>
            <Timer className="small-timer"
                h = {1}
                m = {0}
                s = {30}
                link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" //"/dashboard"
                type = "activity"
            />
            <h2>remaining </h2>
            <button 
                class="confirm-button" 
                onClick={handleClick}>
                Return to dashboard
            </button>
        </div>
        <svg className="logo-swirl" width="618" height="600" viewBox="0 0 618 600" xmlns="http://www.w3.org/2000/svg" xmlnsSvg="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>Interlaced pentagram-pentagon flower</title>
        <g transform="translate(-2,590.5) scale(0.273,-0.273)">
        <defs>
        <path id="OuterOutl" d="M783.55,1696.12
        C783.55,1658.71,789.438,1621.55,800.996,1585.96
        L825.606,1510.22
        L1014.19,1373.21
        L1113.55,1445.41
        C1121.81,1451.41,1130.91,1454.41,1140,1454.41
        C1149.09,1454.41,1158.19,1451.41,1166.45,1445.41
        L1265.82,1373.21
        L1454.39,1510.22
        L1479,1585.96
        C1490.56,1621.54,1496.45,1658.71,1496.45,1696.12
        C1496.45,1733.53,1490.56,1770.69,1479,1806.26
        C1467.44,1841.84,1450.36,1875.38,1428.37,1905.64
        C1406.39,1935.9,1379.78,1962.51,1349.52,1984.49
        C1319.26,2006.48,1285.72,2023.56,1250.14,2035.12
        C1214.57,2046.68,1177.41,2052.57,1140,2052.57
        C1102.59,2052.57,1065.43,2046.68,1029.86,2035.12
        C994.28,2023.56,960.743,2006.48,930.483,1984.49
        C900.222,1962.51,873.61,1935.9,851.625,1905.64
        C829.641,1875.38,812.556,1841.84,800.996,1806.26
        C789.439,1770.69,783.55,1733.53,783.55,1696.12Z
        M1115.29,618.685
        L1140,542.622
        L1164.71,618.685
        H1115.29Z
        M974.938,1050.63
        L1037.99,856.59
        H1242.01
        L1305.06,1050.63
        L1140,1170.56
        L974.938,1050.63Z
        M1342.37,1317.59
        L1382.36,1288.54
        L1407.08,1364.6
        L1342.37,1317.59Z
        M707.863,856.59
        H787.838
        L772.564,903.598
        L707.863,856.59Z
        M872.922,1364.6
        L897.637,1288.53
        L937.628,1317.59
        L872.922,1364.6Z
        M1492.17,856.59
        H1572.14
        L1507.44,903.596
        L1492.17,856.59Z
        M118.647,1213.04
        C118.647,1175.63,124.537,1138.46,136.094,1102.89
        C147.653,1067.32,164.737,1033.78,186.722,1003.52
        C208.708,973.26,235.32,946.651,265.58,924.666
        C295.841,902.68,329.375,885.594,364.949,874.035
        C400.521,862.477,437.692,856.59,475.097,856.59
        L554.745,856.59
        L743.321,993.6
        L705.367,1110.4
        C703.731,1115.44,702.931,1120.44,702.931,1125.29
        C702.931,1139.16,709.47,1151.82,721.714,1160.72
        L821.079,1232.91
        L749.047,1454.6
        L684.614,1501.41
        C654.354,1523.4,620.821,1540.48,585.244,1552.04
        C549.673,1563.6,512.502,1569.49,475.097,1569.49
        C437.693,1569.49,400.521,1563.6,364.949,1552.04
        C329.372,1540.48,295.84,1523.4,265.58,1501.41
        C235.32,1479.43,208.709,1452.82,186.722,1422.56
        C164.738,1392.3,147.653,1358.76,136.094,1323.18
        C124.537,1287.62,118.647,1250.45,118.647,1213.04Z
        M849.122,959.22
        L882.469,856.59
        H943.354
        L898.379,995.01
        L849.122,959.22Z
        M372.618,431.4
        C372.618,393.996,378.505,356.823,390.062,321.251
        C401.622,285.678,418.709,252.143,440.694,221.883
        C462.679,191.623,489.291,165.011,519.551,143.026
        C549.812,121.04,583.345,103.954,618.918,92.3965
        C654.492,80.8369,691.663,74.9502,729.068,74.9502
        C766.472,74.9502,803.643,80.8369,839.217,92.3965
        C874.791,103.954,908.322,121.039,938.583,143.026
        C968.843,165.013,995.46,191.627,1017.44,221.883
        C1039.43,252.143,1056.51,285.675,1068.07,321.251
        L1092.68,396.999
        L1020.65,618.685
        H897.833
        C877.404,618.685,861.349,630.349,855.036,649.779
        L817.081,766.59
        H583.988
        L519.551,719.774
        C489.292,697.789,462.679,671.176,440.694,640.916
        C418.709,610.656,401.622,577.122,390.062,541.549
        C378.505,505.977,372.618,468.804,372.618,431.4Z
        M1458.92,1232.91
        L1558.29,1160.72
        C1570.53,1151.82,1577.07,1139.16,1577.07,1125.29
        C1577.07,1120.44,1576.27,1115.44,1574.64,1110.4
        L1536.68,993.6
        L1725.26,856.59
        H1804.9
        C1842.31,856.59,1879.47,862.475,1915.05,874.035
        C1950.62,885.593,1984.16,902.681,2014.42,924.666
        C2044.68,946.651,2071.29,973.26,2093.27,1003.52
        C2115.26,1033.78,2132.35,1067.33,2143.9,1102.89
        C2155.46,1138.46,2161.35,1175.63,2161.35,1213.04
        C2161.35,1250.45,2155.46,1287.62,2143.9,1323.18
        C2132.35,1358.75,2115.26,1392.3,2093.27,1422.56
        C2071.29,1452.82,2044.68,1479.43,2014.42,1501.41
        C1984.16,1523.4,1950.63,1540.48,1915.05,1552.04
        C1879.47,1563.61,1842.31,1569.49,1804.9,1569.49
        C1767.5,1569.49,1730.32,1563.6,1694.76,1552.04
        C1659.18,1540.48,1625.65,1523.4,1595.39,1501.41
        L1530.95,1454.59
        L1458.92,1232.91Z
        M1216.56,1226.18
        L1334.31,1140.63
        L1353.12,1198.54
        L1265.82,1261.97
        L1216.56,1226.18Z
        M1067.23,766.59
        L1086.04,708.685
        H1193.96
        L1212.77,766.59
        H1067.23Z
        M911.713,766.59
        L930.527,708.685
        H991.41
        L972.596,766.59
        H911.713Z
        M1187.32,396.999
        L1211.93,321.251
        C1223.49,285.675,1240.57,252.143,1262.56,221.883
        C1284.54,191.627,1311.16,165.013,1341.42,143.026
        C1371.68,121.039,1405.21,103.955,1440.79,92.3965
        C1476.35,80.8389,1513.53,74.9502,1550.93,74.9502
        C1588.34,74.9502,1625.5,80.835,1661.08,92.3965
        C1696.65,103.953,1730.19,121.041,1760.45,143.026
        C1790.71,165.01,1817.32,191.623,1839.3,221.883
        C1861.29,252.147,1878.38,285.69,1889.93,321.251
        C1901.49,356.823,1907.38,393.996,1907.38,431.4
        C1907.38,468.804,1901.49,505.976,1889.93,541.549
        C1878.38,577.11,1861.29,610.653,1839.3,640.916
        C1817.32,671.176,1790.71,697.789,1760.45,719.774
        L1696.01,766.59
        H1462.92
        L1424.97,649.779
        C1418.65,630.35,1402.6,618.685,1382.17,618.685
        L1259.35,618.685
        L1187.32,396.999Z
        M28.6475,1213.04
        C28.6475,1259.89,36.0225,1306.44,50.498,1350.99
        C64.9766,1395.55,86.374,1437.56,113.912,1475.46
        C141.449,1513.36,174.779,1546.69,212.681,1574.23
        C250.583,1601.76,292.583,1623.16,337.134,1637.64
        C381.692,1652.12,428.249,1659.49,475.097,1659.49
        C521.946,1659.49,568.503,1652.12,613.06,1637.64
        C645.223,1627.18,676.056,1613.13,704.977,1595.76
        C697.393,1628.63,693.55,1662.3,693.55,1696.12
        C693.55,1742.97,700.925,1789.52,715.4,1834.08
        C729.878,1878.64,751.277,1920.64,778.814,1958.54
        C806.352,1996.44,839.683,2029.77,877.585,2057.31
        C915.487,2084.84,957.485,2106.24,1002.04,2120.72
        C1046.6,2135.2,1093.15,2142.57,1140,2142.57
        C1186.85,2142.57,1233.4,2135.2,1277.96,2120.72
        C1322.51,2106.24,1364.52,2084.84,1402.42,2057.31
        C1440.32,2029.77,1473.65,1996.44,1501.19,1958.54
        C1528.72,1920.64,1550.12,1878.63,1564.6,1834.08
        C1579.08,1789.52,1586.45,1742.97,1586.45,1696.12
        C1586.45,1662.3,1582.61,1628.63,1575.02,1595.75
        C1603.94,1613.12,1634.77,1627.18,1666.94,1637.64
        C1711.5,1652.12,1758.06,1659.49,1804.9,1659.49
        C1851.75,1659.49,1898.31,1652.12,1942.87,1637.64
        C1987.41,1623.16,2029.42,1601.76,2067.32,1574.23
        C2105.22,1546.69,2138.55,1513.36,2166.09,1475.46
        C2193.62,1437.56,2215.02,1395.56,2229.5,1350.99
        C2243.97,1306.44,2251.35,1259.89,2251.35,1213.04
        C2251.35,1166.19,2243.97,1119.64,2229.5,1075.08
        C2215.02,1030.52,2193.62,988.52,2166.09,950.62
        C2138.55,912.722,2105.22,879.391,2067.32,851.854
        C2029.42,824.316,1987.42,802.916,1942.87,788.44
        C1910.7,777.989,1877.49,771.24,1843.88,768.295
        C1869.34,746.157,1892.24,721.177,1912.12,693.816
        C1939.65,655.919,1961.05,613.922,1975.53,569.358
        C1990,524.8,1997.38,478.248,1997.38,431.4
        C1997.38,384.552,1990,337.997,1975.53,293.438
        C1961.05,248.875,1939.65,206.882,1912.12,168.984
        C1884.58,131.083,1851.25,97.751,1813.35,70.2139
        C1775.45,42.6768,1733.45,21.2754,1688.9,6.80078
        C1644.34,-7.67676,1597.78,-15.0498,1550.93,-15.0498
        C1504.09,-15.0498,1457.53,-7.67578,1412.97,6.80078
        C1368.41,21.2793,1326.42,42.6797,1288.52,70.2139
        C1250.62,97.749,1217.28,131.079,1189.74,168.984
        C1169.87,196.346,1153.19,225.844,1140,256.895
        C1126.81,225.844,1110.13,196.346,1090.26,168.984
        C1062.72,131.078,1029.38,97.7471,991.49,70.2139
        C953.585,42.6768,911.584,21.2773,867.029,6.80078
        C822.473,-7.67676,775.916,-15.0498,729.068,-15.0498
        C682.219,-15.0498,635.663,-7.67676,591.106,6.80078
        C546.551,21.2773,504.551,42.6777,466.651,70.2139
        C428.75,97.751,395.419,131.083,367.882,168.984
        C340.346,206.885,318.946,248.884,304.469,293.438
        C289.991,337.994,282.618,384.552,282.618,431.4
        C282.618,478.248,289.991,524.802,304.469,569.358
        C318.946,613.913,340.346,655.915,367.882,693.816
        C387.762,721.177,410.66,746.157,436.118,768.295
        C402.509,771.24,369.3,777.989,337.134,788.44
        C292.578,802.918,250.582,824.318,212.681,851.854
        C174.779,879.391,141.447,912.722,113.912,950.62
        C86.3721,988.52,64.9766,1030.52,50.498,1075.08
        C36.0225,1119.64,28.6475,1166.19,28.6475,1213.04Z
        M926.88,1198.53
        L945.694,1140.63
        L1063.44,1226.18
        L1014.19,1261.97
        L926.88,1198.53Z
        M801.066,1107.12
        L819.879,1049.22
        L869.136,1085.01
        L850.322,1142.91
        L801.066,1107.12Z
        M1090.74,1317.59
        L1140,1281.8
        L1189.26,1317.59
        L1140,1353.38
        L1090.74,1317.59Z
        M1336.65,856.59
        H1397.53
        L1430.88,959.22
        L1381.62,995.01
        L1336.65,856.59Z
        M1410.86,1085.01
        L1460.12,1049.22
        L1478.94,1107.12
        L1429.68,1142.91
        L1410.86,1085.01Z
        M1288.59,708.685
        H1349.48
        L1368.29,766.59
        H1307.4
        L1288.59,708.685Z"/>
        </defs>
        <use stroke-width="36" stroke="rgb(255,255,255)" stroke-linejoin="round" fill="none" xlinkHref="#OuterOutl"/>
        <use xlinkHref="#OuterOutl"/>
        <path fill="rgb(204,235,255)" d="M708.55,1696.12
        C708.55,1741.4,715.677,1786.39,729.666,1829.44
        C743.658,1872.5,764.34,1913.1,790.95,1949.72
        C817.564,1986.35,849.773,2018.56,886.401,2045.17
        C923.029,2071.78,963.618,2092.46,1006.68,2106.45
        C1049.73,2120.44,1094.72,2127.57,1140,2127.57
        C1185.28,2127.57,1230.27,2120.44,1273.32,2106.45
        C1316.38,2092.46,1356.97,2071.78,1393.6,2045.17
        C1430.23,2018.56,1462.44,1986.35,1489.05,1949.72
        C1515.66,1913.09,1536.34,1872.5,1550.33,1829.44
        C1564.32,1786.39,1571.45,1741.4,1571.45,1696.12
        C1571.45,1658.26,1566.47,1620.6,1556.65,1584.11
        C1554.73,1576.95,1552.62,1569.85,1550.33,1562.79
        L1446.16,1242.19
        L1395.12,1279.27
        L1493.27,1581.33
        C1505.32,1618.41,1511.45,1657.14,1511.45,1696.12
        C1511.45,1735.1,1505.31,1773.83,1493.27,1810.9
        C1481.22,1847.98,1463.42,1882.93,1440.51,1914.46
        C1417.6,1945.99,1389.87,1973.72,1358.34,1996.63
        C1326.81,2019.54,1291.86,2037.34,1254.78,2049.39
        C1217.71,2061.43,1178.98,2067.57,1140,2067.57
        C1101.02,2067.57,1062.29,2061.43,1025.22,2049.39
        C988.145,2037.34,953.201,2019.54,921.667,1996.63
        C890.133,1973.72,862.401,1945.99,839.49,1914.46
        C816.581,1882.92,798.776,1847.98,786.73,1810.9
        C774.688,1773.83,768.55,1735.1,768.55,1696.12
        C768.55,1657.14,774.685,1618.41,786.73,1581.33
        L804.958,1525.23
        L737.514,1574.23
        L723.342,1584.11
        C713.532,1620.61,708.55,1658.26,708.55,1696.12Z
        M1152.76,1272.53
        L1446.5,1485.94
        L1414.96,1388.87
        L1203.8,1235.45
        L1152.76,1272.53Z
        M1467.8,781.59
        L1487.3,841.59
        H1804.9
        C1843.88,841.59,1882.61,847.723,1919.69,859.77
        C1956.76,871.814,1991.7,889.62,2023.24,912.53
        C2054.77,935.44,2082.5,963.17,2105.41,994.7
        C2128.32,1026.24,2146.13,1061.19,2158.17,1098.26
        C2170.21,1135.33,2176.35,1174.06,2176.35,1213.04
        C2176.35,1252.02,2170.21,1290.76,2158.17,1327.82
        C2146.13,1364.89,2128.32,1399.84,2105.41,1431.38
        C2082.5,1462.91,2054.77,1490.64,2023.24,1513.55
        C1991.71,1536.46,1956.76,1554.26,1919.69,1566.31
        C1882.61,1578.36,1843.88,1584.49,1804.9,1584.49
        C1765.93,1584.49,1727.19,1578.35,1690.12,1566.31
        C1653.05,1554.26,1618.11,1536.46,1586.57,1513.55
        L1538.84,1478.87
        L1564.6,1558.15
        C1566.38,1563.63,1568.06,1569.15,1569.62,1574.69
        C1601.3,1595.29,1635.57,1611.67,1671.58,1623.37
        C1714.64,1637.36,1759.63,1644.49,1804.9,1644.49
        C1850.18,1644.49,1895.17,1637.37,1938.23,1623.37
        C1981.28,1609.38,2021.87,1588.7,2058.5,1562.09
        C2095.13,1535.48,2127.34,1503.27,2153.95,1466.64
        C2180.56,1430.02,2201.24,1389.43,2215.23,1346.36
        C2229.22,1303.3,2236.35,1258.32,2236.35,1213.04
        C2236.35,1167.76,2229.22,1122.78,2215.23,1079.72
        C2201.24,1036.65,2180.56,996.061,2153.95,959.44
        C2127.34,922.814,2095.13,890.604,2058.5,863.989
        C2021.88,837.379,1981.28,816.695,1938.23,802.706
        C1902.23,791.007,1864.87,784.109,1827.13,782.163
        C1819.73,781.781,1812.32,781.59,1804.9,781.59
        L1467.8,781.59Z
        M1036.43,618.685
        H1099.51
        L1197.66,316.616
        C1209.71,279.544,1227.51,244.601,1250.42,213.067
        C1273.33,181.536,1301.07,153.802,1332.6,130.89
        C1364.14,107.979,1399.08,90.1758,1436.15,78.1299
        C1473.21,66.0869,1511.96,59.9502,1550.93,59.9502
        C1589.91,59.9502,1628.64,66.083,1665.72,78.1299
        C1702.79,90.1729,1737.73,107.981,1769.27,130.89
        C1800.8,153.801,1828.53,181.533,1851.44,213.067
        C1874.35,244.603,1892.16,279.554,1904.2,316.616
        C1916.24,353.686,1922.38,392.422,1922.38,431.4
        C1922.38,470.378,1916.24,509.114,1904.2,546.184
        C1892.16,583.246,1874.35,618.196,1851.44,649.732
        C1828.53,681.266,1800.8,708.999,1769.27,731.91
        L1721.54,766.59
        H1804.9
        C1810.66,766.59,1816.42,766.702,1822.17,766.924
        C1851.56,743.164,1877.73,715.626,1899.98,684.999
        C1926.59,648.374,1947.27,607.787,1961.26,564.724
        C1975.25,521.663,1982.38,476.674,1982.38,431.4
        C1982.38,386.126,1975.25,341.135,1961.26,298.074
        C1947.27,255.011,1926.59,214.427,1899.98,177.801
        C1873.37,141.174,1841.16,108.964,1804.53,82.3496
        C1767.91,55.7402,1727.31,35.0547,1684.26,21.0664
        C1641.2,7.0752,1596.21,-0.0498047,1550.93,-0.0498047
        C1505.66,-0.0498047,1460.67,7.07715,1417.61,21.0664
        C1374.54,35.0586,1333.96,55.7422,1297.34,82.3496
        C1260.71,108.963,1228.49,141.171,1201.88,177.801
        C1179.63,208.427,1161.53,241.822,1148.01,277.114
        C1145.36,284.03,1142.89,291.019,1140.6,298.074
        L1036.43,618.685Z
        M1386.5,1010.01
        L1405.99,1070.01
        L1699.73,856.59
        H1597.66
        L1386.5,1010.01Z
        M1026.95,1271.24
        L1077.98,1308.32
        L1329.43,1125.63
        L1309.94,1065.63
        L1026.95,1271.24Z
        M297.618,431.4
        C297.618,476.674,304.743,521.665,318.734,564.724
        C332.725,607.781,353.406,648.371,380.018,684.999
        C402.269,715.626,428.436,743.165,457.825,766.924
        C463.584,771.58,469.466,776.09,475.467,780.45
        L748.194,978.6
        L767.689,918.598
        L510.735,731.91
        C479.201,708.999,451.469,681.266,428.558,649.732
        C405.648,618.199,387.843,583.255,375.798,546.184
        C363.753,509.115,357.618,470.378,357.618,431.4
        C357.618,392.422,363.753,353.685,375.798,316.616
        C387.843,279.546,405.648,244.6,428.558,213.067
        C451.469,181.533,479.201,153.801,510.735,130.89
        C542.269,107.98,577.213,90.1738,614.282,78.1299
        C651.354,66.085,690.089,59.9502,729.068,59.9502
        C768.046,59.9502,806.781,66.085,843.854,78.1299
        C880.923,90.1738,915.866,107.978,947.4,130.89
        C978.932,153.801,1006.67,181.536,1029.58,213.067
        C1052.49,244.601,1070.29,279.544,1082.34,316.616
        L1100.57,372.722
        L1126.33,293.438
        C1128.11,287.957,1130,282.514,1131.99,277.114
        C1118.47,241.822,1100.37,208.427,1078.12,177.801
        C1051.51,141.171,1019.29,108.959,982.668,82.3496
        C946.042,55.7383,905.452,35.0566,862.393,21.0664
        C819.335,7.07617,774.342,-0.0498047,729.068,-0.0498047
        C683.793,-0.0498047,638.801,7.07617,595.742,21.0664
        C552.683,35.0566,512.095,55.7383,475.467,82.3496
        C438.84,108.961,406.629,141.174,380.018,177.801
        C353.406,214.429,332.725,255.016,318.734,298.074
        C304.743,341.133,297.618,386.126,297.618,431.4Z
        M1147.89,518.352
        L1228.55,766.59
        H1291.63
        L1179.43,421.276
        L1147.89,518.352Z
        M1257.79,856.59
        L1365.88,1189.26
        L1416.92,1152.18
        L1320.87,856.59
        H1257.79Z
        M824.753,1034.22
        L1076.2,1216.91
        L1127.24,1179.83
        L844.248,974.22
        L824.753,1034.22Z
        M911.14,1004.28
        L962.177,1041.36
        L1070.27,708.685
        H1007.18
        L911.14,1004.28Z
        M1042.86,841.59
        H1392.66
        L1373.17,781.59
        H1062.36
        L1042.86,841.59Z
        M1278.58,1271.23
        L1329.61,1308.31
        L1549.47,1148.58
        C1557.64,1142.65,1562,1134.21,1562,1124.96
        C1562,1121.73,1561.46,1118.4,1560.37,1115.04
        L1523.92,1002.87
        L1472.88,1039.95
        L1496.57,1112.85
        L1278.58,1271.23Z
        M1264.22,633.685
        L1283.72,693.685
        H1360.37
        L1443.64,949.95
        L1494.68,912.867
        L1410.7,654.414
        C1406.49,641.461,1395.79,633.685,1382.17,633.685
        L1264.22,633.685Z
        M43.6475,1213.04
        C43.6475,1258.32,50.7754,1303.31,64.7646,1346.36
        C78.7559,1389.42,99.4365,1430.02,126.047,1466.64
        C152.662,1503.27,184.87,1535.48,221.498,1562.09
        C258.126,1588.7,298.714,1609.38,341.77,1623.37
        C384.83,1637.36,429.823,1644.49,475.097,1644.49
        C520.372,1644.49,565.365,1637.36,608.424,1623.37
        C644.425,1611.67,678.7,1595.3,710.378,1574.69
        C716.586,1570.65,722.695,1566.45,728.697,1562.09
        L1001.42,1363.94
        L950.386,1326.86
        L693.431,1513.55
        C661.896,1536.46,626.953,1554.26,589.88,1566.31
        C552.811,1578.36,514.076,1584.49,475.097,1584.49
        C436.119,1584.49,397.384,1578.36,360.314,1566.31
        C323.242,1554.26,288.298,1536.46,256.764,1513.55
        C225.23,1490.64,197.499,1462.91,174.587,1431.38
        C151.677,1399.84,133.874,1364.9,121.828,1327.82
        C109.785,1290.75,103.647,1252.02,103.647,1213.04
        C103.647,1174.06,109.785,1135.33,121.828,1098.26
        C133.874,1061.19,151.676,1026.24,174.587,994.7
        C197.497,963.17,225.231,935.44,256.764,912.53
        C288.299,889.619,323.243,871.815,360.314,859.77
        C397.383,847.725,436.118,841.59,475.097,841.59
        L534.099,841.59
        L466.651,792.586
        L452.873,782.163
        C415.131,784.109,377.774,791.007,341.77,802.706
        C298.711,816.697,258.125,837.378,221.498,863.989
        C184.869,890.601,152.661,922.814,126.047,959.44
        C99.4355,996.061,78.7559,1036.66,64.7646,1079.72
        C50.7754,1122.77,43.6475,1167.76,43.6475,1213.04Z
        M769.695,1439.6
        L852.277,1379.6
        L932.934,1131.36
        L881.896,1094.28
        L769.695,1439.6Z
        M902.511,1273.53
        L1122.37,1433.27
        C1127.88,1437.27,1133.94,1439.27,1140,1439.27
        C1146.06,1439.27,1152.12,1437.27,1157.63,1433.27
        L1253.05,1363.94
        L1202.02,1326.86
        L1140,1371.92
        L922.007,1213.53
        L902.511,1273.53Z
        M832.852,766.59
        H895.94
        L919.629,693.685
        H1189.08
        L1169.59,633.685
        H897.833
        C884.213,633.685,873.51,641.461,869.301,654.414
        L832.852,766.59Z
        M604.634,781.59
        L687.218,841.59
        H948.225
        L967.72,781.59
        H604.634Z
        M718.009,1124.96
        C718.009,1134.21,722.368,1142.65,730.531,1148.58
        L825.952,1217.91
        L845.447,1157.91
        L783.432,1112.85
        L866.697,856.59
        H803.609
        L719.633,1115.04
        C718.543,1118.4,718.009,1121.73,718.009,1124.96Z"/>
        </g>
        </svg>
        </div>
        </div>
    );
}