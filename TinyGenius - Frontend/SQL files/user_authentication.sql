-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 07, 2024 at 04:39 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_authentication`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reset-token-hash` varchar(64) DEFAULT NULL,
  `reset_token_expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `reset-token-hash`, `reset_token_expires_at`) VALUES
(13, 'zeesha', 'zee154hmz@gmail.com', '$2y$10$Vrpm177fS5KW83.p.UlhruX5V5toLqyrtzXDONeEvUs3q.NXCSbvu', NULL, NULL),
(14, 'see', 'zee564zmz@gmail.com', '$2y$10$byeWnr2/RTRSssjxXIPOG.2TsEk5XkyqVamyvyy.2tGOu4c./YbJ.', '856de250c17e5ebba8315e5ade7d6bc2413006503a0e4d2369d18746589303b1', '2024-12-05 13:24:43'),
(15, 'ssss', 'sss', '$2y$10$vT6MC26cOg8wMqSlLo/bFenEcHmgYCEWi1576uCvzUgFl9US5L2.u', NULL, NULL),
(16, 'ss', 'sssasa', '$2y$10$M6c3vUX7TGwbFw92wF8FMeIiZQwqXVWEIXAkMAtfSDzEVlWXXSwTG', NULL, NULL),
(17, 'zeenassd', 'zaaas@gmail.com', '$2y$10$ejz5CxAvjDFDDYSYjmDiluxf1C35L6ew0Z.SMbdq637r3yG.23lTO', NULL, NULL),
(18, 'ssssfdf', 'zew564@gmail.com', '$2y$10$vZpeiC0CMVgXOmYiyFWB0O9smJFnSLUz.AREAoEc7Sf7.6t3WKhgW', NULL, NULL),
(19, 'dgfgf', 'rtrt@gmail.com', '$2y$10$h7vdtvV0KfyU9eOCdq2NO.aNTmqePducEphcYVt3nyjprTaoDP4Xa', NULL, NULL),
(20, 'dgfgf', 'rtrtd@gmail.com', '$2y$10$xKpwq/cuoczYr3QFZBLT3ewvwBPN/C8rMA9LhixJCugCeE0oR7TIS', NULL, NULL),
(21, 'ffffffdsd', 'zeg123hmz@gmail.com', '$2y$10$yt0/8XzsUtxDgrR9YFwSMu6K.vUGTAVe7PIL3scwwmNxGuRvU4436', NULL, NULL),
(22, 'ssssfsdf', 'zee5t4hmz@gmail.com', '$2y$10$6yC9EnIF6tXNVYagAZ3dDuwxLHUnCqqAB6anYqgmNPBumuDsrLhX.', NULL, NULL),
(23, 'zeenathhhs', 'sda@gmail.com', '$2y$10$ybM/YDoRfq4umoiDdul3u.Y0nnRkY/Ia.g1DGBbuLis5WouDkLoYe', NULL, NULL),
(24, 'dd', 'sdadd@gmail.com', '$2y$10$X/tmi9lrWxWqlSgfqzNUGutyfEkviH164lXumvmAIobAJcHdPuk7K', NULL, NULL),
(25, 'za', 'zee64@gmail.com', '$2y$10$r7DQcAqcSqbCGKcd/xg9tukCRySSY0EBoi5xWEL9Uw65ewIzwzWZi', NULL, NULL),
(26, 'zas', 'ee564@gmail.com', '$2y$10$2OxlE/BF/1rP1yaGbS6vOufhTH4ppZQKUMAqiY9kk6rDhXFfPSwLW', NULL, NULL),
(27, 'sfsdf', 'cccd@gmail.com', '$2y$10$LdRvs3UMtSviSTzRF99N9.RpqncJTymHyeqXI80vpl66pPdkQ3Cya', NULL, NULL),
(28, 'seed', 'ze564@gmail.com', '$2y$10$0vcNZ2RD6zh0GDWLZ5vdNuagmCBZuP3e4WnX2GsWbluBPZVKU6m3u', NULL, NULL),
(29, 'jane', 'jane@gmail.com', '$2y$10$nkjyCs4wYNVd10EdjAM.ruKDmtGwGfeVnOIFVu3CmHfDOQIrYjTbe', NULL, NULL),
(30, 'janee', 'janee@gmail.com', '$2y$10$s7wePmXGp50ur..l.JxBeu1Xfn9Kr.eYjoGpSvMxL/Je2YyEe.QLq', NULL, NULL),
(31, 'janeee', 'janeee@gmail.com', '$2y$10$MbeC0y0fHFOO51PqA6csPOniMbwVNJI3FLuNnK./Syi.ImgZqeBk6', NULL, NULL),
(32, 'MEE', 'me@gmail.com', '$2y$10$CwfM/c8cuDg.Kr4YOnw/JeFQYMlW6XmFUxwbnCxu6/6sB4KEV336a', NULL, NULL),
(33, 'zen', 'zen@gmail.com', '$2y$10$4BFBmKGrQriAuvulh2rJqe.7egpis.djIucX62bRbb8y6IAI0ujyi', NULL, NULL),
(34, 'zenz', 'zenz@gmail.com', '$2y$10$95OOhNAtAKf0.yfKf0BEIOuYs1gzE0vcp1R73JelWPte6HW/UHEfS', NULL, NULL),
(35, 'zens', 'zens@gmail.com', '$2y$10$oLwpyd7zWV7LF3e37eWRT.R0TQRNLyjlGDUdCgcRwc63bD.WJlKe.', NULL, NULL),
(36, 'zensa', 'zee123hmz@gmail.com', '$2y$10$kZAcLKAfIpG.Cocks78KXOvFOoIWs0Fd9x1POBYEogf.BGcOdv5Om', 'cfcb7990716962d2505a1220468655e1fcf6d05c1b34cd27953d8b4509b93e94', '2024-12-06 18:58:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reset-token-hash` (`reset-token-hash`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
