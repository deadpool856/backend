-- Users table
CREATE TABLE users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email) VALUES
('user1', 'user1@example.com'),
('user2', 'user2@example.com'),
('user3', 'user3@example.com'),
('user4', 'user4@example.com');

-- Articles table
CREATE TABLE articles (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    allText TEXT NOT NULL,
    summary TEXT,
    dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dateModified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    imageURL TEXT,
    published BOOLEAN,
    authorID INT,
    FOREIGN KEY (authorID) REFERENCES users(ID)
);

INSERT INTO articles (title, allText, summary, dateCreated, dateModified, imageURL, published, authorID) VALUES 
('Article Title 1', 'Content of article 1', 'Summary of article 1', NOW(), NOW(), 'https://www.techfinitive.com/wp-content/uploads/2023/10/sci-fi-tech-influences-healthcare-jpg.webp', 1, 1),
('Article Title 2', 'Content of article 2', 'Summary of article 2', NOW(), NOW(), 'https://img.freepik.com/premium-photo/portrait-scifi-cyberpunk-man_158863-7868.jpg', 1, 2),
('Article Title 3', 'Content of article 3', 'Summary of article 3', NOW(), NOW(), 'https://w0.peakpx.com/wallpaper/96/611/HD-wallpaper-cyberpunk-2077-male-character-sci-fi-games-futuristic-games.jpg', 1, 3),
('Article Title 4', 'Content of article 4', 'Summary of article 4', NOW(), NOW(), 'https://as2.ftcdn.net/v2/jpg/05/59/23/29/1000_F_559232918_cLSDkAfmSAyq6O2sso6MqrRbybkcfkCm.jpg', 1, 4),
('Article Title 5', 'Content of article 5', 'Summary of article 5', NOW(), NOW(), 'https://yaktribe.games/community/media/sci-fi-cyborg-cyberpunk-woman-hd-wallpaper-preview-jpg.56263/full', 1, 1),
('Article Title 6', 'Content of article 6', 'Summary of article 6', NOW(), NOW(), 'https://as2.ftcdn.net/v2/jpg/05/59/23/29/1000_F_559232918_cLSDkAfmSAyq6O2sso6MqrRbybkcfkCm.jpg', 1, 2),
('Article Title 7', 'Content of article 7', 'Summary of article 7', NOW(), NOW(), 'https://as2.ftcdn.net/v2/jpg/05/59/23/29/1000_F_559232918_cLSDkAfmSAyq6O2sso6MqrRbybkcfkCm.jpg', 1, 3),
('Article Title 8', 'Content of article 8', 'Summary of article 8', NOW(), NOW(), 'https://as2.ftcdn.net/v2/jpg/05/59/23/29/1000_F_559232918_cLSDkAfmSAyq6O2sso6MqrRbybkcfkCm.jpg', 1, 4);

-- Categories table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    imageURL TEXT
);

INSERT INTO categories (name, description, imageURL) VALUES 
('Technology', 'Articles related to technology', 'https://www.techfinitive.com/wp-content/uploads/2023/10/sci-fi-tech-influences-healthcare-jpg.webp'),
('Science', 'Articles related to science', 'https://img.freepik.com/premium-photo/portrait-scifi-cyberpunk-man_158863-7868.jpg'),
('Health', 'Articles related to health', 'https://w0.peakpx.com/wallpaper/96/611/HD-wallpaper-cyberpunk-2077-male-character-sci-fi-games-futuristic-games.jpg'),
('Education', 'Articles related to education', 'https://as2.ftcdn.net/v2/jpg/05/59/23/29/1000_F_559232918_cLSDkAfmSAyq6O2sso6MqrRbybkcfkCm.jpg');

-- Comments table
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    allText TEXT NOT NULL,
    authorId INT,
    dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dateModified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    articleId INT,
    FOREIGN KEY (authorId) REFERENCES users(ID),
    FOREIGN KEY (articleId) REFERENCES articles(ID)
);

INSERT INTO comments (allText, authorId, dateCreated, dateModified, articleId) VALUES 
('This is a comment on article 1 by user 1', 1, NOW(), NOW(), 1),
('This is another comment on article 1 by user 2', 2, NOW(), NOW(), 1),
('This is a comment on article 2 by user 3', 3, NOW(), NOW(), 2),
('This is a comment on article 3 by user 1', 1, NOW(), NOW(), 3),
('This is a comment on article 4 by user 2', 2, NOW(), NOW(), 4);

-- Likes table
CREATE TABLE likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    articleId INT,
    userId INT,
    FOREIGN KEY (articleId) REFERENCES articles(ID),
    FOREIGN KEY (userId) REFERENCES users(ID)
);

INSERT INTO likes (articleId, userId) VALUES 
(1, 1),
(1, 2),
(2, 3),
(3, 1),
(4, 2);

-- Pins table
CREATE TABLE pins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    articleId INT,
    userId INT,
    FOREIGN KEY (articleId) REFERENCES articles(ID),
    FOREIGN KEY (userId) REFERENCES users(ID)
);

INSERT INTO pins (articleId, userId) VALUES 
(1, 1),
(2, 1),
(3, 2),
(4, 3),
(1, 3);

-- ArticleViews table
CREATE TABLE articleViews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    articleId INT,
    viewDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (articleId) REFERENCES articles(ID)
);

INSERT INTO articleViews (articleId) VALUES 
(1),
(2),
(3),
(4),
(1),
(1),
(2),
(3),
(4),
(4);
