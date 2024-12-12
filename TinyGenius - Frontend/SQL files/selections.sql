-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 12, 2024 at 02:17 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
(29, 63, '1', '[\"MATHS\",\"ENGLISH\",\"ART\"]', '2024-12-11 02:41:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `selections`
--
ALTER TABLE `selections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `selections`
--
ALTER TABLE `selections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `selections`
--
ALTER TABLE `selections`
  ADD CONSTRAINT `selections_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
