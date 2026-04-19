<?php
require_once 'db.php';

try {
    // Get settings
    $stmt = $pdo->query("SELECT setting_key, setting_value FROM site_settings");
    $settings = [];
    while ($row = $stmt->fetch()) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }

    // Get content
    $stmt = $pdo->query("SELECT section, content_key, content_value FROM site_content");
    $content = [];
    while ($row = $stmt->fetch()) {
        if (!isset($content[$row['section']])) {
            $content[$row['section']] = [];
        }
        $content[$row['section']][$row['content_key']] = $row['content_value'];
    }

    // Get blog posts (latest 3)
    $stmt = $pdo->query("SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT 3");
    $blogs = $stmt->fetchAll();

    echo json_encode([
        'status' => 'success',
        'data' => [
            'settings' => $settings,
            'content' => $content,
            'blogs' => $blogs
        ]
    ]);
} catch (\PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Fetch failed: ' . $e->getMessage()]);
}
?>
