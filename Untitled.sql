CREATE TABLE scores (
	PRIMARY KEY
	id     serial          not null,
	user   varchar(64)     not null,
	score  integer         not null,
	)
insert into scores
	(user , score )
Values ( Cam, 20 )
	