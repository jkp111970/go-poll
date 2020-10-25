CREATE SCHEMA `go_poll` ;

drop table go_poll.option_master;
drop table go_poll.question_master;
drop table go_poll.quiz_master;
drop table go_poll.quiz_publisher;


CREATE TABLE go_poll.quiz_publisher (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    contact_no VARCHAR(12) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id)
);
CREATE TABLE go_poll.quiz_master (
    id INT AUTO_INCREMENT,
    quiz_publisher_id INT,
    subject VARCHAR(30) NOT NULL,
    topic VARCHAR(30),
	negative_mark_per_q INT,
    negative_percentile FLOAT,
	quiz_time_limit_min INT,
    time_limit_per_q_sec INT,
    mark_per_q INT,
	quiz_type INT,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id),
	FOREIGN KEY (quiz_publisher_id) REFERENCES quiz_publisher(id)
);
CREATE TABLE go_poll.question_master (
    id INT AUTO_INCREMENT,
    quiz_master_id INT,
    question_text VARCHAR(30),
    question_image BLOB,
	question_vedio BLOB,
	question_audio BLOB,
    multiple_choise_flag BOOLEAN,
	question_explaination TEXT,
	marks FLOAT NOT NULL,
    complexity_factor INT,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id),
	FOREIGN KEY (quiz_master_id) REFERENCES quiz_master(id)
);
CREATE TABLE go_poll.option_master (
    id INT AUTO_INCREMENT,
    question_master_id INT,
    option_text VARCHAR(70),
    option_image BLOB,
	option_vedio BLOB,
	option_audio BLOB,
    is_correct_answer BOOLEAN,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id),
	FOREIGN KEY (question_master_id) REFERENCES question_master(id)
);


select * from go_poll.quiz_publisher; 
select * from go_poll.quiz_master;           
select * from go_poll.question_master;           
select * from go_poll.option_master; 


