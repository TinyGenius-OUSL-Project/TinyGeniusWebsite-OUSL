-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 14, 2024 at 07:04 PM
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
(97, '2024-12-19', '0732691682', 'Female'),
(99, '2024-12-18', '0732691682', 'Female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

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
