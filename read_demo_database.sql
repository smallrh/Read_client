-- =============================================
-- 阅读应用数据库设计
-- 创建时间: 2025-01-21
-- 描述: React Native阅读应用完整数据库结构
-- =============================================

-- 设置字符集和排序规则
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- =============================================
-- 1. 核心业务表
-- =============================================

-- 1.1 用户表
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` VARCHAR(36) PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) UNIQUE,
    `phone` VARCHAR(20) UNIQUE,
    `password_hash` VARCHAR(255) NOT NULL,
    `avatar_url` VARCHAR(500),
    `nickname` VARCHAR(50),
    `bio` TEXT,
    `gender` ENUM('male', 'female', 'other') DEFAULT 'other',
    `birth_date` DATE,
    `level` INT DEFAULT 1,
    `experience_points` INT DEFAULT 0,
    `reading_coins` INT DEFAULT 0,
    `vip_level` ENUM('none', 'vip', 'svip') DEFAULT 'none',
    `vip_expires_at` DATETIME NULL,
    `login_type` ENUM('password', 'wechat', 'qq', 'weibo', 'apple') DEFAULT 'password',
    `is_phone_verified` BOOLEAN DEFAULT FALSE,
    `is_email_verified` BOOLEAN DEFAULT FALSE,
    `phone_verified_at` DATETIME,
    `email_verified_at` DATETIME,
    `last_third_party_login` DATETIME,
    `is_active` BOOLEAN DEFAULT TRUE,
    `last_login_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_username` (`username`),
    INDEX `idx_email` (`email`),
    INDEX `idx_phone` (`phone`),
    INDEX `idx_vip_level` (`vip_level`),
    INDEX `idx_login_type` (`login_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 1.2 分类表
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
    `id` VARCHAR(36) PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL UNIQUE,
    `description` TEXT,
    `icon` VARCHAR(100),
    `color` VARCHAR(20),
    `sort_order` INT DEFAULT 0,
    `is_active` BOOLEAN DEFAULT TRUE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 1.3 标签表
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
    `id` VARCHAR(36) PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL UNIQUE,
    `color` VARCHAR(20),
    `usage_count` INT DEFAULT 0,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 1.4 小说表
DROP TABLE IF EXISTS `novels`;
CREATE TABLE `novels` (
    `id` VARCHAR(36) PRIMARY KEY,
    `title` VARCHAR(200) NOT NULL,
    `author` VARCHAR(100) NOT NULL,
    `cover_url` VARCHAR(500),
    `description` TEXT,
    `category_id` VARCHAR(36) NOT NULL,
    `status` ENUM('ongoing', 'completed', 'paused') DEFAULT 'ongoing',
    `total_chapters` INT DEFAULT 0,
    `word_count` BIGINT DEFAULT 0,
    `views_count` BIGINT DEFAULT 0,
    `rating` DECIMAL(3,2) DEFAULT 0.00,
    `rating_count` INT DEFAULT 0,
    `is_featured` BOOLEAN DEFAULT FALSE,
    `is_free` BOOLEAN DEFAULT TRUE,
    `price` DECIMAL(10,2) DEFAULT 0.00,
    `publish_date` DATE,
    `last_updated_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_title` (`title`),
    INDEX `idx_author` (`author`),
    INDEX `idx_category` (`category_id`),
    INDEX `idx_status` (`status`),
    INDEX `idx_rating` (`rating`),
    INDEX `idx_views` (`views_count`),
    FULLTEXT `idx_search` (`title`, `author`, `description`),
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 1.5 小说标签关联表
DROP TABLE IF EXISTS `novel_tags`;
CREATE TABLE `novel_tags` (
    `id` VARCHAR(36) PRIMARY KEY,
    `novel_id` VARCHAR(36) NOT NULL,
    `tag_id` VARCHAR(36) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_novel_tag` (`novel_id`, `tag_id`),
    FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 1.6 章节表
DROP TABLE IF EXISTS `chapters`;
CREATE TABLE `chapters` (
    `id` VARCHAR(36) PRIMARY KEY,
    `novel_id` VARCHAR(36) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `chapter_number` INT NOT NULL,
    `word_count` INT DEFAULT 0,
    `is_free` BOOLEAN DEFAULT TRUE,
    `price` DECIMAL(10,2) DEFAULT 0.00,
    `publish_date` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_novel_chapter` (`novel_id`, `chapter_number`),
    INDEX `idx_publish_date` (`publish_date`),
    FULLTEXT `idx_content` (`title`, `content`),
    FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 2. 用户行为表
-- =============================================

-- 2.1 阅读记录表
DROP TABLE IF EXISTS `reading_records`;
CREATE TABLE `reading_records` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `novel_id` VARCHAR(36) NOT NULL,
    `chapter_id` VARCHAR(36) NOT NULL,
    `chapter_number` INT NOT NULL,
    `reading_position` INT DEFAULT 0,
    `reading_progress` DECIMAL(5,2) DEFAULT 0.00,
    `reading_time` INT DEFAULT 0,
    `last_read_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_novel_chapter` (`user_id`, `novel_id`, `chapter_id`),
    INDEX `idx_user_novel` (`user_id`, `novel_id`),
    INDEX `idx_last_read` (`last_read_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2.2 书架表
DROP TABLE IF EXISTS `bookshelf`;
CREATE TABLE `bookshelf` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `novel_id` VARCHAR(36) NOT NULL,
    `shelf_type` ENUM('reading', 'favorite', 'download') DEFAULT 'reading',
    `added_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `last_read_at` DATETIME,
    `reading_progress` DECIMAL(5,2) DEFAULT 0.00,
    `is_archived` BOOLEAN DEFAULT FALSE,
    UNIQUE KEY `uk_user_novel_shelf` (`user_id`, `novel_id`, `shelf_type`),
    INDEX `idx_user_shelf` (`user_id`, `shelf_type`),
    INDEX `idx_added_at` (`added_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2.3 收藏表
DROP TABLE IF EXISTS `favorites`;
CREATE TABLE `favorites` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `novel_id` VARCHAR(36) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_novel_favorite` (`user_id`, `novel_id`),
    INDEX `idx_user_favorites` (`user_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2.4 评论表
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `novel_id` VARCHAR(36) NOT NULL,
    `chapter_id` VARCHAR(36),
    `content` TEXT NOT NULL,
    `rating` INT CHECK (`rating` >= 1 AND `rating` <= 5),
    `like_count` INT DEFAULT 0,
    `reply_count` INT DEFAULT 0,
    `parent_id` VARCHAR(36),
    `is_deleted` BOOLEAN DEFAULT FALSE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_novel_comments` (`novel_id`),
    INDEX `idx_user_comments` (`user_id`),
    INDEX `idx_chapter_comments` (`chapter_id`),
    INDEX `idx_parent_comments` (`parent_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`parent_id`) REFERENCES `comments`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2.5 搜索历史表
DROP TABLE IF EXISTS `search_history`;
CREATE TABLE `search_history` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `keyword` VARCHAR(200) NOT NULL,
    `search_type` ENUM('novel', 'author', 'tag') DEFAULT 'novel',
    `result_count` INT DEFAULT 0,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_search` (`user_id`),
    INDEX `idx_keyword` (`keyword`),
    INDEX `idx_created_at` (`created_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 3. 会员和积分系统表
-- =============================================

-- 3.1 VIP会员表
DROP TABLE IF EXISTS `vip_memberships`;
CREATE TABLE `vip_memberships` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `vip_type` ENUM('vip', 'svip') NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    `is_active` BOOLEAN DEFAULT TRUE,
    `auto_renew` BOOLEAN DEFAULT FALSE,
    `payment_method` VARCHAR(50),
    `amount` DECIMAL(10,2),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_vip` (`user_id`),
    INDEX `idx_active_vip` (`is_active`, `end_date`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3.2 积分记录表
DROP TABLE IF EXISTS `points_records`;
CREATE TABLE `points_records` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `points` INT NOT NULL,
    `points_type` ENUM('earn', 'spend') NOT NULL,
    `source` VARCHAR(100) NOT NULL,
    `description` TEXT,
    `related_id` VARCHAR(36),
    `related_type` VARCHAR(50),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_points` (`user_id`),
    INDEX `idx_points_type` (`points_type`),
    INDEX `idx_created_at` (`created_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3.3 阅读币记录表
DROP TABLE IF EXISTS `coins_records`;
CREATE TABLE `coins_records` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `coins` INT NOT NULL,
    `coins_type` ENUM('earn', 'spend') NOT NULL,
    `source` VARCHAR(100) NOT NULL,
    `description` TEXT,
    `related_id` VARCHAR(36),
    `related_type` VARCHAR(50),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_coins` (`user_id`),
    INDEX `idx_coins_type` (`coins_type`),
    INDEX `idx_created_at` (`created_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 4. 签到和礼品系统表
-- =============================================

-- 4.1 签到记录表
DROP TABLE IF EXISTS `checkin_records`;
CREATE TABLE `checkin_records` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `checkin_date` DATE NOT NULL,
    `consecutive_days` INT DEFAULT 1,
    `points_earned` INT DEFAULT 0,
    `coins_earned` INT DEFAULT 0,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_date` (`user_id`, `checkin_date`),
    INDEX `idx_user_checkin` (`user_id`),
    INDEX `idx_checkin_date` (`checkin_date`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4.2 礼品表
DROP TABLE IF EXISTS `gifts`;
CREATE TABLE `gifts` (
    `id` VARCHAR(36) PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `description` TEXT,
    `gift_type` ENUM('reading_coins', 'vip_time', 'physical_gift', 'points', 'other') NOT NULL,
    `value` VARCHAR(100) NOT NULL,
    `category` VARCHAR(50),
    `image_url` VARCHAR(500),
    `is_active` BOOLEAN DEFAULT TRUE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_gift_type` (`gift_type`),
    INDEX `idx_category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4.3 用户礼品表
DROP TABLE IF EXISTS `user_gifts`;
CREATE TABLE `user_gifts` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `gift_id` VARCHAR(36) NOT NULL,
    `status` ENUM('unused', 'used', 'expired') DEFAULT 'unused',
    `obtained_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `used_at` DATETIME,
    `expires_at` DATETIME,
    `source` VARCHAR(100),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_gifts` (`user_id`),
    INDEX `idx_gift_status` (`status`),
    INDEX `idx_expires_at` (`expires_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`gift_id`) REFERENCES `gifts`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4.4 兑换码表
DROP TABLE IF EXISTS `redeem_codes`;
CREATE TABLE `redeem_codes` (
    `id` VARCHAR(36) PRIMARY KEY,
    `code` VARCHAR(100) NOT NULL UNIQUE,
    `gift_id` VARCHAR(36) NOT NULL,
    `is_used` BOOLEAN DEFAULT FALSE,
    `used_by` VARCHAR(36),
    `used_at` DATETIME,
    `expires_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_code` (`code`),
    INDEX `idx_gift` (`gift_id`),
    INDEX `idx_used` (`is_used`),
    FOREIGN KEY (`gift_id`) REFERENCES `gifts`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`used_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 5. 离线下载表
-- =============================================

-- 5.1 下载任务表
DROP TABLE IF EXISTS `download_tasks`;
CREATE TABLE `download_tasks` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `novel_id` VARCHAR(36) NOT NULL,
    `status` ENUM('pending', 'downloading', 'paused', 'completed', 'failed') DEFAULT 'pending',
    `progress` DECIMAL(5,2) DEFAULT 0.00,
    `downloaded_chapters` INT DEFAULT 0,
    `total_chapters` INT NOT NULL,
    `file_size` BIGINT DEFAULT 0,
    `download_speed` VARCHAR(20),
    `error_message` TEXT,
    `started_at` DATETIME,
    `completed_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_user_downloads` (`user_id`),
    INDEX `idx_status` (`status`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5.2 下载章节表
DROP TABLE IF EXISTS `download_chapters`;
CREATE TABLE `download_chapters` (
    `id` VARCHAR(36) PRIMARY KEY,
    `download_task_id` VARCHAR(36) NOT NULL,
    `chapter_id` VARCHAR(36) NOT NULL,
    `chapter_number` INT NOT NULL,
    `file_path` VARCHAR(500),
    `file_size` BIGINT DEFAULT 0,
    `is_downloaded` BOOLEAN DEFAULT FALSE,
    `downloaded_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_download_task` (`download_task_id`),
    INDEX `idx_chapter` (`chapter_id`),
    FOREIGN KEY (`download_task_id`) REFERENCES `download_tasks`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 6. 通知系统表
-- =============================================

-- 6.1 通知表
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `content` TEXT NOT NULL,
    `type` ENUM('update', 'gift', 'like', 'recommendation', 'system') NOT NULL,
    `is_read` BOOLEAN DEFAULT FALSE,
    `related_id` VARCHAR(36),
    `related_type` VARCHAR(50),
    `action_url` VARCHAR(500),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `read_at` DATETIME,
    INDEX `idx_user_notifications` (`user_id`),
    INDEX `idx_type` (`type`),
    INDEX `idx_is_read` (`is_read`),
    INDEX `idx_created_at` (`created_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6.2 通知设置表
DROP TABLE IF EXISTS `notification_settings`;
CREATE TABLE `notification_settings` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `setting_type` VARCHAR(50) NOT NULL,
    `is_enabled` BOOLEAN DEFAULT TRUE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_setting` (`user_id`, `setting_type`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 7. 第三方登录系统表
-- =============================================

-- 7.1 第三方账号绑定表
DROP TABLE IF EXISTS `third_party_accounts`;
CREATE TABLE `third_party_accounts` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `platform` ENUM('wechat', 'qq', 'weibo', 'apple') NOT NULL,
    `platform_user_id` VARCHAR(100) NOT NULL,
    `platform_username` VARCHAR(100),
    `platform_nickname` VARCHAR(100),
    `platform_avatar` VARCHAR(500),
    `platform_email` VARCHAR(100),
    `platform_phone` VARCHAR(20),
    `union_id` VARCHAR(100),
    `open_id` VARCHAR(100),
    `access_token` TEXT,
    `refresh_token` TEXT,
    `token_expires_at` DATETIME,
    `is_primary` BOOLEAN DEFAULT FALSE,
    `is_active` BOOLEAN DEFAULT TRUE,
    `last_login_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_platform_user` (`platform`, `platform_user_id`),
    UNIQUE KEY `uk_union_id` (`union_id`),
    INDEX `idx_user_platform` (`user_id`, `platform`),
    INDEX `idx_platform_user_id` (`platform`, `platform_user_id`),
    INDEX `idx_open_id` (`open_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7.2 微信登录信息表
DROP TABLE IF EXISTS `wechat_accounts`;
CREATE TABLE `wechat_accounts` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `openid` VARCHAR(100) NOT NULL UNIQUE,
    `unionid` VARCHAR(100),
    `nickname` VARCHAR(100),
    `sex` TINYINT,
    `province` VARCHAR(50),
    `city` VARCHAR(50),
    `country` VARCHAR(50),
    `headimgurl` VARCHAR(500),
    `privilege` JSON,
    `access_token` TEXT,
    `refresh_token` TEXT,
    `token_expires_at` DATETIME,
    `scope` VARCHAR(200),
    `is_subscribed` BOOLEAN DEFAULT FALSE,
    `subscribe_time` DATETIME,
    `last_login_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_user_wechat` (`user_id`),
    INDEX `idx_openid` (`openid`),
    INDEX `idx_unionid` (`unionid`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7.3 QQ登录信息表
DROP TABLE IF EXISTS `qq_accounts`;
CREATE TABLE `qq_accounts` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `openid` VARCHAR(100) NOT NULL UNIQUE,
    `unionid` VARCHAR(100),
    `nickname` VARCHAR(100),
    `gender` VARCHAR(10),
    `province` VARCHAR(50),
    `city` VARCHAR(50),
    `year` VARCHAR(10),
    `figureurl` VARCHAR(500),
    `figureurl_1` VARCHAR(500),
    `figureurl_2` VARCHAR(500),
    `figureurl_qq_1` VARCHAR(500),
    `figureurl_qq_2` VARCHAR(500),
    `is_yellow_vip` TINYINT DEFAULT 0,
    `is_yellow_year_vip` TINYINT DEFAULT 0,
    `yellow_vip_level` TINYINT DEFAULT 0,
    `is_yellow_vip_level` TINYINT DEFAULT 0,
    `access_token` TEXT,
    `refresh_token` TEXT,
    `token_expires_at` DATETIME,
    `last_login_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_user_qq` (`user_id`),
    INDEX `idx_openid` (`openid`),
    INDEX `idx_unionid` (`unionid`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7.4 登录日志表
DROP TABLE IF EXISTS `login_logs`;
CREATE TABLE `login_logs` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `login_type` ENUM('password', 'wechat', 'qq', 'weibo', 'apple') NOT NULL,
    `platform` ENUM('ios', 'android', 'web', 'h5') NOT NULL,
    `device_id` VARCHAR(100),
    `device_info` TEXT,
    `ip_address` VARCHAR(45),
    `user_agent` TEXT,
    `location` VARCHAR(200),
    `is_success` BOOLEAN DEFAULT TRUE,
    `failure_reason` VARCHAR(200),
    `session_id` VARCHAR(100),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_login` (`user_id`),
    INDEX `idx_login_type` (`login_type`),
    INDEX `idx_platform` (`platform`),
    INDEX `idx_created_at` (`created_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7.5 用户会话表
DROP TABLE IF EXISTS `user_sessions`;
CREATE TABLE `user_sessions` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `session_token` VARCHAR(255) NOT NULL UNIQUE,
    `device_id` VARCHAR(100),
    `platform` ENUM('ios', 'android', 'web', 'h5') NOT NULL,
    `ip_address` VARCHAR(45),
    `user_agent` TEXT,
    `is_active` BOOLEAN DEFAULT TRUE,
    `expires_at` DATETIME NOT NULL,
    `last_activity_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_sessions` (`user_id`),
    INDEX `idx_session_token` (`session_token`),
    INDEX `idx_expires_at` (`expires_at`),
    INDEX `idx_is_active` (`is_active`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7.6 账号绑定申请表
DROP TABLE IF EXISTS `account_binding_requests`;
CREATE TABLE `account_binding_requests` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `target_platform` ENUM('wechat', 'qq', 'weibo', 'apple') NOT NULL,
    `target_platform_user_id` VARCHAR(100) NOT NULL,
    `verification_code` VARCHAR(10),
    `status` ENUM('pending', 'verified', 'expired', 'cancelled') DEFAULT 'pending',
    `expires_at` DATETIME NOT NULL,
    `verified_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_user_binding` (`user_id`),
    INDEX `idx_status` (`status`),
    INDEX `idx_expires_at` (`expires_at`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7.7 用户设备表
DROP TABLE IF EXISTS `user_devices`;
CREATE TABLE `user_devices` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `device_id` VARCHAR(100) NOT NULL,
    `device_name` VARCHAR(200),
    `device_type` ENUM('ios', 'android', 'web', 'h5') NOT NULL,
    `os_version` VARCHAR(50),
    `app_version` VARCHAR(20),
    `push_token` VARCHAR(255),
    `is_active` BOOLEAN DEFAULT TRUE,
    `last_seen_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_device` (`user_id`, `device_id`),
    INDEX `idx_device_id` (`device_id`),
    INDEX `idx_is_active` (`is_active`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 8. 系统配置表
-- =============================================

-- 8.1 应用配置表
DROP TABLE IF EXISTS `app_settings`;
CREATE TABLE `app_settings` (
    `id` VARCHAR(36) PRIMARY KEY,
    `setting_key` VARCHAR(100) NOT NULL UNIQUE,
    `setting_value` TEXT,
    `setting_type` ENUM('string', 'number', 'boolean', 'json') DEFAULT 'string',
    `description` TEXT,
    `is_public` BOOLEAN DEFAULT FALSE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8.2 用户设置表
DROP TABLE IF EXISTS `user_settings`;
CREATE TABLE `user_settings` (
    `id` VARCHAR(36) PRIMARY KEY,
    `user_id` VARCHAR(36) NOT NULL,
    `setting_key` VARCHAR(100) NOT NULL,
    `setting_value` TEXT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_setting` (`user_id`, `setting_key`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8.3 OAuth配置表
DROP TABLE IF EXISTS `oauth_configs`;
CREATE TABLE `oauth_configs` (
    `id` VARCHAR(36) PRIMARY KEY,
    `platform` ENUM('wechat', 'qq', 'weibo', 'apple') NOT NULL,
    `app_id` VARCHAR(100) NOT NULL,
    `app_secret` VARCHAR(255) NOT NULL,
    `redirect_uri` VARCHAR(500),
    `scope` VARCHAR(200),
    `is_active` BOOLEAN DEFAULT TRUE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_platform` (`platform`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- 9. 性能优化索引
-- =============================================

-- 复合索引优化查询性能
CREATE INDEX `idx_reading_records_user_novel_time` ON `reading_records`(`user_id`, `novel_id`, `last_read_at`);
CREATE INDEX `idx_novels_category_status_rating` ON `novels`(`category_id`, `status`, `rating`);
CREATE INDEX `idx_chapters_novel_number` ON `chapters`(`novel_id`, `chapter_number`);
CREATE INDEX `idx_comments_novel_created` ON `comments`(`novel_id`, `created_at`);
CREATE INDEX `idx_notifications_user_read_created` ON `notifications`(`user_id`, `is_read`, `created_at`);

-- 第三方登录相关索引
CREATE INDEX `idx_third_party_platform_user` ON `third_party_accounts`(`platform`, `platform_user_id`);
CREATE INDEX `idx_wechat_openid` ON `wechat_accounts`(`openid`);
CREATE INDEX `idx_wechat_unionid` ON `wechat_accounts`(`unionid`);
CREATE INDEX `idx_qq_openid` ON `qq_accounts`(`openid`);
CREATE INDEX `idx_qq_unionid` ON `qq_accounts`(`unionid`);
CREATE INDEX `idx_login_logs_user_time` ON `login_logs`(`user_id`, `created_at`);
CREATE INDEX `idx_user_sessions_token` ON `user_sessions`(`session_token`);
CREATE INDEX `idx_user_sessions_active` ON `user_sessions`(`is_active`, `expires_at`);
CREATE INDEX `idx_user_devices_active` ON `user_devices`(`user_id`, `is_active`);

-- 恢复外键检查
SET FOREIGN_KEY_CHECKS = 1;

-- =============================================
-- 10. 初始化数据
-- =============================================

-- 插入默认分类
INSERT INTO `categories` (`id`, `name`, `description`, `icon`, `color`, `sort_order`) VALUES
('cat_001', '玄幻', '玄幻修仙类小说', '⚡', '#8b5cf6', 1),
('cat_002', '言情', '都市言情类小说', '💕', '#ec4899', 2),
('cat_003', '都市', '现代都市类小说', '🏙️', '#06b6d4', 3),
('cat_004', '科幻', '科幻未来类小说', '🚀', '#10b981', 4),
('cat_005', '历史', '历史穿越类小说', '📚', '#f59e0b', 5),
('cat_006', '悬疑', '悬疑推理类小说', '🔍', '#6366f1', 6);

-- 插入默认标签
INSERT INTO `tags` (`id`, `name`, `color`, `usage_count`) VALUES
('tag_001', '修仙', '#8b5cf6', 0),
('tag_002', '穿越', '#ec4899', 0),
('tag_003', '重生', '#06b6d4', 0),
('tag_004', '都市', '#10b981', 0),
('tag_005', '言情', '#f59e0b', 0),
('tag_006', '科幻', '#6366f1', 0),
('tag_007', '机甲', '#ef4444', 0),
('tag_008', '末世', '#f97316', 0),
('tag_009', '系统', '#84cc16', 0),
('tag_010', '爽文', '#06b6d4', 0);

-- 插入默认应用配置
INSERT INTO `app_settings` (`id`, `setting_key`, `setting_value`, `setting_type`, `description`, `is_public`) VALUES
('setting_001', 'app_name', '阅读应用', 'string', '应用名称', TRUE),
('setting_002', 'app_version', '1.0.0', 'string', '应用版本', TRUE),
('setting_003', 'max_download_tasks', '3', 'number', '最大同时下载任务数', FALSE),
('setting_004', 'default_reading_font_size', '16', 'number', '默认阅读字体大小', TRUE),
('setting_005', 'enable_auto_checkin', 'true', 'boolean', '是否启用自动签到', TRUE);

-- 插入OAuth配置模板
INSERT INTO `oauth_configs` (`id`, `platform`, `app_id`, `app_secret`, `redirect_uri`, `scope`, `is_active`) VALUES
('oauth_001', 'wechat', 'your_wechat_app_id', 'your_wechat_app_secret', 'https://yourdomain.com/auth/wechat/callback', 'snsapi_userinfo', TRUE),
('oauth_002', 'qq', 'your_qq_app_id', 'your_qq_app_secret', 'https://yourdomain.com/auth/qq/callback', 'get_user_info', TRUE);

-- =============================================
-- 数据库创建完成
-- =============================================
