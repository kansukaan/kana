<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['settings']) && !isset($data['content'])) {
        echo json_encode(['status' => 'error', 'message' => 'No data provided']);
        exit;
    }

    try {
        $pdo->beginTransaction();

        if (isset($data['settings'])) {
            foreach ($data['settings'] as $key => $value) {
                $stmt = $pdo->prepare("UPDATE site_settings SET setting_value = ? WHERE setting_key = ?");
                $stmt->execute([$value, $key]);
            }
        }

        if (isset($data['content'])) {
            foreach ($data['content'] as $section => $fields) {
                foreach ($fields as $key => $value) {
                    $stmt = $pdo->prepare("UPDATE site_content SET content_value = ? WHERE section = ? AND content_key = ?");
                    $stmt->execute([$value, $section, $key]);
                }
            }
        }

        $pdo->commit();
        echo json_encode(['status' => 'success', 'message' => 'Settings updated successfully']);
    } catch (\PDOException $e) {
        $pdo->rollBack();
        echo json_encode(['status' => 'error', 'message' => 'Update failed: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
}
?>
