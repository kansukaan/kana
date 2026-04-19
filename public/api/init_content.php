<?php
require_once 'db.php';

try {
    // Create site_settings table
    $pdo->exec("CREATE TABLE IF NOT EXISTS site_settings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        setting_key VARCHAR(50) UNIQUE,
        setting_value TEXT
    )");

    // Create site_content table
    $pdo->exec("CREATE TABLE IF NOT EXISTS site_content (
        id INT AUTO_INCREMENT PRIMARY KEY,
        section VARCHAR(50),
        content_key VARCHAR(50),
        content_value TEXT,
        UNIQUE KEY section_key (section, content_key)
    )");

    // Create messages table
    $pdo->exec("CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        subject VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    // Create blog_posts table
    $pdo->exec("CREATE TABLE IF NOT EXISTS blog_posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        excerpt TEXT,
        content TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    // Create site_analytics table
    $pdo->exec("CREATE TABLE IF NOT EXISTS site_analytics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        event_type VARCHAR(50),
        event_count INT DEFAULT 0,
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )");

    // Seed default content
    $settings = [
        ['name', 'Decoor Mobilya'],
        ['business_type', 'Mobilya & İç Mimarlık'],
        ['phone', '05327043159'],
        ['email', 'info@decoormobilya.com'],
        ['address', 'Mobilya Sanayi Bölgesi, Decoor Plaza No:42'],
        ['whatsapp', '905327043159']
    ];

    foreach ($settings as $s) {
        $stmt = $pdo->prepare("INSERT INTO site_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?");
        $stmt->execute([$s[0], $s[1], $s[1]]);
    }

    $content = [
        ['hero', 'title', 'Geleceğin Yaşam Alanlarını Bugün Tasarlıyoruz'],
        ['hero', 'subtitle', 'Modern, zarif ve fütüristik mobilya çözümleriyle yaşam alanlarınıza değer katıyoruz.'],
        ['about', 'title', 'Sanat ve Teknoloji'],
        ['about', 'text', 'Decoor Mobilya olarak, uzman tasarım ekibimiz ve son teknoloji imalat tesisimizle, hayallerinizdeki mobilyaları gerçeğe dönüştürüyoruz. Ofis, ev ve özel projeleriniz için inovatif çözümler üretiyoruz.'],
        ['features', 'f1_title', 'Özel İmalat'],
        ['features', 'f1_desc', 'Sizin ölçülerinize ve zevkinize özel butik üretim.'],
        ['features', 'f2_title', 'Ücretsiz Keşif'],
        ['features', 'f2_desc', 'Alanında uzman ekibimizle mekanınızı ücretsiz projelendiriyoruz.'],
        ['features', 'f3_title', 'Zamanında Teslim'],
        ['features', 'f3_desc', 'Verdiğimiz sözü zamanında tutuyor, hızlı kurulum yapıyoruz.']
    ];

    foreach ($content as $c) {
        $stmt = $pdo->prepare("INSERT INTO site_content (section, content_key, content_value) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE content_value = ?");
        $stmt->execute([$c[0], $c[1], $c[2], $c[2]]);
    }

    echo json_encode(['status' => 'success', 'message' => 'Database initialized successfully']);
} catch (\PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Init failed: ' . $e->getMessage()]);
}
?>
