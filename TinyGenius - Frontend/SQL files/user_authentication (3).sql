-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 15, 2024 at 11:53 AM
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
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `dob` date DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `dob`, `phone`, `gender`) VALUES
(50, NULL, NULL, NULL),
(51, NULL, NULL, NULL),
(52, NULL, NULL, NULL),
(53, NULL, NULL, NULL),
(54, NULL, NULL, NULL),
(55, NULL, NULL, NULL),
(56, NULL, NULL, NULL),
(57, NULL, NULL, NULL),
(58, NULL, NULL, NULL),
(59, NULL, NULL, NULL),
(60, NULL, NULL, NULL),
(61, NULL, NULL, NULL),
(62, NULL, NULL, NULL),
(63, NULL, NULL, NULL),
(64, NULL, NULL, NULL),
(65, NULL, NULL, NULL),
(66, NULL, NULL, NULL),
(67, NULL, NULL, NULL),
(68, NULL, NULL, NULL),
(69, NULL, NULL, NULL),
(71, NULL, NULL, NULL),
(74, NULL, NULL, NULL),
(76, NULL, NULL, NULL),
(77, '2024-12-26', '0142691682', 'Male'),
(79, '2024-12-04', '0732691683', 'Female'),
(80, '2024-12-28', '0432691682', 'Female'),
(81, '2024-12-24', '0752691684', 'Female'),
(82, '2024-12-18', '0732691683', 'Female'),
(89, '2025-01-02', '0732691681', 'Female'),
(91, '2024-12-05', '0182691682', 'Female'),
(97, '2024-12-04', '0732691687', 'Male'),
(99, '2024-12-18', '0732691682', 'Female'),
(106, '2024-12-27', '0732691681', 'Female'),
(112, '2001-06-15', '0732691682', 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `selections`
--

CREATE TABLE `selections` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `grade` varchar(50) NOT NULL,
  `subjects` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `selections`
--

INSERT INTO `selections` (`id`, `user_id`, `grade`, `subjects`, `created_at`) VALUES
(1, 38, '3', '[\"ART\",\"ENGLISH\",\"MATHS\"]', '2024-12-10 06:26:22'),
(2, 38, '2', '[\"ENGLISH\",\"MATHS\",\"ART\"]', '2024-12-10 06:26:30'),
(3, 38, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-10 06:26:38'),
(7, 39, '1', '[\"ART\"]', '2024-12-10 07:23:35'),
(8, 39, '2', '[\"ART\"]', '2024-12-10 07:23:39'),
(9, 39, '3', '[\"ART\"]', '2024-12-10 07:23:43'),
(10, 40, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-10 07:31:48'),
(27, 40, '2', '[\"MATHS\",\"ART\"]', '2024-12-11 02:31:46'),
(28, 40, '3', '[\"ART\",\"ENGLISH\"]', '2024-12-11 02:32:17'),
(29, 63, '1', '[\"MATHS\",\"ENGLISH\",\"ART\"]', '2024-12-11 02:41:06'),
(30, 88, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-14 04:48:52'),
(31, 92, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-14 09:13:55'),
(32, 100, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-14 15:01:55'),
(33, 97, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-14 15:10:25'),
(34, 101, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-14 15:14:27'),
(35, 102, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-14 16:02:06'),
(36, 103, '1', '[\"MATHS\",\"ENGLISH\",\"ICT\",\"ART\"]', '2024-12-14 16:07:40'),
(37, 104, '1', '[\"ENGLISH\"]', '2024-12-14 16:34:29'),
(38, 105, '1', '[\"ENGLISH\"]', '2024-12-14 17:51:52'),
(39, 108, '1', '[\"MATHS\",\"ENGLISH\"]', '2024-12-15 04:00:09'),
(40, 112, '1', '[\"ENGLISH\"]', '2024-12-15 07:14:07');

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
  `reset_token_expires_at` datetime DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `reset-token-hash`, `reset_token_expires_at`, `profile_picture`) VALUES
(50, 'root', '', '$2y$10$Vjc2rVqYTb5Z.QdM3L1VMuVO8ydI0.XNXW4KzFRJHGeZCYi6WCCGu', NULL, NULL, NULL),
(51, 'root', '', '$2y$10$5dhBW6fsEgE4zsD6wZR.r.deMJ5XcSnB3RSrzvHCRI8Cn3UWP8lya', NULL, NULL, NULL),
(52, 'root', '', '$2y$10$yGrojEn6d2uQcBz7AOjPLepy6RcrYXq3jE2V.RShrq7gPwsS0M7R6', NULL, NULL, NULL),
(53, 'root', '', '$2y$10$GnKTvicG1jklL8NPIPL0RuMzC9Shi2pNoMNSFtZT.aPGxHVC8Ukdy', NULL, NULL, NULL),
(54, 'root', '', '$2y$10$XjLgLBq5KnkxFoSYJokONuy0DNuPptcryIOzqZOfohV7JX24uV6kG', NULL, NULL, NULL),
(55, 'root', '', '$2y$10$AAdjqUiN/6Jn7W8p0/Zk4usVmKz7pPcoOqjKmOJ01sZxxAisFqCNO', NULL, NULL, NULL),
(56, 'root', '', '$2y$10$f1z2P2qnoHwo54acs9YUEeh5wdfkdzckCLDxcPfzL9Sv/uojjKweG', NULL, NULL, NULL),
(57, 'root', '', '$2y$10$ljx9Kg9Tlzcv.tOXM.7C3.FC2j4n4HGUCg.YHXdaGCl6AYqLLTVe6', NULL, NULL, NULL),
(58, 'root', '', '$2y$10$gPE4u6QpfkS9aAq4r3MLu.fBub13Iut9eJqXBIfiVdj6rfftHduK6', NULL, NULL, NULL),
(59, 'root', '', '$2y$10$WiQKqUtZ/G3WmR51uhLpO..m998K4cNlYV2F253q8HkS2VvtEDxnO', NULL, NULL, NULL),
(60, 'root', '', '$2y$10$.wR9s8v9zgF/U2Z0ZhjEk.VgipfiDZvhu6uPxOENWrgieYLVL2sgu', NULL, NULL, NULL),
(61, 'root', '', '$2y$10$JnFXCQmaSBi3bB3GyntG7eAwh669to2zcMGP2YkfVEciOn1gKVtyO', NULL, NULL, NULL),
(62, 'root', '', '$2y$10$MvRsLNL7I0L.OCpiVoLUUuT3oVe.z9BW69goCyAj9Y86ab8MoZxhS', NULL, NULL, NULL),
(63, 'root', '', '$2y$10$KhPMiPu05EpgtxVR.fvbnOv2T8II59HRnGcWiBMhss6xSSwCA7MlG', NULL, NULL, NULL),
(64, 'root', '', '$2y$10$lkEZkzeWRqp.yytFOuKApuXb6DVJmcE0wQGZdz7iv7Dc4ha4VS2kO', NULL, NULL, NULL),
(65, 'root', '', '$2y$10$Ffwl5iNzhFkAKQcev0kr0.hsbZeaazUWfzo2XqZbuUTe07V7tSxnO', NULL, NULL, NULL),
(66, 'root', '', '$2y$10$z8acTsm88lIsJYT/6vq6NONWa4fZTR69Mm3sfra1kC/YmTVmrBpu2', NULL, NULL, NULL),
(67, 'root', '', '$2y$10$E0zd3EjgvLHLvk0CQf/1te7TnoK7TwJ5MZU6CCAbJI3VEhijdWjQ.', NULL, NULL, NULL),
(68, 'root', '', '$2y$10$bfaRDs5xbgZEKRnsBZxY4uAvsGow68q.M8ADm7bRpw3.n596GKAt.', NULL, NULL, NULL),
(69, 'root', '', '$2y$10$q2BjNNqwPQO9B/Xg7sFGMOrCx9S7nDPadK3Rvl33HgMt5vnQ522fy', NULL, NULL, NULL),
(70, 'ooo', 'ooo@gmail.com', '$2y$10$ZG76Qi6dZwHRkxZ6EjfC9eNuW.hysJNPR.4S8PDU.C9ZPpqb0G5FO', NULL, NULL, NULL),
(71, 'root', '', '$2y$10$DTKMIYM04Wr4xUZxKN8N3evxzcj1Hke7GTMC.p/vDVKfib8Jl1lF2', NULL, NULL, NULL),
(72, 'pain', 'pain@gmail.com', '$2y$10$weR9Y4qaIRXQNjYYZDoDmOlFjpDhj22KOqHTGjZc4hJONeHxQ1I.2', NULL, NULL, NULL),
(73, 'haok', 'haok@gmail.com', '$2y$10$PyyfGDGYvn4/I91zJT.Ame2ukHnDm8XHI/m7BOID.prKCZHweOZn.', NULL, NULL, 'uploads/default_profile.png'),
(74, 'root', '', '$2y$10$nmudTsBJPzi/8t.3cb1HleCtQMQ20jPupkZ7RF.mg/vJmLvAAdXcG', NULL, NULL, NULL),
(75, 'saree', 'saree@gmail.com', '$2y$10$Y8uNok2ZXFSwqdjakBel0.xI.kprua1lQHUG81A91UHZuU.6Sz13i', NULL, NULL, NULL),
(76, 'root', '', '$2y$10$.aZxTR/jsa1NZV5Xd/8vtOSQdCslhviVc/kk.Fsx.X61p5Hz50L6q', NULL, NULL, NULL),
(77, 'sariya', 'sariya@gmail.com', '$2y$10$QZPsgxXAy0s0pzabS04u7ua2DzzrLEBzpoDgsUcU4F5W27iWRq9GK', NULL, NULL, 'uploads/default_profile.png'),
(78, 'seem', 'seem@gmail.com', '$2y$10$OUYy2vDDcqfi3zEkZWMPLuuU3IBp.QNfhHw/ZZkePWG61QFoGseAm', NULL, NULL, NULL),
(79, 'hall', 'hall@gmail.com', '$2y$10$4zBRyCJUWOUDVVGOHzl0Z.dLKeX04FpuQRvf1/Fsh4J1/W/J.rahC', NULL, NULL, 'uploads/'),
(80, 'hamma', 'hamma@gmail.com', '$2y$10$z6kjgQPlzlEVpyOZhrnF.uFvE5cK9PINX/cORKKqFbm5.eum9W0Ni', NULL, NULL, 'uploads/'),
(81, 'news', 'news@gmail.com', '$2y$10$ciBZxqE.ZDYD6md3.Ca1eem1NR3teRellET4N6Zx23BECEtveLMgO', NULL, NULL, ' '),
(82, 'gas', 'gas@gmail.com', '$2y$10$Dk0Fmd8Wr1NB4UsN2SKO9u/JS.OxPO3/Ajwh1QXYX64mX25EX8Y1G', NULL, NULL, ' '),
(83, 'faa', 'faa@gmail.com', '$2y$10$XKteicQkD7J7kBUxaWlCm.fH23KDR9hraLm58Z6CwIzRS.4FwB3ym', NULL, NULL, NULL),
(84, 'testt', 'testt@gmail.com', '$2y$10$h15iS0/cadNHFdXNxGjrF.9hnUZRGljdvfsX08ypm21osr4wOyD7q', NULL, NULL, NULL),
(85, 'hako', 'hako@gmail.com', '$2y$10$Efe8atpipjHiQd6Hz5FsD.ZJNFDHKkfych0QIOZ5jtxaOGfYCRE7m', NULL, NULL, NULL),
(86, 'meee', 'meee@gmail.com', '$2y$10$dzJw1l8OsGuNGQI4xsRo1ubnMrLBJzGjtUkrebxc20DNP5XyOnwk.', NULL, NULL, NULL),
(87, 'haha', 'haha@gmail.com', '$2y$10$zEOhiwmvrsriP33U4dZdcOdDABrDPBFfQ2L9LADuQFKAEwTGeyaBe', NULL, NULL, NULL),
(88, 'mass', 'mass@gmail.com', '$2y$10$qWtfnJRTWSvWXzXCkjAnIeY549298emj6YtVDTwxRTC.2PUUkC31W', NULL, NULL, NULL),
(89, 'hass', 'has@gmail.com', '$2y$10$yUdLKBaVwfJaRUTD1FhSs.ci/2g.jgkrCpUGV5u/BfaS2useIbrhm', NULL, NULL, ' '),
(90, 'last', 'last@gmail.com', '$2y$10$IlQ6NptflBNzimaceGAZUe8VWPw80AN/2vt96KlDSR02Xa4BDwK0C', NULL, NULL, NULL),
(91, 'try', 'try@gmail.com', '$2y$10$kj8DIAXDcKYWrxVN1CwZCOC9WaYRouOzreqMns5xb4CGN9Kr0dKv6', NULL, NULL, ' '),
(92, 'hap', 'hap@gmail.com', '$2y$10$6YKgJ2mpYU1ilsovbL7EV.bMW23g.SLQjcCs2IGdKp75kupIL6aV.', NULL, NULL, NULL),
(93, 'neww', 'neww@gmail.com', '$2y$10$894PAXIMa0kxVX7NlGpSUOusZpgt2r19vIVJGjqMKX.jwSABfbjR6', NULL, NULL, NULL),
(94, 'tire', 'tire@gmail.com', '$2y$10$f66YZ/lxru11w/CLJBkBVe30iyBX6OdjYOkqtLnbtB/Zj0OdELWKi', NULL, NULL, NULL),
(95, 'ko', 'ko@gmail.com', '$2y$10$ohvaDs/gaFQuiDp/WCnEW.248qGGMxT8f4p3.JzH4jserAapAfYxq', NULL, NULL, NULL),
(96, 'zeen', 'zeen@gmail.com', '$2y$10$8lfHVaL0/DAl8LDqY.zSQu2.dqwb2IbwwxgvDeNRgRpcZ/z/9Vwha', NULL, NULL, NULL),
(97, 'satis', 'satis@gmail.com', '$2y$10$4Wq1PokYwQYYxFHEmS1x6.xbOShnyDz33k1WXM6ERqrjMy3X2q8/i', NULL, NULL, ' '),
(98, 'hss', 'hss@gmail.com', '$2y$10$C8BiXgOPY96dyAl/OxOww.v3/2aqmmSoel8yCzUphfRiC710jWDF.', NULL, NULL, NULL),
(99, 'weird', 'weird@gmail.com', '$2y$10$k9i7v64mJJwi8RpmHPYqPOaUi6WA9MmNuLGQL4FP/TYoKg6n5rm9a', NULL, NULL, ' '),
(100, 'hasa', 'hasa@gmail.com', '$2y$10$9f3u2SGMDRNOK.VWNeOPPep3.nJrxiWRnEjd7z.wcv9ZKdWa/mS4K', NULL, NULL, NULL),
(101, 'hammo', 'hammo@gmail.com', '$2y$10$xZ9uaplrxRfKbCOrxmKT/eNFeMB6hIXNzZfP/xNmuUfYe0wzxSqXm', NULL, NULL, NULL),
(102, 'fk', 'fk@gmail.com', '$2y$10$Jor/gGa8dcNJf89o9PMlI.jv2Rz8MEDtNSP3XcjT1/cnL23pQ1Gd2', NULL, NULL, NULL),
(103, 'jjj', 'jjj@gmail.com', '$2y$10$RydVnqG4uSIDEuM/9xVkWuEfPwQ5Xfss5royRuXMm09BhEIWqw8D6', NULL, NULL, NULL),
(104, 'ggg', 'ggg@gmail.com', '$2y$10$D5L9LUyJIYgK/IDwrfv3ru0ggLKfVMedTRorVe.YJndSzKAIz2i8q', NULL, NULL, NULL),
(105, 'fasd', 'fast@gmail.com', '$2y$10$GUaKEBGGnF9Py1qthPea2OUhd0N3DGiIwuoa1CRofbFE8sluPY9Wa', NULL, NULL, NULL),
(106, 'wish', 'wish@gmail.com', '$2y$10$TNVDtshKGRn3CWWVLyKpqO9RkrC/CPCk7j6sQR8xhMwDklVHwfpde', NULL, NULL, ' '),
(107, 'hall', 'hallo@gmail.com', '$2y$10$DQKkbwRNm1x1VWwuOy2Ksu6fQDcLNTxlahb9cRx4JBGZslRtqXz.y', NULL, NULL, NULL),
(108, 'deal', 'deal@gmail.com', '$2y$10$jIPZTVIPRIiqvYK8AChPq.IXeCnspRD2cNC5UAGvVC/RArJSyDHne', NULL, NULL, NULL),
(109, 'sahan', 'sahan@gmail.com', '$2y$10$uHVsRHX/oVgJV3WlDKI.6eD29IVIBfsVvt9OoKvWxwBTF0c19omwO', NULL, NULL, NULL),
(110, 'saman', 'saman@gmail.com', '$2y$10$LeEEVzdXBuge09QDXGXACOvLNc35r1d.OauqurKNuS0Q4dBs0rk4K', NULL, NULL, NULL),
(111, 'amal', 'amal@gmail.com', '$2y$10$2tO51yqFr7yd0NMPCL8Gwuu55QD9D/35qDs5UfB1EtJrGrfcYv.vO', NULL, NULL, NULL),
(112, 'john', 'john@gmail.com', '$2y$10$bL4gO13mluv2Je0z77OQEubmJFGA54.M3eXLVCWOvWOhgSBbfnwhS', NULL, NULL, ' ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD KEY `id` (`id`);

--
-- Indexes for table `selections`
--
ALTER TABLE `selections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

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
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `selections`
--
ALTER TABLE `selections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
