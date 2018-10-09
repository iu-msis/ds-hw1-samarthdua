<?php
class Comment
{
  public $comment_id;
  public $comment_body;
  public function __construct($data) {
    $this->comment_id = intval($data['comment_id']);
    $this->comment_body = $data['comment_body'];
  }
  public function create() {

    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    $sql = 'INSERT into Comment (comment_id, comment_body)
                VALUES (?, ?)';

    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->comment_id,
      $this->comment_body,
    ]);

    $this->comment_id = $db->lastInsertId();
  }
  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM Comment';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theComment =  new Comment($row);
      array_push($arr, $theComment);
    }
    return $arr;
  }
}
