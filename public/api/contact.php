<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = strip_tags($data['name'] ?? '');
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $subject = strip_tags($data['subject'] ?? 'Yeni Mesaj');
    $message = strip_tags($data['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Lütfen tüm alanları doldurun.']);
        exit;
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
        $stmt->execute([$name, $email, $subject, $message]);
        echo json_encode(['status' => 'success', 'message' => 'Mesajınız başarıyla gönderildi.']);
    } catch (\PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Kayıt hatası: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Geçersiz istek.']);
}
?>
