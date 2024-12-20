-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2024 at 08:04 AM
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
-- Database: `movieprojectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `casts`
--

CREATE TABLE `casts` (
  `id` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `url` varchar(255) NOT NULL,
  `characterName` varchar(120) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `casts`
--

INSERT INTO `casts` (`id`, `movieId`, `userId`, `name`, `url`, `characterName`, `dateCreated`, `dateUpdated`) VALUES
(5, 310, 1, 'Jim Carrey', 'https://image.tmdb.org/t/p/w200/zk6VDRIdIuioCK8feZNXnojuL8J.jpg', 'Bruce Nolan', '2024-12-04 18:00:12', '0000-00-00 00:00:00'),
(6, 310, 1, 'Morgan Freeman', 'https://image.tmdb.org/t/p/w200/jPsLqiYGSofU4s6BjrxnefMfabb.jpg', 'God', '2024-12-05 12:03:19', '0000-00-00 00:00:00'),
(7, 310, 1, 'Catherine Bell', 'https://image.tmdb.org/t/p/w200/hziXYpU5nDWUAdoPZy6spHBH2pf.jpg', 'Susan Ortega', '2024-12-05 12:03:31', '0000-00-00 00:00:00'),
(8, 310, 1, 'Jennifer Aniston', 'https://image.tmdb.org/t/p/w200/qPXG41rYdUGldZhMhuZFvmpZKRp.jpg', 'Grace Connelly', '2024-12-05 12:18:29', '0000-00-00 00:00:00'),
(9, 310, 1, 'Steve Carell', 'https://image.tmdb.org/t/p/w200/1LQDqpcDQTtQb90o9vagbuCHueb.jpg', 'Evan Baxter', '2024-12-05 13:26:35', '0000-00-00 00:00:00'),
(10, 310, 1, 'Nora Dunn', 'https://image.tmdb.org/t/p/w200/x9NAUBciKKxDaYRcntc4vKjqilG.jpg', 'Ally Loman', '2024-12-05 13:29:05', '0000-00-00 00:00:00'),
(11, 44493, 1, 'Gérard Tichy', 'https://image.tmdb.org/t/p/w200/kOTqx2ej3HCYSkwGhWsPlgKVL7H.jpg', 'Rodrigue De Blancheville', '2024-12-05 17:13:21', '0000-00-00 00:00:00'),
(12, 44493, 1, 'Helga Liné', 'https://image.tmdb.org/t/p/w200/wYFRnBNgzjkJKR08E9ELcEHAe7T.jpg', 'Miss Eleonore', '2024-12-05 17:13:35', '0000-00-00 00:00:00'),
(13, 44493, 1, 'Paco Morán', 'https://image.tmdb.org/t/p/w200/dx52G5IShsmMnWCx8pjhKMCYzNg.jpg', 'Alistair', '2024-12-05 17:13:45', '0000-00-00 00:00:00'),
(14, 16418, 1, 'Anna Cummer', 'https://image.tmdb.org/t/p/w200/8LpZ95uYfhjdx0wTSGB0HMOQUTB.jpg', 'Thumbelina (voice)', '2024-12-05 17:26:51', '0000-00-00 00:00:00'),
(15, 16418, 1, 'Kelly Sheridan', 'https://image.tmdb.org/t/p/w200/sxg2oRxwAEWd2Y8baJarjwC1XPA.jpg', 'Barbie Roberts (voice)', '2024-12-05 17:27:00', '0000-00-00 00:00:00'),
(16, 16418, 1, 'Tabitha St. Germain', 'https://image.tmdb.org/t/p/w200/ljFeqt5uanRHqKTuMumd0iMW69b.jpg', 'Chrysella (voice)', '2024-12-05 17:27:08', '0000-00-00 00:00:00'),
(17, 16418, 1, 'Garry Chalk', 'https://image.tmdb.org/t/p/w200/jESGnBSP0OjFxJejN1OPsjXA9sJ.jpg', 'Louie (voice)', '2024-12-05 17:27:21', '0000-00-00 00:00:00'),
(18, 1029119, 1, 'Taraji P. Henson', 'https://image.tmdb.org/t/p/w200/jUU2X9mDwJaAniEmJOfvImBS9qb.jpg', 'Belle Bottom (voice)', '2024-12-06 10:29:16', '0000-00-00 00:00:00'),
(19, 1029119, 1, 'Steve Carell', 'https://image.tmdb.org/t/p/w200/1LQDqpcDQTtQb90o9vagbuCHueb.jpg', 'Gru (voice)', '2024-12-06 10:29:29', '0000-00-00 00:00:00'),
(20, 1029119, 1, 'Antonio Raul Garcia', 'https://image.tmdb.org/t/p/w200/d7yta58jDKJS1HIYhRIrFBzVIoA.jpg', 'Additional Voices (voice)', '2024-12-06 10:29:47', '0000-00-00 00:00:00'),
(21, 1029119, 1, 'Steve Coogan', 'https://image.tmdb.org/t/p/w200/tT7OXc2qA6hlREHXdwGLp0XihzA.jpg', 'Silas Ramsbottom (voice)', '2024-12-06 10:30:09', '0000-00-00 00:00:00'),
(22, 1241982, 1, 'Catherine Laga\'Aia', 'https://image.tmdb.org/t/p/w200/gzj4KyrN4liQ8Stw0AytjP32rFR.jpg', 'Moana', '2024-12-06 22:53:51', '0000-00-00 00:00:00'),
(23, 1241982, 1, 'John Tui', 'https://image.tmdb.org/t/p/w200/2jIc9M5kl2GmK8fZtbtUr2s1jkS.jpg', 'Chief Tui', '2024-12-06 22:54:12', '0000-00-00 00:00:00'),
(24, 1241982, 1, 'Frankie Adams', 'https://image.tmdb.org/t/p/w200/aAUHUSf0lh3OBRoaiCRL9ep8lfL.jpg', 'Sina', '2024-12-06 22:54:23', '0000-00-00 00:00:00'),
(25, 1241982, 1, 'Rena Owen', 'https://image.tmdb.org/t/p/w200/8s0ePZ1ifvE7NlvtLOAWNXLjdx4.jpg', 'Gramma Tala', '2024-12-06 22:54:48', '0000-00-00 00:00:00'),
(27, 1241982, 1, 'Dwayne Johnson', 'https://image.tmdb.org/t/p/w200/5QApZVV8FUFlVxQpIK3Ew6cqotq.jpg', 'Maui', '2024-12-06 22:55:11', '0000-00-00 00:00:00'),
(28, 1029119, 1, 'Bill Farmer', 'https://image.tmdb.org/t/p/w200/lhezx68R12s5Bsv7d77BrQb7tWA.jpg', 'Additional Voices (voice)', '2024-12-07 00:30:32', '0000-00-00 00:00:00'),
(29, 1029119, 1, 'Geoffrey Rush', 'https://image.tmdb.org/t/p/w200/4zQuC1j0p7HkJlfuT8aJoyZAgQm.jpg', 'Narrator (voice)', '2024-12-07 00:30:53', '0000-00-00 00:00:00'),
(30, 1029119, 1, 'Carlos Alazraqui', 'https://image.tmdb.org/t/p/w200/d2hufnjlfsZiY7N9NLZ6b7FE1IZ.jpg', 'Additional Voices (voice)', '2024-12-07 00:32:03', '0000-00-00 00:00:00'),
(32, 533535, 1, 'Jon Favreau', 'https://image.tmdb.org/t/p/w200/tnx7iMVydPQXGOoLsxXl84PXtbA.jpg', 'Happy Hogan', '2024-12-07 00:33:33', '0000-00-00 00:00:00'),
(33, 533535, 1, 'Morena Baccarin', 'https://image.tmdb.org/t/p/w200/w7azo5rPMzcJE8uyEtu9hiqeliV.jpg', 'Vanessa', '2024-12-07 00:33:47', '0000-00-00 00:00:00'),
(34, 533535, 1, 'Leslie Uggams', 'https://image.tmdb.org/t/p/w200/peLaqLcs3y2WY4TbrLOXQGt9I8S.jpg', 'Blind Al', '2024-12-07 00:34:00', '0000-00-00 00:00:00'),
(35, 533535, 1, 'Chris Evans', 'https://image.tmdb.org/t/p/w200/3bOGNsHlrswhyW79uvIHH1V43JI.jpg', 'Johnny Storm', '2024-12-07 00:34:11', '0000-00-00 00:00:00'),
(36, 624479, 1, 'Tobey Maguire', 'https://image.tmdb.org/t/p/w200/ncF4HivY2W6SQW5dEP3N3I4mfT0.jpg', 'Spider-Man / Peter Parker', '2024-12-07 00:36:37', '0000-00-00 00:00:00'),
(37, 624479, 1, 'Joe Manganiello', 'https://image.tmdb.org/t/p/w200/mTdACmitdrwor0Nrv5sr0u123vZ.jpg', 'Flash Thompson', '2024-12-07 00:36:47', '0000-00-00 00:00:00'),
(38, 624479, 1, 'John Paxton', 'https://image.tmdb.org/t/p/w200/ndSd4nnukk03loB6RKx3iuP5xfx.jpg', 'Houseman', '2024-12-07 00:36:55', '0000-00-00 00:00:00'),
(39, 624479, 1, 'J.K. Simmons', 'https://image.tmdb.org/t/p/w200/ScmKoJ9eiSUOthAt1PDNLi8Fkw.jpg', 'J. Jonah Jameson', '2024-12-07 00:37:06', '0000-00-00 00:00:00'),
(40, 912649, 1, 'Tom Hardy', 'https://image.tmdb.org/t/p/w200/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg', 'Eddie Brock / Venom', '2024-12-07 00:38:23', '0000-00-00 00:00:00'),
(41, 912649, 1, 'Woody Harrelson', 'https://image.tmdb.org/t/p/w200/x9jcwNJxpbqx3YARrifLR5xU4Ty.jpg', 'Cletus Kasady / Carnage', '2024-12-07 00:38:30', '0000-00-00 00:00:00'),
(42, 912649, 1, 'Melora Walters', 'https://image.tmdb.org/t/p/w200/FSxiDBekrKgmzow1j3UhmNHOhI.jpg', 'Homeless Woman Maria', '2024-12-07 00:38:38', '0000-00-00 00:00:00'),
(43, 1359227, 1, 'Will Friedle', 'https://image.tmdb.org/t/p/w200/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg', 'Dennis / Demolition Man (voice)', '2024-12-07 01:00:35', '0000-00-00 00:00:00'),
(44, 1359227, 1, 'John Stamos', 'https://image.tmdb.org/t/p/w200/5hFEsxkqI6uGa9ltX2soVqt8r1M.jpg', 'Iron Man (voice)', '2024-12-07 01:00:44', '0000-00-00 00:00:00'),
(46, 1359227, 1, 'Scott Porter', 'https://image.tmdb.org/t/p/w200/uvkZrnWSwxVn3oau2BwHuvUDzcb.jpg', 'Ice Man / Moon Knight (voice)', '2024-12-07 01:01:17', '0000-00-00 00:00:00'),
(47, 1359227, 1, 'Julie Nathanson', 'https://image.tmdb.org/t/p/w200/3f0AHlAUCBEMsGd5O6fqTeQ8yrd.jpg', 'Dazzler (voice) / Titania (voice)', '2024-12-07 01:01:34', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `tmdbId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `overview` text NOT NULL,
  `popularity` float NOT NULL,
  `releaseDate` date NOT NULL,
  `voteAverage` float NOT NULL,
  `backdropPath` varchar(255) NOT NULL,
  `posterPath` varchar(255) NOT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT 0,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `userId`, `tmdbId`, `title`, `overview`, `popularity`, `releaseDate`, `voteAverage`, `backdropPath`, `posterPath`, `isFeatured`, `dateCreated`, `dateUpdated`) VALUES
(11, 1, 1029119, 'Minions & More 1', 'This collection of 10 short films produced by Illumination includes: From the \"Despicable Me\" franchise: Puppy (2013); Minion Scouts (2019); Training Wheels (2013); The Secret Life of Kyle (2017); Santa\'s Little Helpers (2019).  From the \"Grinch\" franchise: The Dog Days of Winter (2019).  From the \"Secret Life of Pets\" franchise: Norman Television (2016); Weenie (2016).  From the \"Sing\" franchise: Love at First Sight (2017).  From the \"Lorax\" franchise: Forces of Nature (2012).', 39.231, '2022-09-27', 6.979, 'https://image.tmdb.org/t/p/original//e04iBCX3582bPRsYUb82texxZIY.jpg', 'https://image.tmdb.org/t/p/original//wCQBzTOigP5eCyBAjQGlWYNo5DR.jpg', 0, '2024-12-06 09:02:58', '0000-00-00 00:00:00'),
(12, 1, 533535, 'Deadpool & Wolverine', 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.', 880.666, '2024-07-24', 7.7, 'https://image.tmdb.org/t/p/original//dvBCdCohwWbsP5qAaglOXagDMtk.jpg', 'https://image.tmdb.org/t/p/original//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg', 0, '2024-12-06 09:03:30', '0000-00-00 00:00:00'),
(13, 1, 1241982, 'Moana 2', 'After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she\'s ever faced.', 5466.54, '2024-11-27', 6.9, 'https://image.tmdb.org/t/p/original//tElnmtQ6yz1PjN1kePNl8yMSb59.jpg', 'https://image.tmdb.org/t/p/original//yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg', 0, '2024-12-06 09:37:21', '0000-00-00 00:00:00'),
(14, 1, 624479, 'Superman II: The Richard Donner Cut', 'Superman agrees to sacrifice his powers to start a relationship with Lois Lane, unaware that three Kryptonian criminals he inadvertently released are conquering Earth.', 18.621, '2006-11-02', 7.4, 'https://image.tmdb.org/t/p/original//rRo1EzVd0E8GAOAeCulPpekKwjP.jpg', 'https://image.tmdb.org/t/p/original//oPYeFSFO0ljmly8XvrjwWzVXT6e.jpg', 0, '2024-12-06 09:49:39', '0000-00-00 00:00:00'),
(15, 1, 912649, 'Venom: The Last Dance', 'Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie\'s last dance.', 4932.83, '2024-10-22', 6.4, 'https://image.tmdb.org/t/p/original//3V4kLQg0kSqPLctI5ziYWabAZYF.jpg', 'https://image.tmdb.org/t/p/original//aosm8NMQ3UyoBVpSxyimorCQykC.jpg', 0, '2024-12-06 10:04:41', '0000-00-00 00:00:00'),
(16, 1, 1359227, 'LEGO Marvel Avengers: Mission Demolition', 'A young, aspiring hero and superhero fan inadvertently unleashes a powerful new villain looking to rid the world of the Avengers.', 89.813, '2024-10-17', 6.7, 'https://image.tmdb.org/t/p/original//Al127H6f1RXpESdg0MGNL2g8mzO.jpg', 'https://image.tmdb.org/t/p/original//k3LGf9afqmUZiAJ9nffBinpOhOI.jpg', 0, '2024-12-06 10:05:44', '0000-00-00 00:00:00'),
(17, 1, 76600, 'Avatar: The Way of Water', 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.', 158.004, '2022-12-14', 7.62, 'https://image.tmdb.org/t/p/original//8rpDcsfLJypbO6vREc0547VKqEv.jpg', 'https://image.tmdb.org/t/p/original//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg', 0, '2024-12-06 10:06:07', '0000-00-00 00:00:00'),
(19, 1, 545742, 'ONE PIECE エピソードオブ空島', 'One day, a giant ship falls onto the Straw Hats from the sky. After a narrow escape, and while they are still in shock, a map to the “Sky Island” is carried to them by the wind. While researching for the way there, they meet another pirate and learn that he is a descendant of an infamous Sky Island explorer who was even depicted in a picture book “Noland The Liar” four centuries ago. However, Noland was possibly not a liar after all and might actually have gone to the Sky Island.', 26.591, '2018-08-25', 7, 'https://image.tmdb.org/t/p/original//ePbsFvP7SLZxMKLsHb8S7zzT55B.jpg', 'https://image.tmdb.org/t/p/original//whvgyEpPqvKXP0vZE4PMkoUmRqb.jpg', 0, '2024-12-07 00:40:44', '0000-00-00 00:00:00'),
(20, 1, 580489, 'Venom: Let There Be Carnage', 'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.', 379.055, '2021-09-30', 6.799, 'https://image.tmdb.org/t/p/original//vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg', 'https://image.tmdb.org/t/p/original//1MJNcPZy46hIy2CmSqOeru0yr5C.jpg', 0, '2024-12-07 00:41:40', '0000-00-00 00:00:00'),
(21, 1, 317442, 'THE LAST -NARUTO THE MOVIE-', 'Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.', 56.103, '2014-12-06', 7.4, 'https://image.tmdb.org/t/p/original//sqnjUZlq8TGK2E3LaGIPnZMd7WQ.jpg', 'https://image.tmdb.org/t/p/original//bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg', 0, '2024-12-07 00:42:53', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `userId`, `movieId`, `url`, `description`, `dateCreated`, `dateUpdated`) VALUES
(4, 1, 310, 'https://image.tmdb.org/t/p/w500/llyfug8S5O3ha3pfZpdKKmOqg4t.jpg', 'Photo from TMDB', '2024-12-05 16:14:16', '0000-00-00 00:00:00'),
(5, 1, 310, 'https://image.tmdb.org/t/p/w500/tBGRwsE1XKFUyHL1r85OpHP2hM2.jpg', 'Photo from TMDB', '2024-12-05 16:14:22', '0000-00-00 00:00:00'),
(6, 1, 310, 'https://image.tmdb.org/t/p/w500/8C5eSpPh0d3feE9kdYznm4dfkp1.jpg', 'Photo from TMDB', '2024-12-05 16:15:06', '0000-00-00 00:00:00'),
(9, 1, 310, 'https://image.tmdb.org/t/p/w500/3I41dyZih2ntqxC3LY77ZtgBdFm.jpg', 'Photo from TMDB', '2024-12-05 17:02:30', '0000-00-00 00:00:00'),
(10, 1, 44493, 'https://image.tmdb.org/t/p/w500/neZT4joTOblr8p4Uxa4sqDOsKcR.jpg', 'Photo from TMDB', '2024-12-05 17:12:44', '0000-00-00 00:00:00'),
(11, 1, 44493, 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', 'dfasfsfsfsf', '2024-12-05 17:15:50', '0000-00-00 00:00:00'),
(12, 1, 16418, 'https://image.tmdb.org/t/p/w500/9mNGvIBAfW15X5rHB7V9PljwuEx.jpg', 'Photo from TMDB', '2024-12-05 17:27:58', '0000-00-00 00:00:00'),
(13, 1, 16418, 'https://image.tmdb.org/t/p/w500/QAL6ZI2mLEXiIUGhGYd1fYuj9Q.jpg', 'Photo from TMDB', '2024-12-05 17:27:59', '0000-00-00 00:00:00'),
(14, 1, 16418, 'https://image.tmdb.org/t/p/w500/y8w1IaNDP0jMcZ0AfSruXlEVllY.jpg', 'Photo from TMDB', '2024-12-05 17:28:00', '0000-00-00 00:00:00'),
(15, 1, 1029119, 'https://4.bp.blogspot.com/-Dfue6sgjmN8/VUDbRZ9ushI/AAAAAAAAAVc/a5c8ztZvqFs/s1600/Minions+2.jpg', 'minions ', '2024-12-06 10:31:41', '0000-00-00 00:00:00'),
(17, 1, 1241982, 'https://image.tmdb.org/t/p/w500/jucn2CMjsraKDGUJ9eAfm3ZqvMI.jpg', 'Photo from TMDB', '2024-12-06 22:25:16', '0000-00-00 00:00:00'),
(18, 1, 1241982, 'https://image.tmdb.org/t/p/w500/lNVEFt2FQVmOGiAaBMdgJW86Epa.jpg', 'Photo from TMDB', '2024-12-06 22:25:35', '0000-00-00 00:00:00'),
(19, 1, 1241982, 'https://image.tmdb.org/t/p/w500/lQy8AeqG39WtlVTFKRd9OpWkKxP.jpg', 'Photo from TMDB', '2024-12-06 22:25:39', '0000-00-00 00:00:00'),
(20, 1, 1241982, 'https://image.tmdb.org/t/p/w500/c1JdGeBm2cTtsOUnpciiFyex7JI.jpg', 'Photo from TMDB', '2024-12-06 22:25:41', '0000-00-00 00:00:00'),
(21, 1, 1241982, 'https://image.tmdb.org/t/p/w500/Ab8LMxkr9muWFN0N9poKaC7lyAF.jpg', 'Photo from TMDB', '2024-12-06 22:25:42', '0000-00-00 00:00:00'),
(22, 1, 1029119, 'https://image.tmdb.org/t/p/w500/jLaUDObtKO3EGpz9fxBVml35BHK.jpg', 'Photo from TMDB', '2024-12-06 22:41:43', '0000-00-00 00:00:00'),
(23, 1, 1029119, 'https://image.tmdb.org/t/p/w500/3kqWON0J1VXO8xm2dpOC1ob2It6.jpg', 'Photo from TMDB', '2024-12-06 22:41:45', '0000-00-00 00:00:00'),
(24, 1, 1029119, 'https://image.tmdb.org/t/p/w500/iNhdomHWakdQbrE8oFfD4dzA7WF.jpg', 'Photo from TMDB', '2024-12-06 22:41:47', '0000-00-00 00:00:00'),
(25, 1, 1029119, 'https://image.tmdb.org/t/p/w500/dynNVpLnGy1YoVHf8b7o1HT7TsI.jpg', 'Photo from TMDB', '2024-12-06 22:41:49', '0000-00-00 00:00:00'),
(26, 1, 1241982, 'https://image.tmdb.org/t/p/w500/gBp4DWiyl7sUMKPBDVM4MyVTuIV.jpg', 'Photo from TMDB', '2024-12-06 22:42:53', '0000-00-00 00:00:00'),
(27, 1, 1241982, 'https://image.tmdb.org/t/p/w500/rmLSoqMYRhzXkxWHIuUZZhekTAN.jpg', 'Photo from TMDB', '2024-12-06 22:42:56', '0000-00-00 00:00:00'),
(28, 1, 1241982, 'https://image.tmdb.org/t/p/w500/3J501RDVR80dP9J46b8okmB6g0G.jpg', 'Photo from TMDB', '2024-12-06 22:42:58', '0000-00-00 00:00:00'),
(29, 1, 1241982, 'https://image.tmdb.org/t/p/w500/naQyovlviCHb28LMUi20iKymRi5.jpg', 'Photo from TMDB', '2024-12-06 22:43:01', '0000-00-00 00:00:00'),
(30, 1, 1241982, 'https://image.tmdb.org/t/p/w500/ucF4aQhaj0hWdV4jtBSqXh2zgXi.jpg', 'Photo from TMDB', '2024-12-06 22:43:03', '0000-00-00 00:00:00'),
(31, 1, 1241982, 'https://image.tmdb.org/t/p/w500/9wQ9JgNGqLAlUQthuihcxevTp6c.jpg', 'Photo from TMDB', '2024-12-06 22:43:05', '0000-00-00 00:00:00'),
(32, 1, 1241982, 'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/522/1240522-i-b8441aaac8cb', 'Moana - Disney', '2024-12-06 22:52:46', '0000-00-00 00:00:00'),
(33, 1, 533535, 'https://image.tmdb.org/t/p/w500/wNa8cZp4fjF5Fa1oE5HhF6Km7kK.jpg', 'Photo from TMDB', '2024-12-07 00:34:47', '0000-00-00 00:00:00'),
(34, 1, 533535, 'https://image.tmdb.org/t/p/w500/dvBCdCohwWbsP5qAaglOXagDMtk.jpg', 'Photo from TMDB', '2024-12-07 00:34:48', '0000-00-00 00:00:00'),
(35, 1, 533535, 'https://image.tmdb.org/t/p/w500/6amNYUYvoKsZbg8vE00Yzt9Xn7H.jpg', 'Photo from TMDB', '2024-12-07 00:34:49', '0000-00-00 00:00:00'),
(36, 1, 533535, 'https://image.tmdb.org/t/p/w500/waPt1Dv5kWhbNna5rTv2NGfeb7O.jpg', 'Photo from TMDB', '2024-12-07 00:34:50', '0000-00-00 00:00:00'),
(37, 1, 533535, 'https://image.tmdb.org/t/p/w500/nU5NrhR5VUedB0UIcKdDpOkTnna.jpg', 'Photo from TMDB', '2024-12-07 00:34:50', '0000-00-00 00:00:00'),
(38, 1, 533535, 'https://image.tmdb.org/t/p/w500/lD4mhKoiaXpKrtBEjACeWgz7w0O.jpg', 'Photo from TMDB', '2024-12-07 00:34:51', '0000-00-00 00:00:00'),
(39, 1, 533535, 'https://image.tmdb.org/t/p/w500/qRlSSvaGvoDLvFlFcRM9gYXA4cE.jpg', 'Photo from TMDB', '2024-12-07 00:34:53', '0000-00-00 00:00:00'),
(40, 1, 533535, 'https://image.tmdb.org/t/p/w500/ufpeVEM64uZHPpzzeiDNIAdaeOD.jpg', 'Photo from TMDB', '2024-12-07 00:34:53', '0000-00-00 00:00:00'),
(41, 1, 533535, 'https://image.tmdb.org/t/p/w500/cOoVcVQ3i1m5b2xtqKBtoTSbxC1.jpg', 'Photo from TMDB', '2024-12-07 00:34:55', '0000-00-00 00:00:00'),
(42, 1, 624479, 'https://image.tmdb.org/t/p/w500/qJzloL8O9YHhiWBrhlPfKAtZu2I.jpg', 'Photo from TMDB', '2024-12-07 00:37:28', '0000-00-00 00:00:00'),
(43, 1, 624479, 'https://image.tmdb.org/t/p/w500/2PDTWfuBWQKVC7aPAqJK5UCpz08.jpg', 'Photo from TMDB', '2024-12-07 00:37:30', '0000-00-00 00:00:00'),
(44, 1, 624479, 'https://image.tmdb.org/t/p/w500/n6XixlPYaNhLhmDr9OlRuhfy3bh.jpg', 'Photo from TMDB', '2024-12-07 00:37:30', '0000-00-00 00:00:00'),
(45, 1, 624479, 'https://image.tmdb.org/t/p/w500/xNZcJHhDB1S9bpfMgwWZdXHSYT9.jpg', 'Photo from TMDB', '2024-12-07 00:37:33', '0000-00-00 00:00:00'),
(46, 1, 624479, 'https://image.tmdb.org/t/p/w500/coDwaiWQRZLnvYwexHcMTwmNNlQ.jpg', 'Photo from TMDB', '2024-12-07 00:37:34', '0000-00-00 00:00:00'),
(47, 1, 624479, 'https://image.tmdb.org/t/p/w500/g6wEoc8yrQCLXz8nSvfkQyYkUDU.jpg', 'Photo from TMDB', '2024-12-07 00:37:34', '0000-00-00 00:00:00'),
(48, 1, 624479, 'https://image.tmdb.org/t/p/w500/qNssp9yyxfl5RLPG143BtahfaQe.jpg', 'Photo from TMDB', '2024-12-07 00:37:35', '0000-00-00 00:00:00'),
(49, 1, 624479, 'https://image.tmdb.org/t/p/w500/sFbB3YKGCWhRxo9UhrPR3pFJdse.jpg', 'Photo from TMDB', '2024-12-07 00:37:36', '0000-00-00 00:00:00'),
(50, 1, 624479, 'https://image.tmdb.org/t/p/w500/9TPa9dgVcP7yd99jLmVZi2Ex5AX.jpg', 'Photo from TMDB', '2024-12-07 00:37:37', '0000-00-00 00:00:00'),
(51, 1, 624479, 'https://image.tmdb.org/t/p/w500/aIsKEjunm0HkH7QC1NvxLZK94hF.jpg', 'Photo from TMDB', '2024-12-07 00:37:38', '0000-00-00 00:00:00'),
(52, 1, 912649, 'https://image.tmdb.org/t/p/w500/nsbQwhstoOxpHKlxtPcKUwg2fe.jpg', 'Photo from TMDB', '2024-12-07 00:39:12', '0000-00-00 00:00:00'),
(53, 1, 912649, 'https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg', 'Photo from TMDB', '2024-12-07 00:39:13', '0000-00-00 00:00:00'),
(54, 1, 912649, 'https://image.tmdb.org/t/p/w500/7tPnyLkk5noSixlblbWn52bmbTO.jpg', 'Photo from TMDB', '2024-12-07 00:39:13', '0000-00-00 00:00:00'),
(55, 1, 912649, 'https://image.tmdb.org/t/p/w500/hNsYUryiwxcdeTMkaBcPF3iEg0p.jpg', 'Photo from TMDB', '2024-12-07 00:39:14', '0000-00-00 00:00:00'),
(56, 1, 912649, 'https://image.tmdb.org/t/p/w500/jv2RBHTsDAfY9NOzBs4lIhTSKrO.jpg', 'Photo from TMDB', '2024-12-07 00:39:15', '0000-00-00 00:00:00'),
(57, 1, 912649, 'https://image.tmdb.org/t/p/w500/tm2lnFbSSl99yjoUePvBKd5xCUR.jpg', 'Photo from TMDB', '2024-12-07 00:39:16', '0000-00-00 00:00:00'),
(58, 1, 912649, 'https://image.tmdb.org/t/p/w500/fZL447eRii2HiWBk7QzOIFZoWJd.jpg', 'Photo from TMDB', '2024-12-07 00:39:17', '0000-00-00 00:00:00'),
(59, 1, 912649, 'https://image.tmdb.org/t/p/w500/7WajfTWfq7raotXEz9OsS8JIJrs.jpg', 'Photo from TMDB', '2024-12-07 00:39:18', '0000-00-00 00:00:00'),
(60, 1, 912649, 'https://image.tmdb.org/t/p/w500/h3EG2tfaCukETiibpLhQeTk1lwR.jpg', 'Photo from TMDB', '2024-12-07 00:39:19', '0000-00-00 00:00:00'),
(61, 1, 912649, 'https://image.tmdb.org/t/p/w500/cYnjDncSe6xMeLJCMgarLA576nN.jpg', 'Photo from TMDB', '2024-12-07 00:39:20', '0000-00-00 00:00:00'),
(62, 1, 1359227, 'https://image.tmdb.org/t/p/w500/kg5hBYILpih7L4gPvKQRxyXLASp.jpg', 'Photo from TMDB', '2024-12-07 01:01:53', '0000-00-00 00:00:00'),
(63, 1, 1359227, 'https://image.tmdb.org/t/p/w500/3fSVgE7NtksLzFsiTMrLXmM3kgv.jpg', 'Photo from TMDB', '2024-12-07 01:01:53', '0000-00-00 00:00:00'),
(64, 1, 1359227, 'https://image.tmdb.org/t/p/w500/bCWEHfS98ouF2lOtSGv3OtQdxx3.jpg', 'Photo from TMDB', '2024-12-07 01:01:55', '0000-00-00 00:00:00'),
(65, 1, 1359227, 'https://image.tmdb.org/t/p/w500/zBMzimzw9cVUvknbkULeNRXMc6w.jpg', 'Photo from TMDB', '2024-12-07 01:01:57', '0000-00-00 00:00:00'),
(66, 1, 1359227, 'https://image.tmdb.org/t/p/w500/fIYA8MxXbWBxFJBgzfPvMFHAnsj.jpg', 'Photo from TMDB', '2024-12-07 01:01:58', '0000-00-00 00:00:00'),
(67, 1, 1359227, 'https://image.tmdb.org/t/p/w500/rk71ryuVmVYg2LI2fteMldDTnCW.jpg', 'Photo from TMDB', '2024-12-07 01:01:59', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(128) NOT NULL,
  `middleName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `contactNo` varchar(15) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `middleName`, `lastName`, `contactNo`, `role`) VALUES
(1, 'test@mail.com', '5f4dcc3b5aa765d61d8327deb882cf99', 'string', 'string', 'string', 'string', 'admin'),
(2, 'user@mail.com', 'ee11cbb19052e40b07aac0ca060c23ee', 'Christine', 'Panes', 'Lazaro', '0936758257', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `site` varchar(255) NOT NULL,
  `videoKey` varchar(255) NOT NULL,
  `videoType` varchar(255) NOT NULL,
  `official` tinyint(1) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `userId`, `movieId`, `url`, `name`, `site`, `videoKey`, `videoType`, `official`, `dateCreated`, `dateUpdated`) VALUES
(6, 1, 310, 'https://www.youtube.com/watch?v=jQoNILVFFvs', 'Avengers: Infinity War (2018) - \"Dangers Of Strangersssssssss\" | Movie Clip', 'YouTube', 'jQoNILVFFvs', 'Clip', 0, '2024-12-05 15:34:03', '0000-00-00 00:00:00'),
(9, 1, 310, 'https://www.youtube.com/watch?v=6ZfuNTqbHE8', 'Official Trailer', 'YouTube', '6ZfuNTqbHE8', 'Trailer', 1, '2024-12-05 16:38:22', '0000-00-00 00:00:00'),
(11, 1, 310, 'https://www.youtube.com/watch?v=hAAskAiWOH4', 'Impossible to be a Woman', 'YouTube', 'hAAskAiWOH4', 'Clip', 1, '2024-12-05 16:45:20', '0000-00-00 00:00:00'),
(12, 1, 310, 'https://www.youtube.com/watch?v=aJuUO0ITk4U', 'Ryan Gosling’s “I’m Just Ken” in American Sign Language', 'YouTube', 'aJuUO0ITk4U', 'Clip', 1, '2024-12-05 16:45:24', '0000-00-00 00:00:00'),
(13, 1, 310, 'https://www.youtube.com/watch?v=0XBxoKumlqQ', 'Bruce Almighty Trailer', 'YouTube', '0XBxoKumlqQ', 'Trailer', 0, '2024-12-05 17:23:57', '0000-00-00 00:00:00'),
(14, 1, 16418, 'https://www.youtube.com/watch?v=jKzeD0i5J6A', 'Barbie Presents Thumbelina - Trailer', 'YouTube', 'jKzeD0i5J6A', 'Trailer', 0, '2024-12-05 17:27:38', '0000-00-00 00:00:00'),
(16, 1, 16418, 'https://www.youtube.com/watch?v=enptP0hEnX8', 'Tom and Jerry / Tom Breaks Into The Hotel Scene | Movie CLIP 4K', 'Youtube', 'enptP0hEnX8', 'clip', 0, '2024-12-05 17:31:33', '0000-00-00 00:00:00'),
(17, 1, 1029119, 'https://www.youtube.com/watch?v=QS51gTBSFfQ', 'Kevin, Stuart & Bob Find a New Master Extended Preview', 'YouTube', 'QS51gTBSFfQ', 'Clip', 1, '2024-12-06 10:19:03', '0000-00-00 00:00:00'),
(18, 1, 1029119, 'https://www.youtube.com/watch?v=jc86EFjLFV4', 'Official Trailer 2', 'YouTube', 'jc86EFjLFV4', 'Trailer', 1, '2024-12-06 10:19:27', '0000-00-00 00:00:00'),
(19, 1, 1241982, 'https://www.youtube.com/watch?v=cZSywj-vkxA', 'First Look Announcement', 'YouTube', 'cZSywj-vkxA', 'Teaser', 1, '2024-12-06 22:23:35', '0000-00-00 00:00:00'),
(20, 1, 1241982, 'https://www.youtube.com/watch?v=cHXB-5woeHw', 'Live-Action Moana Announcement', 'YouTube', 'cHXB-5woeHw', 'Featurette', 1, '2024-12-06 22:53:11', '0000-00-00 00:00:00'),
(21, 1, 533535, 'https://www.youtube.com/watch?v=k2q1haFRQaA', 'Deadpool & Wolverine Come Home', 'YouTube', 'k2q1haFRQaA', 'Teaser', 1, '2024-12-07 00:34:21', '0000-00-00 00:00:00'),
(22, 1, 533535, 'https://www.youtube.com/watch?v=nY5IAhjTclY', 'The Visual Effects of Cassandra Nova\'s Powers', 'YouTube', 'nY5IAhjTclY', 'Behind the Scenes', 1, '2024-12-07 00:34:24', '0000-00-00 00:00:00'),
(23, 1, 533535, 'https://www.youtube.com/watch?v=7dOcH4HN5fA', 'All Time', 'YouTube', '7dOcH4HN5fA', 'Teaser', 1, '2024-12-07 00:34:27', '0000-00-00 00:00:00'),
(24, 1, 533535, 'https://www.youtube.com/watch?v=83KmAr0aviA', 'Popcorn and Jazz - 10 Hours', 'YouTube', '83KmAr0aviA', 'Featurette', 1, '2024-12-07 00:34:30', '0000-00-00 00:00:00'),
(25, 1, 533535, 'https://www.youtube.com/watch?v=XBLJ6XOCBdY', 'Watch Deadpool & Wolverine again and again and again and again and again and again and again and aga', 'YouTube', 'XBLJ6XOCBdY', 'Featurette', 1, '2024-12-07 00:34:33', '0000-00-00 00:00:00'),
(26, 1, 624479, 'https://www.youtube.com/watch?v=QFw2CIN2e-Y', 'Wrestling With Spider-Man', 'YouTube', 'QFw2CIN2e-Y', 'Clip', 1, '2024-12-07 00:37:16', '0000-00-00 00:00:00'),
(27, 1, 624479, 'https://www.youtube.com/watch?v=t06RUxPbp_c', 'Official Trailer', 'YouTube', 't06RUxPbp_c', 'Trailer', 1, '2024-12-07 00:37:18', '0000-00-00 00:00:00'),
(28, 1, 624479, 'https://www.youtube.com/watch?v=hXAxys7EKJA', 'Becoming The Spider Wrestler: Bone Saw McGraw Behind The Scenes', 'YouTube', 'hXAxys7EKJA', 'Behind the Scenes', 1, '2024-12-07 00:37:20', '0000-00-00 00:00:00'),
(29, 1, 912649, 'https://www.youtube.com/watch?v=EDbIgO70hKo', 'To Protect and Sever', 'YouTube', 'EDbIgO70hKo', 'Clip', 1, '2024-12-07 00:38:56', '0000-00-00 00:00:00'),
(30, 1, 912649, 'https://www.youtube.com/watch?v=Worz_qCsYvU', 'Extended Preview', 'YouTube', 'Worz_qCsYvU', 'Clip', 1, '2024-12-07 00:38:58', '0000-00-00 00:00:00'),
(31, 1, 912649, 'https://www.youtube.com/watch?v=BaVa3myLuWk', 'SPECIAL FEATURES CLIP \"Designing Venom\"', 'YouTube', 'BaVa3myLuWk', 'Featurette', 1, '2024-12-07 00:38:59', '0000-00-00 00:00:00'),
(32, 1, 912649, 'https://www.youtube.com/watch?v=u9Mv98Gr5pY', 'Official Trailer', 'YouTube', 'u9Mv98Gr5pY', 'Trailer', 1, '2024-12-07 00:39:01', '0000-00-00 00:00:00'),
(33, 1, 912649, 'https://www.youtube.com/watch?v=xLCn88bfW1o', 'Official Trailer 2', 'YouTube', 'xLCn88bfW1o', 'Trailer', 1, '2024-12-07 00:39:04', '0000-00-00 00:00:00'),
(34, 1, 1359227, 'https://www.youtube.com/watch?v=hqfL89ktaoY', 'Official Trailer', 'YouTube', 'hqfL89ktaoY', 'Trailer', 1, '2024-12-07 01:01:45', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `casts`
--
ALTER TABLE `casts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `casts`
--
ALTER TABLE `casts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
