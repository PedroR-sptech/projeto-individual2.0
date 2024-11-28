create database projeto_individual;
use projeto_individual;

create table usuario(
id int auto_increment primary key ,
nome varchar (45),
email varchar (60),
senha varchar (20)
);

select * from usuario;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
select * from aviso;

SELECT a.*, u.nome AS nome_usuario
FROM aviso a
LEFT JOIN usuario u ON a.fk_usuario = u.id;

CREATE TABLE  projeto_individual.votos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    jogo VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0 
);

SELECT * FROM projeto_individual.votos;

INSERT INTO projeto_individual.votos(jogo) VALUES 
('Rocket League'),
('Fortnite'),
('GTA V'),
('Rainbow Six Siege'),
('Fall Guys'),
('Minecraft');