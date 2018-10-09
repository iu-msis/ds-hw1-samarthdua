DROP TABLE IF EXISTS Comment;

CREATE TABLE Comment (
  comment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment_body VARCHAR(250)
);

insert into Comment(comment_id, comment_body)
  values (1, "Wow these are really interesting stocks");

insert into Comment(comment_id, comment_body)
  values (2, "I know they're the bees knees");

insert into Comment(comment_id, comment_body)
  values (3, "How did you pick them?");

insert into Comment(comment_id, comment_body)
  values (4, "......");

insert into Comment(comment_id, comment_body)
  values (5, "What?");

insert into Comment(comment_id, comment_body)
  values (6, "......some guy was talking about them on Barrons");

insert into Comment(comment_id, comment_body)
  values (7, "-_- Goddamnit, Barry");
