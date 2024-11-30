-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 30, 2024 at 07:01 PM
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
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(1, 'zeenaaa', 'zee564@gmail.com', '$2y$10$WL/Q97Wr5srLeErM7Ktbl.UEOlaEZrc0r8vYQnh7urlyDl9QM2xN6'),
(2, 'zeenaaat', 'zee566@gmail.com', '$2y$10$e1K4.b11VTgb657PjaaqW.dMRIlHkb/8JA3.uXfYdyLq2WvtdEQHu'),
(3, 'zeenaaath', 'zee568@gmail.com', '$2y$10$BHDcU6gm34utkeLA72FtfeB2sANcBUy5hYs8OFOtYKKzHbeL.nlmS'),
(4, 'zeenaaathh', 'zee565@gmail.com', '$2y$10$7Lgg2uQpIi/EDFaCtnd1z.sfkIgm4VT57v4W3FsraPX6C2MNW4R4a'),
(5, 'zeenaaathh', 'zee563@gmail.com', '$2y$10$7KXShQzHae7N2zcbWlrc4ui0bX97u3JEp62RYtVW2sj5xMGt37XMO'),
(6, 'zeenaaathhu', 'zee562@gmail.com', '$2y$10$lQZcYQNw7hoSgHx9/nbNIO/Hh9F5SVIcWzDdurHfIKtNvp4iF7qFC'),
(7, 'fa', 'zee560@gmail.com', '$2y$10$7Lp4ItJssZsvia8T4VEE2e9KzxjWupdcScyOyJEHy7U5Iig10NUKS'),
(8, 'haa', 'zee554@gmail.com', '$2y$10$8rem0Cop7fEk0fV6sBm5venJaqDghwfhEYbYVclV2TSAuejyO8i9C'),
(9, 'eee', 'zee133hmz@gmail.com', '$2y$10$.G/NFGoOHLXyZ11qOaBnn.gJp.WLrxPGLF2RJvI/KLVrQiVE9dKHq'),
(10, 'sea', 'zee223hmz@gmail.com', '$2y$10$gwzqo1EMna.T9p8CAqXX9uXiJRrz3T3IOUxRm7yHj7RdTTvjtPA2K'),
(11, 'gaa', 'zee121hmz@gmail.com', '$2y$10$T3TTO3S59ow7jncFlCH/N.SYu8vI7bRnqrzyxGtmNxYyO.euCUYoW'),
(12, 'zees', 'zee153hmz@gmail.com', '$2y$10$VRxxc7NW5PnLrI5Lr0N.VOZ2JmyW5DT8NpIM3dNck8eJVcRQ9aCTO'),
(13, 'zeesha', 'zee154hmz@gmail.com', '$2y$10$Vrpm177fS5KW83.p.UlhruX5V5toLqyrtzXDONeEvUs3q.NXCSbvu'),
(14, 'see', 'zee564zmz@gmail.com', '$2y$10$byeWnr2/RTRSssjxXIPOG.2TsEk5XkyqVamyvyy.2tGOu4c./YbJ.'),
(15, 'ssss', 'sss', '$2y$10$vT6MC26cOg8wMqSlLo/bFenEcHmgYCEWi1576uCvzUgFl9US5L2.u'),
(16, 'ss', 'sssasa', '$2y$10$M6c3vUX7TGwbFw92wF8FMeIiZQwqXVWEIXAkMAtfSDzEVlWXXSwTG'),
(17, 'zeenassd', 'zaaas@gmail.com', '$2y$10$ejz5CxAvjDFDDYSYjmDiluxf1C35L6ew0Z.SMbdq637r3yG.23lTO'),
(18, 'ssssfdf', 'zew564@gmail.com', '$2y$10$vZpeiC0CMVgXOmYiyFWB0O9smJFnSLUz.AREAoEc7Sf7.6t3WKhgW'),
(19, 'dgfgf', 'rtrt@gmail.com', '$2y$10$h7vdtvV0KfyU9eOCdq2NO.aNTmqePducEphcYVt3nyjprTaoDP4Xa'),
(20, 'dgfgf', 'rtrtd@gmail.com', '$2y$10$xKpwq/cuoczYr3QFZBLT3ewvwBPN/C8rMA9LhixJCugCeE0oR7TIS'),
(21, 'ffffffdsd', 'zeg123hmz@gmail.com', '$2y$10$yt0/8XzsUtxDgrR9YFwSMu6K.vUGTAVe7PIL3scwwmNxGuRvU4436'),
(22, 'ssssfsdf', 'zee5t4hmz@gmail.com', '$2y$10$6yC9EnIF6tXNVYagAZ3dDuwxLHUnCqqAB6anYqgmNPBumuDsrLhX.'),
(23, 'zeenathhhs', 'sda@gmail.com', '$2y$10$ybM/YDoRfq4umoiDdul3u.Y0nnRkY/Ia.g1DGBbuLis5WouDkLoYe'),
(24, 'dd', 'sdadd@gmail.com', '$2y$10$X/tmi9lrWxWqlSgfqzNUGutyfEkviH164lXumvmAIobAJcHdPuk7K');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
