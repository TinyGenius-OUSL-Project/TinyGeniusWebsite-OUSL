-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 21, 2024 at 05:11 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `Id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`Id`, `name`, `email`, `subject`, `message`, `created_at`, `user_id`) VALUES
(3, 'Muzna', 'fathimamuznamuhajireen@gmail.com', 'want to know something', 'Hello! Iâ€™m interested in knowing more about the topics covered on your website. Can you share some details?', '2024-12-12 12:58:03', NULL),
(4, 'Amali', 'amali@gmail.com', 'reset progress', 'Hi there, Iâ€™d like to learn how to reset my childâ€™s progress on the platform. Could you assist?', '2024-12-12 12:58:46', NULL),
(5, 'Kiran', 'kiran@gmail.com', 'trouble in access', 'Hello, Iâ€™m having trouble accessing some activities on the website. Can you help me fix this?', '2024-12-12 12:59:46', NULL),
(6, 'Sahna', 'sahna@gmail.com', 'joining the team', 'Hi Tiny Genius Team, Iâ€™m a teacher/educator and would love to contribute content to your platform. Is that possible?', '2024-12-12 13:00:52', NULL),
(7, 'Muzna', 's22010447@ousl.lk', 'hello', 'how are you', '2024-12-12 13:01:24', NULL),
(8, 'Munshif', 's22010447@ousl.lk', 'name', 'How to add my name?', '2024-12-12 13:01:51', NULL),
(9, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 14:51:19', NULL),
(10, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 14:56:48', 37),
(11, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 14:58:43', 37),
(12, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:04:37', 37),
(13, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:05:19', 37),
(14, 'Fathima', 'fathima@gmail.com', 'Engish', 'Hello!!!!!!!!!!!!!', '2024-12-21 15:07:04', 37),
(15, 'Fathima', 'fathima@gmail.com', 'Engish', 'Hello!!!!!!!!!!!!!', '2024-12-21 15:10:34', 37),
(16, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:17:42', 37),
(17, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:18:07', 37),
(18, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:22:26', 37),
(19, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:27:32', 37),
(20, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:27:38', 37),
(21, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:27:50', 37),
(22, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:29:55', 37),
(23, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:30:34', 37),
(24, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:30:47', 37),
(25, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:31:13', 37),
(26, 'Fathima', 'fathima@gmail.com', 'English', 'hello', '2024-12-21 15:31:30', 37),
(27, 'Fathima', 'fathima@gmail.com', 'maths', 'hello', '2024-12-21 15:31:45', 37),
(28, 'Fathima', 'fathima@gmail.com', 'maths', 'hello', '2024-12-21 15:32:00', 37),
(29, 'Fathima', 'fathima@gmail.com', 'Engish', 'hellllllooooo', '2024-12-21 15:34:18', 37),
(30, 'Fathima', 'fathima@gmail.com', 'Engish', 'hellllllooooo', '2024-12-21 15:37:33', 37),
(31, 'Fathima', 'fathima@gmail.com', 'Engish', 'hellllllooooo', '2024-12-21 15:39:23', 37),
(32, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:39:35', 37),
(33, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:41:27', 37),
(34, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:43:35', 37),
(35, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:26', 37),
(36, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:28', 37),
(37, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:30', 37),
(38, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:30', 37),
(39, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:31', 37),
(40, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:31', 37),
(41, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:32', 37),
(42, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:33', 37),
(43, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:33', 37),
(44, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:34', 37),
(45, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:34', 37),
(46, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:34', 37),
(47, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:34', 37),
(48, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:35', 37),
(49, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:35', 37),
(50, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:46:36', 37),
(51, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:01', 37),
(52, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:02', 37),
(53, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:02', 37),
(54, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:02', 37),
(55, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:03', 37),
(56, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:03', 37),
(57, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:04', 37),
(58, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:06', 37),
(59, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:06', 37),
(60, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:08', 37),
(61, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:09', 37),
(62, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:47:10', 37),
(63, 'Fathima', 'fathima@gmail.com', 'English', 'hi', '2024-12-21 15:49:06', 37),
(64, 'Fathima', 'fathima@gmail.com', 'maths', 'good!!!!!!1', '2024-12-21 15:49:17', 37),
(65, 'Fathima', 'fathima@gmail.com', 'English', 'My name is    ', '2024-12-21 15:49:37', 37),
(66, 'Fathima', 'fathima@gmail.com', 'English', 'My name is    ', '2024-12-21 15:55:01', 37),
(67, 'Fathima', 'fathima@gmail.com', 'English', 'My name is    ', '2024-12-21 15:56:09', 37),
(68, 'Fathima', 'fathima@gmail.com', 'English', 'My name is    ', '2024-12-21 15:56:14', 37),
(69, 'Fathima', 'fathima@gmail.com', 'English', 'My name is    ', '2024-12-21 15:56:52', 37),
(70, 'Fathima', 'fathima@gmail.com', 'maths', 'Good!', '2024-12-21 16:02:29', 37);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
