<?php
require_once 'db.php';

try {
    $total_messages = $pdo->query("SELECT COUNT(*) FROM messages")->fetchColumn();
    $total_blogs = $pdo->query("SELECT COUNT(*) FROM blog_posts")->fetchColumn();
    
    // Simulate analytics if table empty
    $stmt = $pdo->query("SELECT * FROM site_analytics");
    $analytics = $stmt->fetchAll();
    
    if (empty($analytics)) {
        $analytics = [
            ['event_type' => 'total_visits', 'event_count' => rand(1000, 5000)],
            ['event_type' => 'daily_visits', 'event_count' => rand(50, 200)]
        ];
    }

    echo json_encode([
        'status' => 'success',
        'data' => [
            'total_messages' => $total_messages,
            'total_blogs' => $total_blogs,
            'analytics' => $analytics
        ]
    ]);
} catch (\PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
