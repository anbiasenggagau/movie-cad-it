const moviesSeed = `
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Hitman''s Bodyguard', '-2017', '
Action, Comedy, Crime            ', '6.9', '
The world''s top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial on time.', '
    Director:
Patrick Hughes
| 
    Stars:
Ryan Reynolds, 
Samuel L. Jackson, 
Gary Oldman, 
Elodie Yung
', '205,979', '118', '$75.47M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jurassic Park', '-1993', '
Action, Adventure, Sci-Fi            ', '8.1', '
A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park''s cloned dinosaurs to run loose.', '
    Director:
Steven Spielberg
| 
    Stars:
Sam Neill, 
Laura Dern, 
Jeff Goldblum, 
Richard Attenborough
', '897,444', '127', '$402.45M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Don''t Breathe', '-2016', '
Crime, Horror, Thriller            ', '7.1', '
Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn''t as helpless as he seems.', '
    Director:
Fede Alvarez
| 
    Stars:
Stephen Lang, 
Jane Levy, 
Dylan Minnette, 
Daniel Zovatto
', '237,601', '88', '$89.22M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Lord of the Rings: The Fellowship of the Ring', '-2001', '
Action, Adventure, Drama            ', '8.8', '
A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', '
    Director:
Peter Jackson
| 
    Stars:
Elijah Wood, 
Ian McKellen, 
Orlando Bloom, 
Sean Bean
', '1,713,028', '178', '$315.54M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Escape Room', '(I) (2019)', '
Action, Adventure, Horror            ', '6.4', '
Six strangers find themselves in a maze of deadly mystery rooms and must use their wits to survive.', '
    Director:
Adam Robitel
| 
    Stars:
Taylor Russell, 
Logan Miller, 
Jay Ellis, 
Tyler Labine
', '99,351', '99', '$57.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jaws', '-1975', '
Adventure, Thriller            ', '8', '
When a killer shark unleashes chaos on a beach community, it''s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', '
    Director:
Steven Spielberg
| 
    Stars:
Roy Scheider, 
Robert Shaw, 
Richard Dreyfuss, 
Lorraine Gary
', '558,731', '124', '$260.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Departed', '-2006', '
Crime, Drama, Thriller            ', '8.5', '
An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.', '
    Director:
Martin Scorsese
| 
    Stars:
Leonardo DiCaprio, 
Matt Damon, 
Jack Nicholson, 
Mark Wahlberg
', '1,227,522', '151', '$132.38M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Gone Girl', '-2014', '
Drama, Mystery, Thriller            ', '8.1', '
With his wife''s disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it''s suspected that he may not be innocent.', '
    Director:
David Fincher
| 
    Stars:
Ben Affleck, 
Rosamund Pike, 
Neil Patrick Harris, 
Tyler Perry
', '895,888', '149', '$167.77M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jumanji: Welcome to the Jungle', '-2017', '
Action, Adventure, Comedy            ', '6.9', '
Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.', '
    Director:
Jake Kasdan
| 
    Stars:
Dwayne Johnson, 
Karen Gillan, 
Kevin Hart, 
Jack Black
', '337,900', '119', '$404.52M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('American Psycho', '-2000', '
Comedy, Crime, Drama            ', '7.6', '
A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.', '
    Director:
Mary Harron
| 
    Stars:
Christian Bale, 
Justin Theroux, 
Josh Lucas, 
Bill Sage
', '517,014', '101', '$15.07M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kill Bill: Vol. 1', '-2003', '
Action, Crime, Drama            ', '8.1', '
After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.', '
    Director:
Quentin Tarantino
| 
    Stars:
Uma Thurman, 
David Carradine, 
Daryl Hannah, 
Michael Madsen
', '1,034,554', '111', '$70.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('300', '-2006', '
Action, Drama            ', '7.6', '
King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.', '
    Director:
Zack Snyder
| 
    Stars:
Gerard Butler, 
Lena Headey, 
David Wenham, 
Dominic West
', '751,815', '117', '$210.61M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('It', '(I) (2017)', '
Horror            ', '7.3', '
In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.', '
    Director:
Andy Muschietti
| 
    Stars:
Bill SkarsgÃ¥rd, 
Jaeden Martell, 
Finn Wolfhard, 
Sophia Lillis
', '480,607', '135', '$327.48M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Spider-Man: Far from Home', '-2019', '
Action, Adventure, Sci-Fi            ', '7.5', '
Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.', '
    Director:
Jon Watts
| 
    Stars:
Tom Holland, 
Samuel L. Jackson, 
Jake Gyllenhaal, 
Marisa Tomei
', '363,012', '129', '$390.53M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Hobbit: An Unexpected Journey', '-2012', '
Adventure, Fantasy            ', '7.8', '
A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.', '
    Director:
Peter Jackson
| 
    Stars:
Martin Freeman, 
Ian McKellen, 
Richard Armitage, 
Andy Serkis
', '774,632', '169', '$303.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Clueless', '-1995', '
Comedy, Romance            ', '6.8', '
Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school''s pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other.', '
    Director:
Amy Heckerling
| 
    Stars:
Alicia Silverstone, 
Stacey Dash, 
Brittany Murphy, 
Paul Rudd
', '194,461', '97', '$56.63M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Baywatch', '-2017', '
Action, Comedy, Crime            ', '5.5', '
Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit, as they uncover a criminal plot that threatens the future of the bay.', '
    Director:
Seth Gordon
| 
    Stars:
Dwayne Johnson, 
Zac Efron, 
Alexandra Daddario, 
Priyanka Chopra Jonas
', '170,844', '116', '$58.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Fast & Furious 7', '-2015', '
Action, Adventure, Thriller            ', '7.1', '
Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.', '
    Director:
James Wan
| 
    Stars:
Vin Diesel, 
Paul Walker, 
Dwayne Johnson, 
Jason Statham
', '371,194', '137', '$353.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sicario', '-2015', '
Action, Crime, Drama            ', '7.6', '
An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.', '
    Director:
Denis Villeneuve
| 
    Stars:
Emily Blunt, 
Josh Brolin, 
Benicio Del Toro, 
Jon Bernthal
', '387,903', '121', '$46.89M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Irishman', '-2019', '
Biography, Crime, Drama            ', '7.8', '
Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family.', '
    Director:
Martin Scorsese
| 
    Stars:
Robert De Niro, 
Al Pacino, 
Joe Pesci, 
Harvey Keitel
', '345,455', '209', '$7.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Lord of the Rings: The Return of the King', '-2003', '
Action, Adventure, Drama            ', '8.9', '
Gandalf and Aragorn lead the World of Men against Sauron''s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', '
    Director:
Peter Jackson
| 
    Stars:
Elijah Wood, 
Viggo Mortensen, 
Ian McKellen, 
Orlando Bloom
', '1,691,777', '201', '$377.85M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Baby Driver', '-2017', '
Action, Crime, Drama            ', '7.6', '
After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.', '
    Director:
Edgar Wright
| 
    Stars:
Ansel Elgort, 
Jon Bernthal, 
Jon Hamm, 
Eiza GonzÃ¡lez
', '468,655', '113', '$107.83M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Spider-Man', '-2002', '
Action, Adventure, Sci-Fi            ', '7.3', '
When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.', '
    Director:
Sam Raimi
| 
    Stars:
Tobey Maguire, 
Kirsten Dunst, 
Willem Dafoe, 
James Franco
', '709,684', '121', '$403.71M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jumanji: The Next Level', '-2019', '
Action, Adventure, Comedy            ', '6.7', '
In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world''s most dangerous game.', '
    Director:
Jake Kasdan
| 
    Stars:
Dwayne Johnson, 
Jack Black, 
Kevin Hart, 
Karen Gillan
', '205,638', '123', '$316.83M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Arrival', '(II) (2016)', '
Drama, Sci-Fi            ', '7.9', '
A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.', '
    Director:
Denis Villeneuve
| 
    Stars:
Amy Adams, 
Jeremy Renner, 
Forest Whitaker, 
Michael Stuhlbarg
', '623,912', '116', '$100.55M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Taxi Driver', '-1976', '
Crime, Drama            ', '8.2', '
A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.', '
    Director:
Martin Scorsese
| 
    Stars:
Robert De Niro, 
Jodie Foster, 
Cybill Shepherd, 
Albert Brooks
', '752,553', '114', '$28.26M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Grease', '-1978', '
Musical, Romance            ', '7.2', '
Good girl Sandy Olsson and greaser Danny Zuko fell in love over the summer. When they unexpectedly discover they''re now in the same high school, will they be able to rekindle their romance?', '
    Director:
Randal Kleiser
| 
    Stars:
John Travolta, 
Olivia Newton-John, 
Stockard Channing, 
Jeff Conaway
', '250,587', '110', '$188.76M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Venom', '-2018', '
Action, Adventure, Sci-Fi            ', '6.7', '
A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.', '
    Director:
Ruben Fleischer
| 
    Stars:
Tom Hardy, 
Michelle Williams, 
Riz Ahmed, 
Scott Haze
', '390,167', '112', '$213.52M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Fate of the Furious', '-2017', '
Action, Adventure, Crime            ', '6.6', '
When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.', '
    Director:
F. Gary Gray
| 
    Stars:
Vin Diesel, 
Jason Statham, 
Dwayne Johnson, 
Michelle Rodriguez
', '215,795', '136', '$226.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Captain America: Civil War', '-2016', '
Action, Adventure, Sci-Fi            ', '7.8', '
Political involvement in the Avengers'' affairs causes a rift between Captain America and Iron Man.', '
    Directors:
Anthony Russo, 
Joe Russo
| 
    Stars:
Chris Evans, 
Robert Downey Jr., 
Scarlett Johansson, 
Sebastian Stan
', '697,750', '147', '$408.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sen to Chihiro no kamikakushi', '-2001', '
Animation, Adventure, Family            ', '8.6', '
During her family''s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.', '
    Director:
Hayao Miyazaki
| 
    Stars:
Daveigh Chase, 
Suzanne Pleshette, 
Miyu Irino, 
Rumi Hiiragi
', '682,809', '125', '$10.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Girl in the Spider''s Web', '-2018', '
Action, Crime, Drama            ', '6.1', '
Young computer hacker Lisbeth Salander and journalist Mikael Blomkvist find themselves caught in a web of spies, cybercriminals and corrupt government officials.', '
    Director:
Fede Alvarez
| 
    Stars:
Claire Foy, 
Beau Gadsdon, 
Sverrir Gudnason, 
LaKeith Stanfield
', '43,896', '115', '$14.84M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kong: Skull Island', '-2017', '
Action, Adventure, Fantasy            ', '6.6', '
After the Vietnam war, a team of scientists explores an uncharted island in the Pacific, venturing into the domain of the mighty Kong, and must fight to escape a primal Eden.', '
    Director:
Jordan Vogt-Roberts
| 
    Stars:
Tom Hiddleston, 
Samuel L. Jackson, 
Brie Larson, 
John C. Reilly
', '294,292', '118', '$168.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Revenant', '-2015', '
Action, Adventure, Drama            ', '8', '
A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.', '
    Director:
Alejandro G. IÃ±Ã¡rritu
| 
    Stars:
Leonardo DiCaprio, 
Tom Hardy, 
Will Poulter, 
Domhnall Gleeson
', '732,244', '156', '$183.64M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Lord of the Rings: The Two Towers', '-2002', '
Action, Adventure, Drama            ', '8.7', '
While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron''s new ally, Saruman, and his hordes of Isengard.', '
    Director:
Peter Jackson
| 
    Stars:
Elijah Wood, 
Ian McKellen, 
Viggo Mortensen, 
Orlando Bloom
', '1,529,752', '179', '$342.55M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Legally Blonde', '-2001', '
Comedy, Romance            ', '6.3', '
Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.', '
    Director:
Robert Luketic
| 
    Stars:
Reese Witherspoon, 
Luke Wilson, 
Selma Blair, 
Matthew Davis
', '195,752', '96', '$96.52M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Ocean''s Eight', '-2018', '
Action, Comedy, Crime            ', '6.3', '
Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City''s yearly Met Gala.', '
    Director:
Gary Ross
| 
    Stars:
Sandra Bullock, 
Cate Blanchett, 
Anne Hathaway, 
Mindy Kaling
', '197,909', '110', '$140.22M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Pirates of the Caribbean: Dead Men Tell No Tales', '-2017', '
Action, Adventure, Fantasy            ', '6.5', '
Captain Jack Sparrow is pursued by old rival Captain Salazar and a crew of deadly ghosts who have escaped from the Devil''s Triangle. They''re determined to kill every pirate at sea...notably Jack.', '
    Directors:
Joachim RÃ¸nning, 
Espen Sandberg
| 
    Stars:
Johnny Depp, 
Geoffrey Rush, 
Javier Bardem, 
Orlando Bloom
', '276,173', '129', '$172.56M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('2001: A Space Odyssey', '-1968', '
Adventure, Sci-Fi            ', '8.3', '
After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.', '
    Director:
Stanley Kubrick
| 
    Stars:
Keir Dullea, 
Gary Lockwood, 
William Sylvester, 
Daniel Richter
', '622,998', '149', '$56.95M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Batman v Superman: Dawn of Justice', '-2016', '
Action, Adventure, Sci-Fi            ', '6.4', '
Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.', '
    Director:
Zack Snyder
| 
    Stars:
Ben Affleck, 
Henry Cavill, 
Amy Adams, 
Jesse Eisenberg
', '657,423', '152', '$330.36M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mother!', '-2017', '
Drama, Horror, Mystery            ', '6.6', '
A couple''s relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.', '
    Director:
Darren Aronofsky
| 
    Stars:
Jennifer Lawrence, 
Javier Bardem, 
Ed Harris, 
Michelle Pfeiffer
', '201,141', '121', '$17.80M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('National Lampoon''s Animal House', '-1978', '
Comedy            ', '7.5', '
At a 1962 college, Dean Vernon Wormer is determined to expel the entire Delta Tau Chi Fraternity, but those troublemakers have other plans for him.', '
    Director:
John Landis
| 
    Stars:
John Belushi, 
Karen Allen, 
Tom Hulce, 
Stephen Furst
', '115,289', '109', '$0.20M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Midnight in Paris', '-2011', '
Comedy, Fantasy, Romance            ', '7.7', '
While on a trip to Paris with his fiancÃ©e''s family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight.', '
    Director:
Woody Allen
| 
    Stars:
Owen Wilson, 
Rachel McAdams, 
Kathy Bates, 
Kurt Fuller
', '399,157', '94', '$56.82M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kill Bill: Vol. 2', '-2004', '
Action, Crime, Thriller            ', '8', '
The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.', '
    Director:
Quentin Tarantino
| 
    Stars:
Uma Thurman, 
David Carradine, 
Michael Madsen, 
Daryl Hannah
', '706,053', '137', '$66.21M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Moneyball', '-2011', '
Biography, Drama, Sport            ', '7.6', '
Oakland A''s general manager Billy Beane''s successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.', '
    Director:
Bennett Miller
| 
    Stars:
Brad Pitt, 
Robin Wright, 
Jonah Hill, 
Philip Seymour Hoffman
', '386,263', '133', '$75.61M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Snowpiercer', '-2013', '
Action, Drama, Sci-Fi            ', '7.1', '
In a future where a failed climate-change experiment has killed all life except for the lucky few who boarded the Snowpiercer, a train that travels around the globe, a new class system emerges.', '
    Director:
Bong Joon Ho
| 
    Stars:
Chris Evans, 
Jamie Bell, 
Tilda Swinton, 
Ed Harris
', '335,946', '126', '$4.56M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('300: Rise of an Empire', '-2014', '
Action, Drama            ', '6.2', '
Greek general Themistokles of Athens leads the naval charge against invading Persian forces led by mortal-turned-god Xerxes and Artemisia, vengeful commander of the Persian navy.', '
    Director:
Noam Murro
| 
    Stars:
Sullivan Stapleton, 
Eva Green, 
Lena Headey, 
Hans Matheson
', '286,734', '102', '$106.58M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kimi no na wa.', '-2016', '
Animation, Drama, Fantasy            ', '8.4', '
Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?', '
    Director:
Makoto Shinkai
| 
    Stars:
RyÃ»nosuke Kamiki, 
Mone Kamishiraishi, 
RyÃ´ Narita, 
Aoi YÃ»ki
', '217,433', '106', '$5.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Booksmart', '-2019', '
Comedy            ', '7.2', '
On the eve of their high school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into one night.', '
    Director:
Olivia Wilde
| 
    Stars:
Kaitlyn Dever, 
Beanie Feldstein, 
Jessica Williams, 
Jason Sudeikis
', '103,143', '102', '$22.68M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jaws 2', '-1978', '
Adventure, Horror, Thriller            ', '5.8', '
Police chief Brody must protect the citizens of Amity after a second monstrous shark begins terrorizing the waters.', '
    Director:
Jeannot Szwarc
| 
    Stars:
Roy Scheider, 
Lorraine Gary, 
Murray Hamilton, 
Joseph Mascolo
', '73,931', '116', '$102.92M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Tropic Thunder', '-2008', '
Action, Comedy, War            ', '7', '
Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying.', '
    Director:
Ben Stiller
| 
    Stars:
Ben Stiller, 
Jack Black, 
Robert Downey Jr., 
Jeff Kahn
', '391,033', '107', '$110.52M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Beauty and the Beast', '(I) (2017)', '
Family, Fantasy, Musical            ', '7.1', '
A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.', '
    Director:
Bill Condon
| 
    Stars:
Emma Watson, 
Dan Stevens, 
Luke Evans, 
Josh Gad
', '284,484', '129', '$504.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hell or High Water', '(II) (2016)', '
Action, Crime, Drama            ', '7.6', '
A divorced father and his ex-con older brother resort to a desperate scheme in order to save their family''s ranch in West Texas.', '
    Director:
David Mackenzie
| 
    Stars:
Chris Pine, 
Ben Foster, 
Jeff Bridges, 
Gil Birmingham
', '211,816', '102', '$26.86M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Marriage Story', '-2019', '
Comedy, Drama, Romance            ', '7.9', '
Noah Baumbach''s incisive and compassionate look at a marriage breaking up and a family staying together.', '
    Director:
Noah Baumbach
| 
    Stars:
Adam Driver, 
Scarlett Johansson, 
Julia Greer, 
Azhy Robertson
', '266,307', '137', '$2.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Annihilation', '-2018', '
Adventure, Drama, Horror            ', '6.8', '
A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don''t apply.', '
    Director:
Alex Garland
| 
    Stars:
Natalie Portman, 
Jennifer Jason Leigh, 
Tessa Thompson, 
Benedict Wong
', '293,459', '115', '$32.73M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Wind River', '-2017', '
Crime, Drama, Mystery            ', '7.7', '
A veteran hunter helps an FBI agent investigate the murder of a young woman on a Wyoming Native American reservation.', '
    Director:
Taylor Sheridan
| 
    Stars:
Elizabeth Olsen, 
Jeremy Renner, 
Graham Greene, 
Kelsey Asbille
', '218,337', '107', '$33.80M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Frozen', '(I) (2013)', '
Animation, Adventure, Comedy            ', '7.4', '
When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.', '
    Directors:
Chris Buck, 
Jennifer Lee
| 
    Stars:
Kristen Bell, 
Idina Menzel, 
Jonathan Groff, 
Josh Gad
', '586,769', '102', '$400.74M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Lo imposible', '-2012', '
Drama, History, Thriller            ', '7.6', '
The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.', '
    Director:
J.A. Bayona
| 
    Stars:
Naomi Watts, 
Ewan McGregor, 
Tom Holland, 
Oaklee Pendergast
', '208,903', '114', '$19.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Nice Guys', '-2016', '
Action, Comedy, Crime            ', '7.4', '
In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.', '
    Director:
Shane Black
| 
    Stars:
Russell Crowe, 
Ryan Gosling, 
Angourie Rice, 
Matt Bomer
', '295,435', '116', '$36.26M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Snowman', '-2017', '
Crime, Drama, Thriller            ', '5.1', '
Detective Harry Hole investigates the disappearance of a woman whose scarf is found wrapped around an ominous-looking snowman.', '
    Director:
Tomas Alfredson
| 
    Stars:
Michael Fassbender, 
Rebecca Ferguson, 
Charlotte Gainsbourg, 
Jonas Karlsson
', '60,354', '119', '$6.67M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Moonrise Kingdom', '-2012', '
Comedy, Drama, Romance            ', '7.8', '
A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.', '
    Director:
Wes Anderson
| 
    Stars:
Jared Gilman, 
Kara Hayward, 
Bruce Willis, 
Bill Murray
', '328,550', '94', '$45.51M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Contagion', '-2011', '
Drama, Thriller            ', '6.7', '
Healthcare professionals, government officials and everyday people find themselves in the midst of a pandemic as the CDC works to find a cure.', '
    Director:
Steven Soderbergh
| 
    Stars:
Matt Damon, 
Kate Winslet, 
Jude Law, 
Gwyneth Paltrow
', '290,444', '106', '$75.66M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('This Is England', '-2006', '
Crime, Drama            ', '7.7', '
A young boy becomes friends with a gang of skinheads. Friends soon become like family, and relationships will be pushed to the very limit.', '
    Director:
Shane Meadows
| 
    Stars:
Thomas Turgoose, 
Stephen Graham, 
Jo Hartley, 
Andrew Shim
', '117,889', '101', '$0.33M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Willy Wonka & the Chocolate Factory', '-1971', '
Family, Fantasy, Musical            ', '7.8', '
A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka''s mysterious chocolate factory.', '
    Director:
Mel Stuart
| 
    Stars:
Gene Wilder, 
Jack Albertson, 
Peter Ostrum, 
Roy Kinnear
', '186,202', '100', '$4.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Homefront', '(I) (2013)', '
Action, Crime, Thriller            ', '6.5', '
A former DEA agent moves his family to a quiet town, where he soon tangles with a local meth druglord.', '
    Director:
Gary Fleder
| 
    Stars:
Jason Statham, 
James Franco, 
Winona Ryder, 
Kate Bosworth
', '113,476', '100', '$20.16M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dead Poets Society', '-1989', '
Comedy, Drama            ', '8.1', '
Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.', '
    Director:
Peter Weir
| 
    Stars:
Robin Williams, 
Robert Sean Leonard, 
Ethan Hawke, 
Josh Charles
', '443,357', '128', '$95.86M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('There''s Something About Mary', '-1998', '
Comedy, Romance            ', '7.1', '
A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster.', '
    Directors:
Bobby Farrelly, 
Peter Farrelly
| 
    Stars:
Cameron Diaz, 
Matt Dillon, 
Ben Stiller, 
Lee Evans
', '298,729', '119', '$176.48M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Lucy', '(I) (2014)', '
Action, Sci-Fi, Thriller            ', '6.4', '
A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.', '
    Director:
Luc Besson
| 
    Stars:
Scarlett Johansson, 
Morgan Freeman, 
Choi Min-sik, 
Amr Waked
', '462,122', '89', '$126.66M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Mummy', '-2017', '
Action, Adventure, Fantasy            ', '5.4', '
An ancient Egyptian princess is awakened from her crypt beneath the desert, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.', '
    Director:
Alex Kurtzman
| 
    Stars:
Tom Cruise, 
Sofia Boutella, 
Annabelle Wallis, 
Russell Crowe
', '177,592', '110', '$80.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Birdman or (The Unexpected Virtue of Ignorance)', '-2014', '
Comedy, Drama            ', '7.7', '
A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.', '
    Director:
Alejandro G. IÃ±Ã¡rritu
| 
    Stars:
Michael Keaton, 
Zach Galifianakis, 
Edward Norton, 
Andrea Riseborough
', '595,946', '119', '$42.34M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Knock Knock', '(I) (2015)', '
Drama, Thriller            ', '4.9', '
A devoted father helps two stranded young women who knock on his door, but his kind gesture turns into a dangerous seduction and a deadly game of cat and mouse.', '
    Director:
Eli Roth
| 
    Stars:
Keanu Reeves, 
Lorenza Izzo, 
Ana de Armas, 
Aaron Burns
', '87,474', '99', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hauru no ugoku shiro', '-2004', '
Animation, Adventure, Family            ', '8.2', '
When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.', '
    Director:
Hayao Miyazaki
| 
    Stars:
Chieko BaishÃ´, 
Takuya Kimura, 
Tatsuya GashÃ»in, 
Akihiro Miwa
', '351,466', '119', '$4.71M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Now You See Me', '(I) (2013)', '
Crime, Mystery, Thriller            ', '7.2', '
An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.', '
    Director:
Louis Leterrier
| 
    Stars:
Jesse Eisenberg, 
Common, 
Mark Ruffalo, 
Woody Harrelson
', '614,056', '115', '$117.72M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Lost World: Jurassic Park', '-1997', '
Action, Adventure, Sci-Fi            ', '6.6', '
A research team is sent to the Jurassic Park Site B island to study the dinosaurs there, while an InGen team approaches with another agenda.', '
    Director:
Steven Spielberg
| 
    Stars:
Jeff Goldblum, 
Julianne Moore, 
Pete Postlethwaite, 
Vince Vaughn
', '390,425', '129', '$229.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Geostorm', '-2017', '
Action, Sci-Fi, Thriller            ', '5.3', '
When the network of satellites designed to control the global climate starts to attack Earth, it''s a race against the clock for its creator to uncover the real threat before a worldwide Geostorm wipes out everything and everyone.', '
    Director:
Dean Devlin
| 
    Stars:
Gerard Butler, 
Jim Sturgess, 
Abbie Cornish, 
Alexandra Maria Lara
', '99,724', '109', '$33.70M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sausage Party', '-2016', '
Animation, Adventure, Comedy            ', '6.1', '
A sausage strives to discover the truth about his existence.', '
    Directors:
Greg Tiernan, 
Conrad Vernon
| 
    Stars:
Seth Rogen, 
Kristen Wiig, 
Jonah Hill, 
Alistair Abell
', '181,775', '89', '$97.69M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Next Three Days', '-2010', '
Action, Crime, Drama            ', '7.3', '
A married couple''s life is turned upside down when the wife is accused of a murder.', '
    Director:
Paul Haggis
| 
    Stars:
Russell Crowe, 
Elizabeth Banks, 
Liam Neeson, 
Michael Buie
', '189,815', '133', '$21.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Moonlight', '(I) (2016)', '
Drama            ', '7.4', '
A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.', '
    Director:
Barry Jenkins
| 
    Stars:
Mahershala Ali, 
Naomie Harris, 
Trevante Rhodes, 
Alex R. Hibbert
', '285,273', '111', '$27.85M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('In the Heart of the Sea', '-2015', '
Action, Adventure, Biography            ', '6.9', '
A recounting of a New England whaling ship''s sinking by a giant whale in 1820, an experience that later inspired the great novel Moby-Dick.', '
    Director:
Ron Howard
| 
    Stars:
Chris Hemsworth, 
Cillian Murphy, 
Brendan Gleeson, 
Ben Whishaw
', '128,605', '122', '$25.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Contact', '-1997', '
Drama, Mystery, Sci-Fi            ', '7.5', '
Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine.', '
    Director:
Robert Zemeckis
| 
    Stars:
Jodie Foster, 
Matthew McConaughey, 
Tom Skerritt, 
John Hurt
', '261,289', '150', '$100.92M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Climax', '(I) (2018)', '
Drama, Horror, Music            ', '7', '
French dancers gather in a remote, empty school building to rehearse on a wintry night. The all-night celebration morphs into a hallucinatory nightmare when they learn their sangria is laced with LSD.', '
    Director:
Gaspar NoÃ©
| 
    Stars:
Sofia Boutella, 
Romain Guillermic, 
Souheila Yacoub, 
Kiddy Smile
', '58,051', '97', '$0.80M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Rango', '-2011', '
Animation, Adventure, Comedy            ', '7.2', '
Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a lawless outpost in the Wild West in desperate need of a new sheriff.', '
    Director:
Gore Verbinski
| 
    Stars:
Johnny Depp, 
Isla Fisher, 
Timothy Olyphant, 
Abigail Breslin
', '245,778', '107', '$123.48M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Gods of Egypt', '-2016', '
Action, Adventure, Fantasy            ', '5.4', '
Mortal hero Bek teams with the god Horus in an alliance against Set, the merciless god of darkness, who has usurped Egypt''s throne, plunging the once peaceful and prosperous empire into chaos and conflict.', '
    Director:
Alex Proyas
| 
    Stars:
Brenton Thwaites, 
Nikolaj Coster-Waldau, 
Gerard Butler, 
Chadwick Boseman
', '109,959', '127', '$31.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kung Fu Panda 3', '-2016', '
Animation, Action, Adventure            ', '7.1', '
Continuing his legendary adventures of awesomeness, Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.', '
    Directors:
Alessandro Carloni, 
Jennifer Yuh Nelson
| 
    Stars:
Jack Black, 
Bryan Cranston, 
Dustin Hoffman, 
Angelina Jolie
', '141,657', '95', '$143.53M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Ender''s Game', '-2013', '
Action, Adventure, Fantasy            ', '6.6', '
Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, an insectoid alien race who had previously tried to invade Earth and had inflicted heavy losses on humankind.', '
    Director:
Gavin Hood
| 
    Stars:
Harrison Ford, 
Asa Butterfield, 
Hailee Steinfeld, 
Abigail Breslin
', '228,812', '114', '$61.74M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Planet of the Apes', '-1968', '
Adventure, Sci-Fi            ', '8', '
An astronaut crew crash-lands on a planet in the distant future where intelligent talking apes are the dominant species, and humans are the oppressed and enslaved.', '
    Director:
Franklin J. Schaffner
| 
    Stars:
Charlton Heston, 
Roddy McDowall, 
Kim Hunter, 
Maurice Evans
', '170,681', '112', '$33.40M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Downsizing', '-2017', '
Drama, Fantasy, Sci-Fi            ', '5.7', '
A social satire in which a man realizes he would have a better life if he were to shrink himself to five inches tall, allowing him to live in wealth and splendor.', '
    Director:
Alexander Payne
| 
    Stars:
Matt Damon, 
Christoph Waltz, 
Hong Chau, 
Kristen Wiig
', '102,222', '135', '$24.45M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Lone Survivor', '-2013', '
Action, Biography, Drama            ', '7.5', '
Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare.', '
    Director:
Peter Berg
| 
    Stars:
Mark Wahlberg, 
Taylor Kitsch, 
Emile Hirsch, 
Ben Foster
', '273,061', '121', '$125.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Founder', '-2016', '
Biography, Drama            ', '7.2', '
The story of Ray Kroc, a salesman who turned two brothers'' innovative fast food eatery, McDonald''s, into the biggest restaurant business in the world, with a combination of ambition, persistence, and ruthlessness.', '
    Director:
John Lee Hancock
| 
    Stars:
Michael Keaton, 
Nick Offerman, 
John Carroll Lynch, 
Linda Cardellini
', '134,759', '115', '$12.79M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mononoke-hime', '-1997', '
Animation, Action, Adventure            ', '8.4', '
On a journey to find the cure for a Tatarigami''s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.', '
    Director:
Hayao Miyazaki
| 
    Stars:
YÃ´ji Matsuda, 
Yuriko Ishida, 
YÃ»ko Tanaka, 
Billy Crudup
', '359,473', '134', '$2.38M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('101 Dalmatians', '-1996', '
Adventure, Comedy, Crime            ', '5.7', '
An evil high-fashion designer plots to steal Dalmatian puppies in order to make an extravagant fur coat, but instead creates an extravagant mess.', '
    Director:
Stephen Herek
| 
    Stars:
Glenn Close, 
Jeff Daniels, 
Joely Richardson, 
Joan Plowright
', '106,580', '103', '$136.19M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Rampage', '-2018', '
Action, Adventure, Sci-Fi            ', '6.1', '
When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.', '
    Director:
Brad Peyton
| 
    Stars:
Dwayne Johnson, 
Naomie Harris, 
Malin Akerman, 
Jeffrey Dean Morgan
', '151,688', '107', '$101.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Croods', '-2013', '
Animation, Adventure, Comedy            ', '7.2', '
After their cave is destroyed, a caveman family must trek through an unfamiliar fantastical world with the help of an inventive boy.', '
    Directors:
Kirk DeMicco, 
Chris Sanders
| 
    Stars:
Nicolas Cage, 
Ryan Reynolds, 
Emma Stone, 
Catherine Keener
', '200,206', '98', '$187.17M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Firm', '-1993', '
Drama, Mystery, Thriller            ', '6.8', '
A young lawyer joins a prestigious law firm only to discover that it has a sinister dark side.', '
    Director:
Sydney Pollack
| 
    Stars:
Tom Cruise, 
Jeanne Tripplehorn, 
Gene Hackman, 
Hal Holbrook
', '124,972', '154', '$158.35M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Clovehitch Killer', '-2018', '
Crime, Drama, Mystery            ', '6.6', '
A picture-perfect family is shattered when the work of a serial killer hits too close to home.', '
    Director:
Duncan Skiles
| 
    Stars:
Dylan McDermott, 
Charlie Plummer, 
Samantha Mathis, 
Madisen Beaty
', '21,572', '109', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Death Wish', '-2018', '
Action, Crime, Drama            ', '6.3', '
Dr. Paul Kersey is an experienced trauma surgeon, a man who has spent his life saving lives. After an attack on his family, Paul embarks on his own mission for justice.', '
    Director:
Eli Roth
| 
    Stars:
Bruce Willis, 
Vincent D''Onofrio, 
Elisabeth Shue, 
Camila Morrone
', '68,094', '107', '$34.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Blues Brothers', '-1980', '
Action, Adventure, Comedy            ', '7.9', '
Jake Blues, just released from prison, puts together his old band to save the Catholic home where he and his brother Elwood were raised.', '
    Director:
John Landis
| 
    Stars:
John Belushi, 
Dan Aykroyd, 
Cab Calloway, 
John Candy
', '188,459', '133', '$57.23M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Unknown', '(I) (2011)', '
Action, Mystery, Thriller            ', '6.8', '
When a man awakens from a coma only to discover that someone has taken on his identity, he teams up with a young woman to prove who he is.', '
    Director:
Jaume Collet-Serra
| 
    Stars:
Liam Neeson, 
Diane Kruger, 
January Jones, 
Aidan Quinn
', '253,999', '113', '$63.69M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hunt for the Wilderpeople', '-2016', '
Adventure, Comedy, Drama            ', '7.9', '
A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.', '
    Director:
Taika Waititi
| 
    Stars:
Sam Neill, 
Julian Dennison, 
Rima Te Wiata, 
Rachel House
', '118,166', '101', '$5.20M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Monty Python and the Holy Grail', '-1975', '
Adventure, Comedy, Fantasy            ', '8.2', '
King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.', '
    Directors:
Terry Gilliam, 
Terry Jones
| 
    Stars:
Graham Chapman, 
John Cleese, 
Eric Idle, 
Terry Gilliam
', '513,289', '91', '$1.23M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Best of Enemies', '-2019', '
Biography, Drama, History            ', '7.2', '
Civil rights activist Ann Atwater faces off against C.P. Ellis, Exalted Cyclops of the Ku Klux Klan, in 1971 Durham, North Carolina over the issue of school integration.', '
    Director:
Robin Bissell
| 
    Stars:
Taraji P. Henson, 
Sam Rockwell, 
Babou Ceesay, 
Anne Heche
', '13,196', '133', '$10.21M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Atomic Blonde', '-2017', '
Action, Thriller            ', '6.7', '
An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.', '
    Director:
David Leitch
| 
    Stars:
Charlize Theron, 
James McAvoy, 
John Goodman, 
Eddie Marsan
', '182,505', '115', '$51.69M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Lucky One', '-2012', '
Drama, Mystery, Romance            ', '6.5', '
A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.', '
    Director:
Scott Hicks
| 
    Stars:
Zac Efron, 
Taylor Schilling, 
Blythe Danner, 
Riley Thomas Stewart
', '103,765', '101', '$60.46M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Spy Kids', '-2001', '
Action, Adventure, Comedy            ', '5.5', '
Using high tech gadgets, two kids have to save their reactivated OSS top spy parents when they''re taken by an evil, high tech enemy.', '
    Director:
Robert Rodriguez
| 
    Stars:
Alexa PenaVega, 
Daryl Sabara, 
Antonio Banderas, 
Carla Gugino
', '111,413', '88', '$112.72M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('White House Down', '-2013', '
Action, Drama, Thriller            ', '6.3', '
While on a tour of the White House with his young daughter, a Capitol policeman springs into action to save his child and protect the president from a heavily armed group of paramilitary invaders.', '
    Director:
Roland Emmerich
| 
    Stars:
Channing Tatum, 
Jamie Foxx, 
Maggie Gyllenhaal, 
Jason Clarke
', '211,395', '131', '$73.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Human Centipede (First Sequence)', '-2009', '
Horror            ', '4.4', '
A mad scientist kidnaps and mutilates a trio of tourists in order to reassemble them into a human centipede, created by stitching their mouths to each others'' rectums.', '
    Director:
Tom Six
| 
    Stars:
Dieter Laser, 
Ashley C. Williams, 
Ashlynn Yennie, 
Akihiro Kitamura
', '75,214', '92', '$0.18M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Cars 3', '-2017', '
Animation, Adventure, Comedy            ', '6.7', '
Lightning McQueen sets out to prove to a new generation of racers that he''s still the best race car in the world.', '
    Director:
Brian Fee
| 
    Stars:
Owen Wilson, 
Cristela Alonzo, 
Chris Cooper, 
Nathan Fillion
', '83,135', '102', '$152.90M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Southpaw', '-2015', '
Action, Crime, Drama            ', '7.4', '
After a fatal incident sends him on a rampant path of destruction, a champion boxer fights to get custody of his daughter and revive his professional career.', '
    Director:
Antoine Fuqua
| 
    Stars:
Jake Gyllenhaal, 
Rachel McAdams, 
Oona Laurence, 
Forest Whitaker
', '223,775', '124', '$52.42M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The A-Team', '-2010', '
Action, Adventure, Thriller            ', '6.7', '
A group of Iraq War veterans look to clear their name with the U.S. Military, who suspect the four men of committing a crime for which they were framed.', '
    Director:
Joe Carnahan
| 
    Stars:
Liam Neeson, 
Bradley Cooper, 
Sharlto Copley, 
Jessica Biel
', '250,321', '117', '$77.22M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('This Means War', '-2012', '
Action, Comedy, Romance            ', '6.3', '
C.I.A. operatives wage an epic battle on each other when they discover they are dating the same woman.', '
    Director:
McG
| 
    Stars:
Reese Witherspoon, 
Chris Pine, 
Tom Hardy, 
Til Schweiger
', '179,783', '103', '$54.76M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Shaft', '-2019', '
Action, Comedy, Crime            ', '6.4', '
JJ Shaft, a cyber security expert with a degree from MIT, enlists his family''s help to uncover the truth behind his best friend''s untimely death.', '
    Director:
Tim Story
| 
    Stars:
Samuel L. Jackson, 
Jessie T. Usher, 
Richard Roundtree, 
Regina Hall
', '48,354', '111', '$21.36M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Lawrence of Arabia', '-1962', '
Adventure, Biography, Drama            ', '8.3', '
The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.', '
    Director:
David Lean
| 
    Stars:
Peter O''Toole, 
Alec Guinness, 
Anthony Quinn, 
Jack Hawkins
', '276,605', '228', '$44.82M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mars Attacks!', '-1996', '
Comedy, Sci-Fi            ', '6.3', '
Earth is invaded by Martians with unbeatable weapons and a cruel sense of humor.', '
    Director:
Tim Burton
| 
    Stars:
Jack Nicholson, 
Pierce Brosnan, 
Sarah Jessica Parker, 
Annette Bening
', '215,049', '106', '$37.77M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Beauty and the Beast', '-1991', '
Animation, Family, Fantasy            ', '8', '
A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman''s love.', '
    Directors:
Gary Trousdale, 
Kirk Wise
| 
    Stars:
Paige O''Hara, 
Robby Benson, 
Jesse Corti, 
Rex Everhart
', '425,384', '84', '$218.97M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Finding Dory', '-2016', '
Animation, Adventure, Comedy            ', '7.3', '
Friendly but forgetful blue tang Dory begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.', '
    Directors:
Andrew Stanton, 
Angus MacLane
| 
    Stars:
Ellen DeGeneres, 
Albert Brooks, 
Ed O''Neill, 
Kaitlin Olson
', '250,953', '97', '$486.30M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Public Enemies', '-2009', '
Biography, Crime, Drama            ', '7', '
The Feds try to take down notorious American gangsters John Dillinger, Baby Face Nelson and Pretty Boy Floyd during a booming crime wave in the 1930s.', '
    Director:
Michael Mann
| 
    Stars:
Christian Bale, 
Johnny Depp, 
Christian Stolte, 
Jason Clarke
', '288,097', '140', '$97.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('127 Hours', '-2010', '
Biography, Drama            ', '7.5', '
A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.', '
    Director:
Danny Boyle
| 
    Stars:
James Franco, 
Amber Tamblyn, 
Kate Mara, 
Sean Bott
', '357,144', '94', '$18.34M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jurassic Park III', '-2001', '
Action, Adventure, Sci-Fi            ', '5.9', '
A decidedly odd couple with ulterior motives convince Dr. Grant to go to Isla Sorna for a holiday, but their unexpected landing startles the island''s new inhabitants.', '
    Director:
Joe Johnston
| 
    Stars:
Sam Neill, 
William H. Macy, 
TÃ©a Leoni, 
Alessandro Nivola
', '302,292', '92', '$181.17M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Revenge', '(II) (2017)', '
Action, Horror, Thriller            ', '6.4', '
Never take your mistress on an annual guys'' getaway, especially one devoted to hunting - a violent lesson for three wealthy married men.', '
    Director:
Coralie Fargeat
| 
    Stars:
Matilda Anna Ingrid Lutz, 
Kevin Janssens, 
Vincent Colombe, 
Guillaume BouchÃ¨de
', '39,034', '108', '$0.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Total Recall', '(I) (2012)', '
Action, Adventure, Sci-Fi            ', '6.2', '
A factory worker, Douglas Quaid, begins to suspect that he is a spy after visiting Rekall - a company that provides its clients with implanted fake memories of a life they would like to have led - goes wrong and he finds himself on the run.', '
    Director:
Len Wiseman
| 
    Stars:
Colin Farrell, 
Bokeem Woodbine, 
Bryan Cranston, 
Kate Beckinsale
', '244,708', '118', '$58.88M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Footloose', '-1984', '
Drama, Music, Romance            ', '6.6', '
A city teenager moves to a small town where rock music and dancing have been banned, and his rebellious spirit shakes up the populace.', '
    Director:
Herbert Ross
| 
    Stars:
Kevin Bacon, 
Lori Singer, 
John Lithgow, 
Dianne Wiest
', '73,935', '107', '$80.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Brooklyn', '-2015', '
Drama, Romance            ', '7.5', '
An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local. When her past catches up with her, however, she must choose between two countries and the lives that exist within.', '
    Director:
John Crowley
| 
    Stars:
Saoirse Ronan, 
Emory Cohen, 
Domhnall Gleeson, 
Jim Broadbent
', '135,157', '117', '$38.32M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Child''s Play', '-2019', '
Drama, Horror, Sci-Fi            ', '5.7', '
A mother gives her 13-year-old son a toy doll for his birthday, unaware of its more sinister nature.', '
    Director:
Lars Klevberg
| 
    Stars:
Tim Matheson, 
Ben Daon, 
Zahra Anderson, 
Serge Jaswal
', '46,932', '90', '$29.21M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Danish Girl', '-2015', '
Biography, Drama, Romance            ', '7.1', '
A fictitious love story loosely inspired by the lives of Danish artists Lili Elbe and Gerda Wegener. Lili and Gerda''s marriage and work evolve as they navigate Lili''s groundbreaking journey as a transgender pioneer.', '
    Director:
Tom Hooper
| 
    Stars:
Eddie Redmayne, 
Alicia Vikander, 
Amber Heard, 
Ben Whishaw
', '171,124', '119', '$11.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Bad Batch', '-2016', '
Action, Horror, Mystery            ', '5.3', '
In a desert dystopia, a young woman is kidnapped by cannibals.', '
    Director:
Ana Lily Amirpour
| 
    Stars:
Suki Waterhouse, 
Jason Momoa, 
Jayda Fink, 
Keanu Reeves
', '28,243', '118', '$0.18M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Now You See Me 2', '-2016', '
Action, Adventure, Comedy            ', '6.5', '
The Four Horsemen resurface, and are forcibly recruited by a tech genius to pull off their most impossible heist yet.', '
    Director:
Jon M. Chu
| 
    Stars:
Jesse Eisenberg, 
Mark Ruffalo, 
Woody Harrelson, 
Dave Franco
', '261,079', '129', '$65.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Tourist', '(I) (2010)', '
Action, Thriller            ', '6', '
Revolves around Frank, an American tourist visiting Italy to mend a broken heart. Elise is an extraordinary woman who deliberately crosses his path.', '
    Director:
Florian Henckel von Donnersmarck
| 
    Stars:
Johnny Depp, 
Angelina Jolie, 
Paul Bettany, 
Timothy Dalton
', '230,565', '103', '$67.63M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Emperor''s New Groove', '-2000', '
Animation, Adventure, Comedy            ', '7.4', '
Emperor Kuzco is turned into a llama by his ex-administrator Yzma, and must now regain his throne with the help of Pacha, the gentle llama herder.', '
    Director:
Mark Dindal
| 
    Stars:
David Spade, 
John Goodman, 
Eartha Kitt, 
Patrick Warburton
', '187,523', '78', '$89.30M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Deepwater Horizon', '-2016', '
Action, Drama, History            ', '7.1', '
A dramatization of the disaster in April 2010, when the offshore drilling rig called the Deepwater Horizon exploded, resulting in the worst oil spill in American history.', '
    Director:
Peter Berg
| 
    Stars:
Mark Wahlberg, 
Kurt Russell, 
Douglas M. Griffin, 
James DuMont
', '158,184', '107', '$61.43M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Dictator', '-2012', '
Comedy            ', '6.4', '
The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.', '
    Director:
Larry Charles
| 
    Stars:
Sacha Baron Cohen, 
Anna Faris, 
John C. Reilly, 
Ben Kingsley
', '287,003', '83', '$59.65M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Green Room', '-2015', '
Horror, Thriller            ', '7', '
A punk rock band is forced to fight for survival after witnessing a murder at a neo-Nazi skinhead bar.', '
    Director:
Jeremy Saulnier
| 
    Stars:
Anton Yelchin, 
Imogen Poots, 
Alia Shawkat, 
Patrick Stewart
', '112,522', '95', '$3.22M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Post', '-2017', '
Drama            ', '7.2', '
A cover-up spanning four U.S. Presidents pushes the country''s first female newspaper publisher and her editor to join an unprecedented battle between press and government.', '
    Director:
Steven Spielberg
| 
    Stars:
Meryl Streep, 
Tom Hanks, 
Sarah Paulson, 
Bob Odenkirk
', '141,624', '116', '$81.90M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Spartacus', '-1960', '
Adventure, Biography, Drama            ', '7.9', '
The slave Spartacus leads a violent revolt against the decadent Roman Republic.', '
    Director:
Stanley Kubrick
| 
    Stars:
Kirk Douglas, 
Laurence Olivier, 
Jean Simmons, 
Charles Laughton
', '128,685', '197', '$30.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Tonari no Totoro', '-1988', '
Animation, Family, Fantasy            ', '8.2', '
When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.', '
    Director:
Hayao Miyazaki
| 
    Stars:
Hitoshi Takagi, 
Noriko Hidaka, 
Chika Sakamoto, 
Shigesato Itoi
', '305,790', '86', '$1.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Quick and the Dead', '-1995', '
Action, Romance, Thriller            ', '6.4', '
A female gunfighter returns to a frontier town where a dueling tournament is being held, which she enters in an effort to avenge her father''s death.', '
    Director:
Sam Raimi
| 
    Stars:
Sharon Stone, 
Gene Hackman, 
Russell Crowe, 
Leonardo DiCaprio
', '88,608', '107', '$18.64M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Knocked Up', '-2007', '
Comedy, Romance            ', '6.9', '
For fun-loving party animal Ben Stone, the last thing he ever expected was for his one-night stand to show up on his doorstep eight weeks later to tell him she''s pregnant with his child.', '
    Director:
Judd Apatow
| 
    Stars:
Seth Rogen, 
Katherine Heigl, 
Paul Rudd, 
Leslie Mann
', '356,979', '129', '$148.73M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Fatal Attraction', '-1987', '
Drama, Thriller            ', '6.9', '
A married man''s one-night stand comes back to haunt him when that lover begins to stalk him and his family.', '
    Director:
Adrian Lyne
| 
    Stars:
Michael Douglas, 
Glenn Close, 
Anne Archer, 
Ellen Latzen
', '79,936', '119', '$156.65M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dreamgirls', '-2006', '
Drama, Music, Musical            ', '6.5', '
A trio of black female soul singers cross over to the pop charts in the early 1960s, facing their own personal struggles along the way.', '
    Director:
Bill Condon
| 
    Stars:
BeyoncÃ©, 
Jamie Foxx, 
Eddie Murphy, 
Danny Glover
', '70,985', '130', '$103.37M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Smokin'' Aces', '-2006', '
Action, Comedy, Crime            ', '6.7', '
When a Las Vegas performer-turned-snitch named Buddy Israel decides to turn state''s evidence and testify against the mob, it seems that a whole lot of people would like to make sure he''s no longer breathing.', '
    Director:
Joe Carnahan
| 
    Stars:
Jeremy Piven, 
Ryan Reynolds, 
Ray Liotta, 
Joseph Ruskin
', '140,790', '109', '$35.66M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Serenity', '-2019', '
Drama, Mystery, Thriller            ', '5.4', '
A fishing boat captain juggles facing his mysterious past and finding himself ensnared in a reality where nothing is what it seems.', '
    Director:
Steven Knight
| 
    Stars:
Matthew McConaughey, 
Anne Hathaway, 
Diane Lane, 
Jason Clarke
', '38,364', '106', '$8.55M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hotel Transylvania 3: Summer Vacation', '-2018', '
Animation, Adventure, Comedy            ', '6.3', '
Count Dracula and company participate in a cruise for sea-loving monsters, unaware that their boat is being commandeered by the monster-hating Van Helsing family.', '
    Director:
Genndy Tartakovsky
| 
    Stars:
Adam Sandler, 
Andy Samberg, 
Selena Gomez, 
Kevin James
', '62,255', '97', '$167.51M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Triple 9', '-2016', '
Action, Crime, Thriller            ', '6.3', '
A gang of criminals and corrupt cops plan the murder of a police officer in order to pull off their biggest heist yet across town.', '
    Director:
John Hillcoat
| 
    Stars:
Casey Affleck, 
Chiwetel Ejiofor, 
Anthony Mackie, 
Aaron Paul
', '69,234', '115', '$12.63M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Easy Rider', '-1969', '
Adventure, Drama            ', '7.3', '
Two bikers head from L.A. to New Orleans through the open country and desert lands, and along the way they meet a man who bridges a counter-culture gap of which they had been unaware.', '
    Director:
Dennis Hopper
| 
    Stars:
Peter Fonda, 
Dennis Hopper, 
Jack Nicholson, 
Antonio Mendoza
', '104,511', '95', '$41.73M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('A Walk to Remember', '-2002', '
Drama, Romance            ', '7.3', '
The story of two North Carolina teens, Landon Carter and Jamie Sullivan, who are thrown together after Landon gets into trouble and is made to do community service.', '
    Director:
Adam Shankman
| 
    Stars:
Mandy Moore, 
Shane West, 
Peter Coyote, 
Daryl Hannah
', '203,383', '101', '$41.23M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Lilo & Stitch', '-2002', '
Animation, Adventure, Comedy            ', '7.3', '
A young and parentless girl adopts a ''dog'' from the local pound, completely unaware that it''s supposedly a dangerous scientific experiment that''s taken refuge on Earth and is now hiding from its creator and those who see it as a menace.', '
    Directors:
Dean DeBlois, 
Chris Sanders
| 
    Stars:
Daveigh Chase, 
Chris Sanders, 
Tia Carrere, 
David Ogden Stiers
', '175,052', '85', '$145.79M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Operation Finale', '-2018', '
Biography, Drama, History            ', '6.6', '
A team of secret agents set out to track down the Nazi officer who masterminded the Holocaust.', '
    Director:
Chris Weitz
| 
    Stars:
Oscar Isaac, 
Ben Kingsley, 
MÃ©lanie Laurent, 
Lior Raz
', '36,593', '122', '$17.61M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Locke', '-2013', '
Drama            ', '7.1', '
Ivan Locke, a dedicated family man and successful construction manager, receives a phone call on the eve of the biggest challenge of his career that sets in motion a series of events that threaten his carefully cultivated existence.', '
    Director:
Steven Knight
| 
    Stars:
Tom Hardy, 
Olivia Colman, 
Ruth Wilson, 
Andrew Scott
', '140,930', '85', '$1.36M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('A Cinderella Story', '-2004', '
Comedy, Family, Romance            ', '5.9', '
Routinely exploited by her wicked stepmother, the downtrodden Samantha Montgomery is excited about the prospect of meeting her Internet beau at the school''s Halloween dance.', '
    Director:
Mark Rosman
| 
    Stars:
Hilary Duff, 
Chad Michael Murray, 
Jennifer Coolidge, 
Dan Byrd
', '82,876', '95', '$51.44M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Escape Plan', '-2013', '
Action, Thriller            ', '6.7', '
When a structural-security authority finds himself set up and incarcerated in the world''s most secret and secure prison, he has to use his skills to escape with help from the inside.', '
    Director:
Mikael HÃ¥fstrÃ¶m
| 
    Stars:
Sylvester Stallone, 
Arnold Schwarzenegger, 
50 Cent, 
Vincent D''Onofrio
', '233,030', '115', '$25.13M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Life of Brian', '-1979', '
Comedy            ', '8.1', '
Born on the original Christmas in the stable next door to Jesus Christ, Brian of Nazareth spends his life being mistaken for a messiah.', '
    Director:
Terry Jones
| 
    Stars:
Graham Chapman, 
John Cleese, 
Michael Palin, 
Terry Gilliam
', '378,134', '94', '$20.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Colombiana', '-2011', '
Action, Drama, Thriller            ', '6.4', '
A young girl in BogotÃ¡ witnesses her parents'' murder and grows up to be a stone-cold assassin.', '
    Director:
Olivier Megaton
| 
    Stars:
Zoe Saldana, 
Michael Vartan, 
Callum Blue, 
Jordi MollÃ 
', '97,146', '108', '$36.67M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Resident Evil: The Final Chapter', '-2016', '
Action, Horror, Sci-Fi            ', '5.5', '
Alice returns to where the nightmare began: The Hive in Raccoon City, where the Umbrella Corporation is gathering its forces for a final strike against the only remaining survivors of the apocalypse.', '
    Director:
Paul W.S. Anderson
| 
    Stars:
Milla Jovovich, 
Iain Glen, 
Ali Larter, 
Shawn Roberts
', '87,437', '107', '$26.83M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dirty Grandpa', '-2016', '
Comedy            ', '5.9', '
Right before his wedding, an uptight guy is tricked into driving his grandfather, a lecherous former Army Lieutenant Colonel, to Florida for Spring Break.', '
    Director:
Dan Mazer
| 
    Stars:
Robert De Niro, 
Zac Efron, 
Zoey Deutch, 
Aubrey Plaza
', '117,026', '102', '$35.59M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Late Night', '-2019', '
Comedy, Drama            ', '6.5', '
A late night talk show host suspects that she may soon lose her long-running show.', '
    Director:
Nisha Ganatra
| 
    Stars:
Emma Thompson, 
Mindy Kaling, 
John Lithgow, 
Hugh Dancy
', '33,065', '102', '$15.50M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Duff', '-2015', '
Comedy, Romance            ', '6.5', '
A high school senior instigates a social pecking order revolution after finding out that she has been labeled the DUFF - Designated Ugly Fat Friend - by her prettier, more popular counterparts.', '
    Director:
Ari Sandel
| 
    Stars:
Mae Whitman, 
Bella Thorne, 
Robbie Amell, 
Allison Janney
', '86,929', '101', '$34.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('You''re Next', '-2011', '
Horror, Thriller            ', '6.6', '
When the Davison family comes under attack during their wedding anniversary getaway, the gang of mysterious killers soon learns that one of the victims harbors a secret talent for fighting back.', '
    Director:
Adam Wingard
| 
    Stars:
Sharni Vinson, 
Joe Swanberg, 
AJ Bowen, 
Nicholas Tucci
', '92,232', '95', '$18.47M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Lincoln Lawyer', '-2011', '
Crime, Drama, Mystery            ', '7.3', '
A lawyer defending a wealthy man begins to believe his client is guilty of more than just one crime.', '
    Director:
Brad Furman
| 
    Stars:
Matthew McConaughey, 
Marisa Tomei, 
Ryan Phillippe, 
William H. Macy
', '222,054', '118', '$58.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Pixels', '-2015', '
Action, Comedy, Fantasy            ', '5.5', '
When aliens misinterpret video feeds of classic arcade games as a declaration of war, they attack the Earth in the form of the video games.', '
    Director:
Chris Columbus
| 
    Stars:
Adam Sandler, 
Kevin James, 
Michelle Monaghan, 
Peter Dinklage
', '135,509', '105', '$78.75M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Ten Commandments', '-1956', '
Adventure, Drama            ', '7.9', '
Moses, an Egyptian Prince, learns of his true heritage as a Hebrew and his divine mission as the deliverer of his people.', '
    Director:
Cecil B. DeMille
| 
    Stars:
Charlton Heston, 
Yul Brynner, 
Anne Baxter, 
Edward G. Robinson
', '66,532', '220', '$93.74M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Live by Night', '-2016', '
Action, Crime, Drama            ', '6.4', '
A group of Boston-bred gangsters set up shop in balmy Florida during the Prohibition era, facing off against the competition and the Ku Klux Klan.', '
    Director:
Ben Affleck
| 
    Stars:
Ben Affleck, 
Elle Fanning, 
Brendan Gleeson, 
Chris Messina
', '54,010', '129', '$10.38M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sabotage', '-2014', '
Action, Crime, Drama            ', '5.7', '
Members of an elite DEA task force find themselves being taken down one by one after they rob a drug cartel safe house.', '
    Director:
David Ayer
| 
    Stars:
Arnold Schwarzenegger, 
Sam Worthington, 
Terrence Howard, 
Olivia Williams
', '61,545', '109', '$10.51M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Despicable Me 2', '-2013', '
Animation, Adventure, Comedy            ', '7.3', '
When Gru, the world''s most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru''s own, He has to fight back with new gadgetry, cars, and more minion madness.', '
    Directors:
Pierre Coffin, 
Chris Renaud
| 
    Stars:
Steve Carell, 
Kristen Wiig, 
Benjamin Bratt, 
Miranda Cosgrove
', '377,936', '98', '$368.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Oz the Great and Powerful', '-2013', '
Adventure, Family, Fantasy            ', '6.3', '
A small-time magician is swept away to an enchanted land and is forced into a power struggle between three witches.', '
    Director:
Sam Raimi
| 
    Stars:
James Franco, 
Michelle Williams, 
Rachel Weisz, 
Mila Kunis
', '201,707', '130', '$234.91M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('CHIPS', '-2017', '
Action, Comedy, Crime            ', '6', '
A rookie officer is teamed with a hardened pro at the California Highway Patrol, though the newbie soon learns his partner is really an undercover Fed investigating a heist that may involve some crooked cops.', '
    Director:
Dax Shepard
| 
    Stars:
Michael PeÃ±a, 
Dax Shepard, 
Vincent D''Onofrio, 
Rosa Salazar
', '44,487', '100', '$18.60M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Alice Through the Looking Glass', '-2016', '
Adventure, Family, Fantasy            ', '6.2', '
Alice returns to the whimsical world of Wonderland and travels back in time to help the Mad Hatter.', '
    Director:
James Bobin
| 
    Stars:
Mia Wasikowska, 
Johnny Depp, 
Helena Bonham Carter, 
Anne Hathaway
', '98,302', '113', '$77.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Taken 3', '-2014', '
Action, Crime, Thriller            ', '6', '
Accused of a ruthless murder he never committed or witnessed, Bryan Mills goes on the run and brings out his particular set of skills to find the true killer and clear his name.', '
    Director:
Olivier Megaton
| 
    Stars:
Liam Neeson, 
Forest Whitaker, 
Maggie Grace, 
Famke Janssen
', '183,595', '108', '$89.26M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Out of the Furnace', '-2013', '
Action, Crime, Drama            ', '6.8', '
When Rodney Baze mysteriously disappears and law enforcement doesn''t follow through fast enough, his older brother, Russell, takes matters into his own hands to find justice.', '
    Director:
Scott Cooper
| 
    Stars:
Christian Bale, 
Casey Affleck, 
Zoe Saldana, 
Woody Harrelson
', '110,076', '116', '$11.33M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Noah', '-2014', '
Action, Adventure, Drama            ', '5.7', '
Noah is chosen by God to undertake a momentous mission before an apocalyptic flood cleanses the world.', '
    Director:
Darren Aronofsky
| 
    Stars:
Russell Crowe, 
Jennifer Connelly, 
Anthony Hopkins, 
Emma Watson
', '247,033', '138', '$101.20M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Takers', '-2010', '
Action, Crime, Thriller            ', '6.2', '
A group of bank robbers find their multi-million dollar plan interrupted by a hard-boiled detective.', '
    Director:
John Luessenhop
| 
    Stars:
Chris Brown, 
Hayden Christensen, 
Matt Dillon, 
Michael Ealy
', '59,882', '107', '$57.74M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Lord of War', '-2005', '
Action, Crime, Drama            ', '7.6', '
An arms dealer confronts the morality of his work as he is being chased by an INTERPOL Agent.', '
    Director:
Andrew Niccol
| 
    Stars:
Nicolas Cage, 
Ethan Hawke, 
Jared Leto, 
Bridget Moynahan
', '300,344', '122', '$24.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Blue Jasmine', '-2013', '
Comedy, Drama            ', '7.3', '
A New York socialite, deeply troubled and in denial, arrives in San Francisco to impose upon her sister. She looks a million, but isn''t bringing money, peace, or love...', '
    Director:
Woody Allen
| 
    Stars:
Cate Blanchett, 
Alec Baldwin, 
Peter Sarsgaard, 
Sally Hawkins
', '195,580', '98', '$33.41M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Expendables 2', '-2012', '
Action, Adventure, Thriller            ', '6.6', '
Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.', '
    Director:
Simon West
| 
    Stars:
Sylvester Stallone, 
Liam Hemsworth, 
Randy Couture, 
Jean-Claude Van Damme
', '296,948', '103', '$85.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Conan the Barbarian', '-2011', '
Action, Adventure, Fantasy            ', '5.2', '
A vengeful barbarian warrior sets off to get his revenge on the evil warlord who attacked his village and murdered his father when he was a boy.', '
    Director:
Marcus Nispel
| 
    Stars:
Jason Momoa, 
Ron Perlman, 
Rose McGowan, 
Stephen Lang
', '96,638', '113', '$21.30M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Battle of Britain', '-1969', '
Action, Drama, History            ', '7', '
In 1940, the British Royal Air Force fights a desperate battle to prevent the Luftwaffe from gaining air superiority over the English Channel as a prelude to a possible Axis invasion of the U.K.', '
    Director:
Guy Hamilton
| 
    Stars:
Michael Caine, 
Trevor Howard, 
Harry Andrews, 
Curd JÃ¼rgens
', '21,366', '132', '$4.36M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Begin Again', '(II) (2013)', '
Comedy, Drama, Music            ', '7.4', '
A chance encounter between a down-and-out music-business executive and a young singer-songwriter, new to Manhattan, turns into a promising collaboration between the two talents.', '
    Director:
John Carney
| 
    Stars:
Keira Knightley, 
Mark Ruffalo, 
Adam Levine, 
Hailee Steinfeld
', '147,794', '104', '$16.17M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Invitation', '(I) (2015)', '
Drama, Mystery, Thriller            ', '6.6', '
A man accepts an invitation to a dinner party hosted by his ex-wife, an unsettling affair that reopens old wounds and creates new tensions.', '
    Director:
Karyn Kusama
| 
    Stars:
Logan Marshall-Green, 
Emayatzy Corinealdi, 
Michiel Huisman, 
Tammy Blanchard
', '100,313', '100', '$0.23M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Flashdance', '-1983', '
Drama, Music, Romance            ', '6.2', '
A Pittsburgh woman with two jobs as a welder and an exotic dancer wants to get into ballet school.', '
    Director:
Adrian Lyne
| 
    Stars:
Jennifer Beals, 
Michael Nouri, 
Lilia Skala, 
Sunny Johnson
', '49,826', '95', '$94.90M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hummingbird', '(I) (2013)', '
Action, Crime, Drama            ', '6.2', '
A damaged ex-special forces soldier navigating London''s criminal underworld seizes an opportunity to assume another man''s identity.', '
    Director:
Steven Knight
| 
    Stars:
Jason Statham, 
Agata Buzek, 
Vicky McClure, 
Benedict Wong
', '68,546', '100', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Paddington 2', '-2017', '
Animation, Adventure, Comedy            ', '7.8', '
Paddington, now happily settled with the Brown family and a popular member of the local community, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy''s 100th birthday, only for the gift to be stolen.', '
    Director:
Paul King
| 
    Stars:
Ben Whishaw, 
Hugh Grant, 
Hugh Bonneville, 
Sally Hawkins
', '66,462', '103', '$40.44M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Gake no ue no Ponyo', '-2008', '
Animation, Adventure, Comedy            ', '7.7', '
A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.', '
    Director:
Hayao Miyazaki
| 
    Stars:
Cate Blanchett, 
Matt Damon, 
Liam Neeson, 
Tomoko Yamaguchi
', '131,204', '101', '$15.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mechanic: Resurrection', '-2016', '
Action, Adventure, Crime            ', '5.7', '
Bishop''s most formidable foe kidnaps the love of his life in order to make him complete three impossible assassinations and make them look like accidents.', '
    Director:
Dennis Gansel
| 
    Stars:
Jason Statham, 
Jessica Alba, 
Tommy Lee Jones, 
Michelle Yeoh
', '79,668', '98', '$21.22M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Scary Movie 5', '-2013', '
Comedy            ', '3.5', '
A couple begin to experience some unusual activity after bringing their lost nieces and nephew home. With the help of home-surveillance cameras, they learn they''re being stalked by a nefarious demon.', '
    Directors:
Malcolm D. Lee, 
David Zucker
| 
    Stars:
Simon Rex, 
Ashley Tisdale, 
Charlie Sheen, 
Lindsay Lohan
', '67,762', '88', '$32.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kill Me Three Times', '-2014', '
Action, Comedy, Crime            ', '5.9', '
Professional hit-man Charlie Wolfe finds himself in three tales of murder, blackmail and revenge after a botched contract assignment.', '
    Director:
Kriv Stenders
| 
    Stars:
Simon Pegg, 
Teresa Palmer, 
Alice Braga, 
Luke Hemsworth
', '22,359', '90', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Killers', '-2010', '
Action, Comedy, Romance            ', '5.5', '
A vacationing woman meets her ideal man, leading to a swift marriage. Back at home, however, their idyllic life is upset when they discover their neighbors could be assassins who have been contracted to kill the couple.', '
    Director:
Robert Luketic
| 
    Stars:
Katherine Heigl, 
Ashton Kutcher, 
Tom Selleck, 
Catherine O''Hara
', '89,080', '100', '$47.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Lorax', '-2012', '
Animation, Adventure, Comedy            ', '6.4', '
A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world.', '
    Directors:
Chris Renaud, 
Kyle Balda
| 
    Stars:
Zac Efron, 
Taylor Swift, 
Danny DeVito, 
Ed Helms
', '103,009', '86', '$214.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Macbeth', '(I) (2015)', '
Drama, History, War            ', '6.6', '
Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.', '
    Director:
Justin Kurzel
| 
    Stars:
Michael Fassbender, 
Marion Cotillard, 
Jack Madigan, 
Frank Madigan
', '54,067', '113', '$1.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Infiltrator', '-2016', '
Biography, Crime, Drama            ', '7', '
A U.S. Customs official uncovers a money laundering scheme involving Colombian drug lord Pablo Escobar.', '
    Director:
Brad Furman
| 
    Stars:
Bryan Cranston, 
John Leguizamo, 
Diane Kruger, 
Amy Ryan
', '70,858', '127', '$15.43M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Doom', '-2005', '
Action, Horror, Sci-Fi            ', '5.2', '
Space Marines are sent to investigate strange events at a research facility on Mars but find themselves at the mercy of genetically enhanced killing machines.', '
    Director:
Andrzej Bartkowiak
| 
    Stars:
Karl Urban, 
Rosamund Pike, 
Dwayne Johnson, 
Deobia Oparei
', '110,028', '105', '$28.21M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kaze no tani no Naushika', '-1984', '
Animation, Adventure, Fantasy            ', '8.1', '
Warrior and pacifist Princess NausicaÃ¤ desperately struggles to prevent two warring nations from destroying themselves and their dying planet.', '
    Director:
Hayao Miyazaki
| 
    Stars:
Sumi Shimamoto, 
Mahito Tsujimura, 
Hisako KyÃ´da, 
GorÃ´ Naya
', '157,520', '117', '$0.50M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Last Stand', '-2013', '
Action, Thriller            ', '6.3', '
The leader of a drug cartel busts out of a courthouse and speeds to the Mexican border, where the only thing in his path is a sheriff and his inexperienced staff.', '
    Director:
Jee-woon Kim
| 
    Stars:
Arnold Schwarzenegger, 
Forest Whitaker, 
Johnny Knoxville, 
Rodrigo Santoro
', '135,448', '107', '$12.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('De rouille et d''os', '-2012', '
Drama, Romance            ', '7.5', '
Put in charge of his young son, Alain leaves Belgium for Antibes to live with his sister and her husband as a family. Alain''s bond with Stephanie, a killer whale trainer, grows deeper after Stephanie suffers a horrible accident.', '
    Director:
Jacques Audiard
| 
    Stars:
Marion Cotillard, 
Matthias Schoenaerts, 
Armand Verdure, 
CÃ©line Sallette
', '65,455', '120', '$2.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Young Guns II', '-1990', '
Action, Western            ', '6.5', '
In 1881, cattle baron John Chisum pays a bounty to Patrick Floyd Garrett to kill outlaw Billy the Kid.', '
    Director:
Geoff Murphy
| 
    Stars:
Emilio Estevez, 
Kiefer Sutherland, 
Lou Diamond Phillips, 
Christian Slater
', '33,616', '104', '$44.14M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Pan', '-2015', '
Adventure, Comedy, Family            ', '5.7', '
Twelve-year-old orphan Peter is spirited away to the magical world of Neverland, where he finds both fun and danger, and ultimately discovers his destiny -- to become the hero who will be for ever known as Peter Pan.', '
    Director:
Joe Wright
| 
    Stars:
Levi Miller, 
Hugh Jackman, 
Garrett Hedlund, 
Rooney Mara
', '61,772', '111', '$35.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Iceman', '-2012', '
Biography, Crime, Drama            ', '6.8', '
The story of Richard Kuklinski, the notorious contract killer and family man. When finally arrested in 1986, neither his wife nor daughters had any clue about his real profession.', '
    Director:
Ariel Vromen
| 
    Stars:
Michael Shannon, 
Chris Evans, 
James Franco, 
Winona Ryder
', '72,326', '106', '$1.94M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hannibal Rising', '-2007', '
Action, Adventure, Crime            ', '6.2', '
After the death of his parents during World War II, young Hannibal Lecter moves in with his beautiful aunt and begins plotting revenge on the barbarians responsible for his sister''s death.', '
    Director:
Peter Webber
| 
    Stars:
Gaspard Ulliel, 
Rhys Ifans, 
Gong Li, 
Aaran Thomas
', '106,197', '121', '$27.67M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Day the Earth Stood Still', '-2008', '
Drama, Sci-Fi, Thriller            ', '5.5', '
A remake of the 1951 classic science fiction film about an alien visitor and his giant robot counterpart who visit Earth.', '
    Director:
Scott Derrickson
| 
    Stars:
Keanu Reeves, 
Jennifer Connelly, 
Kathy Bates, 
Jaden Smith
', '165,900', '104', '$79.37M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Adventures of Sharkboy and Lavagirl 3-D', '-2005', '
Action, Adventure, Comedy            ', '3.7', '
A young boy is recruited by his imaginary friends Sharkboy and Lavagirl to help save their planet.', '
    Director:
Robert Rodriguez
| 
    Stars:
Cayden Boyd, 
George Lopez, 
Kristin Davis, 
David Arquette
', '34,853', '93', '$39.18M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Taken 2', '-2012', '
Action, Crime, Thriller            ', '6.3', '
In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.', '
    Director:
Olivier Megaton
| 
    Stars:
Liam Neeson, 
Famke Janssen, 
Maggie Grace, 
Leland Orser
', '295,140', '92', '$139.85M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Ugly Truth', '-2009', '
Comedy, Romance            ', '6.4', '
An uptight television producer takes control of a morning show segment on modern relationships hosted by a misogynistic man.', '
    Director:
Robert Luketic
| 
    Stars:
Katherine Heigl, 
Gerard Butler, 
Bree Turner, 
Eric Winter
', '209,052', '96', '$88.92M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sweet Virginia', '-2017', '
Action, Drama, Thriller            ', '6.2', '
A former rodeo champ befriends a young man with a propensity for violence.', '
    Director:
Jamie M. Dagg
| 
    Stars:
Jon Bernthal, 
Christopher Abbott, 
Imogen Poots, 
Rosemarie DeWitt
', '9,324', '93', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Deliver Us from Evil', '(I) (2014)', '
Action, Biography, Crime            ', '6.2', '
New York police officer Ralph Sarchie investigates a series of crimes. He joins forces with an unconventional priest, schooled in the rites of exorcism, to combat the possessions that are terrorizing their city.', '
    Director:
Scott Derrickson
| 
    Stars:
Eric Bana, 
Edgar RamÃ­rez, 
Olivia Munn, 
Chris Coy
', '73,461', '118', '$30.58M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Human Centipede II (Full Sequence)', '-2011', '
Horror            ', '3.8', '
Inspired by the fictional Dr. Heiter, disturbed loner Martin dreams of creating a 12-person centipede and sets out to realize his sick fantasy.', '
    Director:
Tom Six
| 
    Stars:
Laurence R. Harvey, 
Ashlynn Yennie, 
Maddi Black, 
Kandace Caine
', '36,912', '91', '$0.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dead Man Down', '-2013', '
Action, Crime, Drama            ', '6.5', '
In New York City, a crime lord''s right-hand man is helped by a woman seeking retribution.', '
    Director:
Niels Arden Oplev
| 
    Stars:
Colin Farrell, 
Noomi Rapace, 
Dominic Cooper, 
Terrence Howard
', '65,672', '118', '$10.88M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Step Up', '-2006', '
Crime, Drama, Music            ', '6.5', '
Tyler Gage receives the opportunity of a lifetime after vandalizing a performing arts school, gaining him the chance to earn a scholarship and dance with an up and coming dancer, Nora.', '
    Director:
Anne Fletcher
| 
    Stars:
Channing Tatum, 
Jenna Dewan, 
Damaine Radcliff, 
De''Shawn Washington
', '113,232', '104', '$65.33M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Child 44', '-2015', '
Crime, Drama, History            ', '6.5', '
A disgraced member of the Russian military police investigates a series of child murders during the Stalin-era Soviet Union.', '
    Director:
Daniel Espinosa
| 
    Stars:
Tom Hardy, 
Gary Oldman, 
Noomi Rapace, 
Joel Kinnaman
', '67,925', '137', '$1.21M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Berlin Syndrome', '-2017', '
Drama, Horror, Mystery            ', '6.3', '
A passionate holiday romance leads to an obsessive relationship, when an Australian photojournalist wakes one morning in a Berlin apartment and is unable to leave.', '
    Director:
Cate Shortland
| 
    Stars:
Teresa Palmer, 
Max Riemelt, 
Matthias Habich, 
Emma Bading
', '23,476', '116', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Office Christmas Party', '-2016', '
Comedy            ', '5.9', '
When his uptight CEO sister threatens to shut down his branch, the branch manager throws an epic Christmas party in order to land a big client and save the day, but the party gets way out of hand...', '
    Directors:
Josh Gordon, 
Will Speck
| 
    Stars:
Jason Bateman, 
Olivia Munn, 
T.J. Miller, 
Jennifer Aniston
', '72,433', '105', '$54.77M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('White Girl', '-2016', '
Crime, Drama            ', '5.7', '
Summer, New York City. A college girl falls hard for a guy she just met. After a night of partying goes wrong, she goes to wild extremes to get him back.', '
    Director:
Elizabeth Wood
| 
    Stars:
Morgan Saylor, 
Brian Marc, 
Justin Bartha, 
Adrian Martinez
', '10,127', '88', '$0.20M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mercury Rising', '-1998', '
Action, Crime, Drama            ', '6.1', '
Shadowy elements in the NSA target a nine-year old autistic savant for death when he is able to decipher a top secret code.', '
    Director:
Harold Becker
| 
    Stars:
Bruce Willis, 
Miko Hughes, 
Alec Baldwin, 
Chi McBride
', '70,935', '111', '$32.94M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Suburbicon', '-2017', '
Comedy, Crime, Drama            ', '5.7', '
As a 1950s suburban community self-destructs, a home invasion has sinister consequences for one seemingly normal family.', '
    Director:
George Clooney
| 
    Stars:
Matt Damon, 
Julianne Moore, 
Oscar Isaac, 
Noah Jupe
', '41,867', '105', '$5.78M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Better Watch Out', '(II) (2016)', '
Comedy, Horror, Thriller            ', '6.5', '
On a quiet suburban street, a babysitter must defend a twelve-year-old boy from intruders, only to discover it''s far from a normal home invasion.', '
    Director:
Chris Peckover
| 
    Stars:
Olivia DeJonge, 
Levi Miller, 
Ed Oxenbould, 
Aleks Mikic
', '33,703', '89', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Safe', '(I) (2012)', '
Action, Crime, Thriller            ', '6.5', '
Mei, a young girl whose memory holds a priceless numerical code, finds herself pursued by the Triads, the Russian mob, and corrupt NYC cops. Coming to her aid is an ex-cage fighter whose life was destroyed by the gangsters on Mei''s trail.', '
    Director:
Boaz Yakin
| 
    Stars:
Jason Statham, 
Catherine Chan, 
Chris Sarandon, 
Robert John Burke
', '106,164', '94', '$17.14M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Killerman', '-2019', '
Action, Crime, Thriller            ', '5.4', '
Two NYC money launderers make a quick drug deal. Things go wrong, as dirty cops are involved. One of the friends gets amnesia during their escape with the drugs and money.', '
    Director:
Malik Bader
| 
    Stars:
Liam Hemsworth, 
Emory Cohen, 
Diane Guerrero, 
Zlatko Buric
', '4,495', '112', '$0.28M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Devil''s Own', '-1997', '
Action, Crime, Drama            ', '6.2', '
A police officer uncovers the real identity of his house-guest, an I.R.A. terrorist in hiding.', '
    Director:
Alan J. Pakula
| 
    Stars:
Harrison Ford, 
Brad Pitt, 
Margaret Colin, 
RubÃ©n Blades
', '62,161', '111', '$42.87M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kaze tachinu', '-2013', '
Animation, Biography, Drama            ', '7.8', '
A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.', '
    Director:
Hayao Miyazaki
| 
    Stars:
Hideaki Anno, 
Hidetoshi Nishijima, 
Miori Takimoto, 
Masahiko Nishimura
', '77,732', '126', '$5.21M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Super Dark Times', '-2017', '
Crime, Drama, Horror            ', '6.6', '
Teenagers Zach and Josh have been best friends their whole lives, but when a gruesome accident leads to a cover-up, the secret drives a wedge between them and propels them down a rabbit hole of escalating paranoia and violence.', '
    Director:
Kevin Phillips
| 
    Stars:
Owen Campbell, 
Charlie Tahan, 
Elizabeth Cappuccino, 
Amy Hargreaves
', '20,965', '103', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Zwartboek', '-2006', '
Drama, Thriller, War            ', '7.7', '
In the Nazi-occupied Netherlands during World War II, a Jewish singer infiltrates the regional Gestapo headquarters for the Dutch resistance.', '
    Director:
Paul Verhoeven
| 
    Stars:
Carice van Houten, 
Sebastian Koch, 
Thom Hoffman, 
Halina Reijn
', '74,139', '145', '$4.40M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('See No Evil, Hear No Evil', '-1989', '
Comedy, Crime            ', '6.9', '
Dave is deaf, and Wally is blind. They witness a murder, but it was Dave who was looking at her, and Wally who was listening.', '
    Director:
Arthur Hiller
| 
    Stars:
Richard Pryor, 
Gene Wilder, 
Joan Severance, 
Kevin Spacey
', '51,788', '103', '$46.91M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Beasts of No Nation', '-2015', '
Drama, War            ', '7.7', '
A drama based on the experiences of Agu, a child soldier fighting in the civil war of an unnamed African country.', '
    Director:
Cary Joji Fukunaga
| 
    Stars:
Abraham Attah, 
Emmanuel Affadzi, 
Ricky Adelayitor, 
Andrew Adote
', '76,530', '137', '$0.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Isn''t It Romantic', '-2019', '
Comedy, Fantasy, Musical            ', '5.9', '
A young woman disenchanted with love mysteriously finds herself trapped inside a romantic comedy.', '
    Director:
Todd Strauss-Schulson
| 
    Stars:
Rebel Wilson, 
Liam Hemsworth, 
Adam Devine, 
Priyanka Chopra Jonas
', '65,584', '89', '$48.79M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Ghost Writer', '-2010', '
Crime, Drama, Mystery            ', '7.2', '
A ghost writer, hired to complete the memoirs of a former British Prime Minister, uncovers secrets that put his own life in jeopardy.', '
    Director:
Roman Polanski
| 
    Stars:
Ewan McGregor, 
Pierce Brosnan, 
Olivia Williams, 
Jon Bernthal
', '159,090', '128', '$15.54M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Valley of the Dolls', '-1967', '
Drama, Music, Romance            ', '6', '
Film version of Jacqueline Susann''s best-selling novel chronicling the rise and fall of three young women in show business.', '
    Director:
Mark Robson
| 
    Stars:
Barbara Parkins, 
Patty Duke, 
Paul Burke, 
Sharon Tate
', '7,900', '123', '$44.43M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Shack', '(I) (2017)', '
Drama, Fantasy            ', '6.3', '
A grieving man receives a mysterious, personal invitation to meet with God at a place called The Shack.', '
    Director:
Stuart Hazeldine
| 
    Stars:
Sam Worthington, 
Octavia Spencer, 
Tim McGraw, 
Radha Mitchell
', '31,775', '132', '$57.39M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Maggie', '(I) (2015)', '
Drama, Horror, Sci-Fi            ', '5.6', '
A teenage girl in the Midwest becomes infected by an outbreak of a disease that slowly turns the infected into cannibalistic zombies. During her transformation, her loving father stays by her side.', '
    Director:
Henry Hobson
| 
    Stars:
Arnold Schwarzenegger, 
Abigail Breslin, 
Joely Richardson, 
Laura Cayouette
', '42,895', '95', '$0.19M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Broken City', '-2013', '
Action, Crime, Drama            ', '6.2', '
In a city rife with injustice, ex-cop Billy Taggart seeks redemption and revenge after being double-crossed and then framed by its most powerful figure: Mayor Nicholas Hostetler.', '
    Director:
Allen Hughes
| 
    Stars:
Mark Wahlberg, 
Russell Crowe, 
Catherine Zeta-Jones, 
Jeffrey Wright
', '77,749', '109', '$19.70M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Step Up 2: The Streets', '-2008', '
Drama, Music, Romance            ', '6.2', '
Romantic sparks occur between two dance students from different backgrounds at the Maryland School of the Arts.', '
    Director:
Jon M. Chu
| 
    Stars:
Robert Hoffman, 
Briana Evigan, 
Cassie Ventura, 
Adam Sevani
', '82,792', '98', '$58.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Contraband', '-2012', '
Action, Crime, Drama            ', '6.4', '
To protect his brother-in-law from a drug lord, a former smuggler heads to Panama to score millions of dollars in counterfeit bills.', '
    Director:
Baltasar KormÃ¡kur
| 
    Stars:
Mark Wahlberg, 
Giovanni Ribisi, 
Kate Beckinsale, 
Robert Wahlberg
', '119,261', '109', '$66.53M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Client', '-1994', '
Crime, Drama, Mystery            ', '6.7', '
A young boy who witnessed the suicide of a mafia lawyer hires an attorney to protect him when the District Attorney tries to use him to take down a mob family.', '
    Director:
Joel Schumacher
| 
    Stars:
Susan Sarandon, 
Tommy Lee Jones, 
Brad Renfro, 
Mary-Louise Parker
', '62,748', '119', '$92.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mirror Mirror', '(I) (2012)', '
Adventure, Comedy, Drama            ', '5.6', '
An evil queen steals control of a kingdom and an exiled princess enlists the help of seven resourceful rebels to win back her birthright.', '
    Director:
Tarsem Singh
| 
    Stars:
Lily Collins, 
Julia Roberts, 
Armie Hammer, 
Nathan Lane
', '85,615', '106', '$64.94M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('I Spit on Your Grave 2', '-2013', '
Horror, Thriller            ', '5.7', '
When Katie innocently accepts an offer to have new photos taken for her portfolio, the experience quickly turns into a nightmare of rape, torture and kidnapping. Now, she will have to find the strength to exact her brutal revenge.', '
    Director:
Steven R. Monroe
| 
    Stars:
Jemma Dallender, 
Joe Absolom, 
Yavor Baharov, 
George Zlatarev
', '28,118', '106', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Great Gatsby', '-1974', '
Drama, Romance            ', '6.4', '
A Midwesterner becomes fascinated with his nouveau riche neighbor, who obsesses over his lost love.', '
    Director:
Jack Clayton
| 
    Stars:
Robert Redford, 
Mia Farrow, 
Bruce Dern, 
Karen Black
', '24,087', '144', '$6.74M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Thelma', '-2017', '
Drama, Fantasy, Horror            ', '7', '
A confused religious girl tries to deny her feelings for a female friend who''s in love with her. This causes her suppressed subconsciously-controlled psychokinetic powers to reemerge with devastating results.', '
    Director:
Joachim Trier
| 
    Stars:
Eili Harboe, 
Kaya Wilkins, 
Henrik Rafaelsen, 
Ellen Dorrit Petersen
', '28,282', '116', '$0.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Step Up 3D', '-2010', '
Drama, Music, Romance            ', '6.2', '
A tight-knit group of New York City street dancers find themselves pitted against the world''s best hip hop dancers in a high-stakes showdown.', '
    Director:
Jon M. Chu
| 
    Stars:
Sharni Vinson, 
Rick Malambri, 
Adam Sevani, 
Alyson Stoner
', '56,610', '107', '$42.40M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Triple Threat', '-2019', '
Action, Thriller            ', '5.6', '
When a billionaire''s daughter intent on bringing down a major crime syndicate is targeted by a group of professional assassins, a team of mercenaries must stop them before they kill her.', '
    Director:
Jesse V. Johnson
| 
    Stars:
Tony Jaa, 
Tiger Hu Chen, 
Iko Uwais, 
Scott Adkins
', '10,345', '96', '$0.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kari-gurashi no Arietti', '-2010', '
Animation, Adventure, Family            ', '7.6', '
The Clock family are four-inch-tall people who live anonymously in another family''s residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter, Arrietty, is discovered.', '
    Director:
Hiromasa Yonebayashi
| 
    Stars:
Amy Poehler, 
Will Arnett, 
Mirai Shida, 
RyÃ»nosuke Kamiki
', '84,951', '94', '$19.20M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Step Up Revolution', '-2012', '
Drama, Music, Romance            ', '6.4', '
Emily arrives in Miami with aspirations to become a professional dancer. She sparks with Sean, the leader of a dance crew whose neighborhood is threatened by Emily''s father''s development plans.', '
    Director:
Scott Speer
| 
    Stars:
Kathryn McCormick, 
Ryan Guzman, 
Cleopatra Coleman, 
Misha Gabriel Hamilton
', '54,763', '99', '$35.07M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Cloudy with a Chance of Meatballs 2', '-2013', '
Animation, Adventure, Comedy            ', '6.4', '
Flint Lockwood now works at The Live Corp Company for his idol Chester V. But he''s forced to leave his post when he learns that his most infamous machine is still operational, and is churning out menacing food-animal hybrids.', '
    Directors:
Cody Cameron, 
Kris Pearn
| 
    Stars:
Bill Hader, 
Anna Faris, 
Will Forte, 
Neil Patrick Harris
', '94,660', '95', '$119.79M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Brooklyn''s Finest', '-2009', '
Action, Crime, Drama            ', '6.7', '
Three unconnected Brooklyn cops wind up at the same deadly location after enduring vastly different career paths.', '
    Director:
Antoine Fuqua
| 
    Stars:
Richard Gere, 
Don Cheadle, 
Ethan Hawke, 
Wesley Snipes
', '61,994', '132', '$27.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mirrors', '(I) (2008)', '
Horror, Mystery            ', '6.1', '
An ex-cop and his family are the target of an evil force that is using mirrors as a gateway into their home.', '
    Director:
Alexandre Aja
| 
    Stars:
Kiefer Sutherland, 
Paula Patton, 
Amy Smart, 
Cameron Boyce
', '103,973', '110', '$30.69M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Honeymoon', '-2014', '
Drama, Fantasy, Horror            ', '5.7', '
A newlywed couple finds their lake-country honeymoon descend into chaos after Paul finds Bea wandering and disoriented in the middle of the night.', '
    Director:
Leigh Janiak
| 
    Stars:
Rose Leslie, 
Harry Treadaway, 
Ben Huber, 
Hanna Brown
', '24,861', '87', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Touch of Evil', '-1958', '
Crime, Drama, Film-Noir            ', '8', '
A stark, perverse story of murder, kidnapping, and police corruption in a Mexican border town.', '
    Director:
Orson Welles
| 
    Stars:
Charlton Heston, 
Orson Welles, 
Janet Leigh, 
Joseph Calleia
', '100,664', '95', '$2.24M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('True Story', '(I) (2015)', '
Biography, Crime, Drama            ', '6.3', '
When disgraced New York Times reporter Michael Finkel meets accused killer Christian Longo - who has taken on Finkel''s identity - his investigation morphs into a game of cat-and-mouse.', '
    Director:
Rupert Goold
| 
    Stars:
James Franco, 
Jonah Hill, 
Felicity Jones, 
Maria Dizzia
', '65,679', '99', '$4.72M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Planes', '-2013', '
Animation, Adventure, Comedy            ', '5.7', '
A cropdusting plane with a fear of heights lives his dream of competing in a famous around-the-world aerial race.', '
    Director:
Klay Hall
| 
    Stars:
Carlos Alazraqui, 
Dane Cook, 
Stacy Keach, 
Brad Garrett
', '43,335', '91', '$90.29M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Omoide no MÃ¢nÃ®', '-2014', '
Animation, Drama, Family            ', '7.7', '
Due to 12 y.o. Anna''s asthma, she''s sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie.', '
    Directors:
James Simone, 
Hiromasa Yonebayashi
| 
    Stars:
Sara Takatsuki, 
Kasumi Arimura, 
Nanako Matsushima, 
Susumu Terajima
', '35,523', '103', '$0.77M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The One I Love', '-2014', '
Comedy, Drama, Romance            ', '7.1', '
A troubled couple vacate to a beautiful getaway, but bizarre circumstances further complicate their situation.', '
    Director:
Charlie McDowell
| 
    Stars:
Mark Duplass, 
Elisabeth Moss, 
Ted Danson, 
Kiana Cason
', '37,373', '91', '$0.51M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jeepers Creepers 3', '-2017', '
Horror            ', '3.9', '
Sheriff Dan Tashtego and a team of creeper hunters enlist the help of officer Davis Tubbs to help stop the monster''s eating spree.', '
    Director:
Victor Salva
| 
    Stars:
Stan Shaw, 
Gabrielle Haugh, 
Brandon Smith, 
Meg Foster
', '19,260', '100', '$2.24M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Geronimo: An American Legend', '-1993', '
Drama, History, Western            ', '6.5', '
The story of the Apache chief and his armed resistance to the U.S. Government''s subjugation of his people.', '
    Director:
Walter Hill
| 
    Stars:
Jason Patric, 
Gene Hackman, 
Robert Duvall, 
Wes Studi
', '10,096', '115', '$18.64M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Te3n', '-2016', '
Drama, Mystery, Thriller            ', '7.3', '
A grandfather, a priest, and a police officer investigate the case of a kidnapped child.', '
    Director:
Ribhu Dasgupta
| 
    Stars:
Amitabh Bachchan, 
Nawazuddin Siddiqui, 
Vidya Balan, 
Mukesh Chhabra
', '12,303', '136', '$0.26M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Immigrant', '-2013', '
Drama, Romance            ', '6.6', '
1921. An innocent immigrant woman is tricked into a life of burlesque and vaudeville until a dazzling magician tries to save her and reunite her with her sister who is being held in the confines of Ellis Island.', '
    Director:
James Gray
| 
    Stars:
Marion Cotillard, 
Joaquin Phoenix, 
Jeremy Renner, 
Dagmara Dominczyk
', '30,649', '120', '$2.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Step Up All In', '-2014', '
Drama, Music, Romance            ', '6', '
All-stars from the previous Step Up installments come together in glittering Las Vegas, battling for a victory that could define their dreams and their careers.', '
    Director:
Trish Sie
| 
    Stars:
Ryan Guzman, 
Briana Evigan, 
Adam Sevani, 
Misha Gabriel Hamilton
', '33,247', '112', '$14.90M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Take Me', '-2017', '
Comedy, Crime, Mystery            ', '6.1', '
Ray is a fledgling entrepreneur who specializes in high-end simulated abductions. He jumps at the chance when a mysterious client contracts him for a weekend kidnapping with a handsome ...                See full summaryÂ Â»
', '
    Director:
Pat Healy
| 
    Stars:
Pat Healy, 
Taylor Schilling, 
Alycia Delmore, 
Jim O''Heir
', '5,088', '83', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Un long dimanche de fianÃ§ailles', '-2004', '
Drama, Mystery, Romance            ', '7.6', '
Tells the story of a young woman''s relentless search for her fiancÃ©, who has disappeared from the trenches of the Somme during World War One.', '
    Director:
Jean-Pierre Jeunet
| 
    Stars:
Audrey Tautou, 
Gaspard Ulliel, 
Jodie Foster, 
Dominique Pinon
', '71,916', '133', '$6.17M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kokuriko-zaka kara', '-2011', '
Animation, Drama, Family            ', '7.4', '
A group of Yokohama teens look to save their school''s clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.', '
    Director:
GorÃ´ Miyazaki
| 
    Stars:
Sarah Bolger, 
Chris Noth, 
Anton Yelchin, 
Christina Hendricks
', '38,625', '91', '$1.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Extremely Loud & Incredibly Close', '-2011', '
Adventure, Drama, Mystery            ', '6.9', '
A nine-year-old amateur inventor, Francophile, and pacifist searches New York City for the lock that matches a mysterious key left behind by his father, who died in the World Trade Center on September 11, 2001.', '
    Director:
Stephen Daldry
| 
    Stars:
Thomas Horn, 
Tom Hanks, 
Sandra Bullock, 
Max von Sydow
', '99,165', '129', '$31.85M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Red Riding Hood', '-2011', '
Fantasy, Horror, Mystery            ', '5.5', '
Set in a medieval village that is haunted by a werewolf, a young girl falls for an orphaned woodcutter, much to her family''s displeasure.', '
    Director:
Catherine Hardwicke
| 
    Stars:
Amanda Seyfried, 
Lukas Haas, 
Gary Oldman, 
Billy Burke
', '109,473', '100', '$37.66M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Get Rich or Die Tryin''', '-2005', '
Biography, Crime, Drama            ', '5.4', '
A tale of an inner city drug dealer who turns away from crime to pursue his passion, rap music.', '
    Director:
Jim Sheridan
| 
    Stars:
50 Cent, 
Joy Bryant, 
Adewale Akinnuoye-Agbaje, 
Omar Benson Miller
', '45,092', '117', '$30.98M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hit and Run', '(I) (2012)', '
Action, Adventure, Comedy            ', '6.1', '
Former getaway driver Charles Bronson jeopardizes his Witness Protection Plan identity in order to help his girlfriend get to Los Angeles. The feds and Charles'' former gang chase them on the road.', '
    Directors:
David Palmer, 
Dax Shepard
| 
    Stars:
Dax Shepard, 
Kristen Bell, 
Bradley Cooper, 
Kristin Chenoweth
', '35,252', '100', '$13.75M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Duck Butter', '-2018', '
Comedy, Drama, Romance            ', '5.3', '
Two women, who are dissatisfied with the dishonesty they see in dating and relationships, decide to make a pact to spend 24 hours together hoping to find a new way to create intimacy.', '
    Director:
Miguel Arteta
| 
    Stars:
Alia Shawkat, 
Drew Langer, 
Marc Maron, 
Mark Duplass
', '3,531', '93', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Liu lang di qiu', '-2019', '
Action, Adventure, Sci-Fi            ', '6', '
As the sun is dying out, people all around the world build giant planet thrusters to move Earth out of its orbit and sail Earth to a new star system. Yet the 2500-year journey comes with unexpected dangers, and in order to save humanity, a group of young people in this age of a wandering Earth fight hard for the survival of humankind.', '
    Director:
Frant Gwo
| 
    Stars:
Jing Wu, 
Chuxiao Qu, 
Guangjie Li, 
Man-Tat Ng
', '28,264', '125', '$5.88M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Philomena', '-2013', '
Biography, Comedy, Drama            ', '7.6', '
A world-weary political journalist picks up the story of a woman''s search for her son, who was taken away from her decades ago after she became pregnant and was forced to live in a convent.', '
    Director:
Stephen Frears
| 
    Stars:
Judi Dench, 
Steve Coogan, 
Sophie Kennedy Clark, 
Mare Winningham
', '96,244', '98', '$37.71M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Alvin and the Chipmunks: The Squeakquel', '-2009', '
Animation, Adventure, Comedy            ', '4.5', '
The world-famous singing preteen chipmunk trio return to contend with the pressures of school, celebrity, and a rival female music group known as The Chipettes.', '
    Director:
Betty Thomas
| 
    Stars:
Jason Lee, 
Zachary Levi, 
David Cross, 
Justin Long
', '45,491', '88', '$219.61M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('In the Name of the King: A Dungeon Siege Tale', '-2007', '
Action, Adventure, Fantasy            ', '3.8', '
A man named Farmer sets out to rescue his kidnapped wife and avenge the death of his son, two acts committed by the Krugs, a race of animal-warriors who are controlled by the evil Gallian.', '
    Director:
Uwe Boll
| 
    Stars:
Jason Statham, 
Ron Perlman, 
Ray Liotta, 
Leelee Sobieski
', '46,327', '127', '$4.54M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Little Mermaid', '-2018', '
Adventure, Drama, Fantasy            ', '4.3', '
A young reporter and his niece discover a beautiful and enchanting creature they believe to be the real little mermaid.', '
    Directors:
Blake Harris, 
Chris Bouchard
| 
    Stars:
William Moseley, 
Poppy Drayton, 
Loreto Peralta, 
Armando Gutierrez
', '8,546', '85', '$7.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Miss Bala', '-2019', '
Action, Crime, Drama            ', '5.8', '
Gloria finds a power she never knew she had when she is drawn into a dangerous world of cross-border crime. Surviving will require all of her cunning, inventiveness, and strength. Based on the Spanish-language film.', '
    Director:
Catherine Hardwicke
| 
    Stars:
Gina Rodriguez, 
Thomas Dekker, 
Vivian Chan, 
Barbarella Pardo
', '10,048', '104', '$15.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('John Dies at the End', '-2012', '
Comedy, Fantasy, Horror            ', '6.4', '
A new street drug that sends its users across time and dimensions has one drawback: some people return no longer human. Can two college drop-outs save humanity from this silent, otherworldly invasion?', '
    Director:
Don Coscarelli
| 
    Stars:
Chase Williamson, 
Rob Mayes, 
Paul Giamatti, 
Clancy Brown
', '37,007', '99', '$0.14M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kaguya-hime no monogatari', '-2013', '
Animation, Adventure, Drama            ', '8', '
Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.', '
    Director:
Isao Takahata
| 
    Stars:
ChloÃ« Grace Moretz, 
James Caan, 
Mary Steenburgen, 
James Marsden
', '41,510', '137', '$1.51M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('A Man for All Seasons', '-1966', '
Biography, Drama, History            ', '7.7', '
The story of Sir Thomas More, who stood up to King Henry VIII when the King rejected the Roman Catholic Church to obtain a divorce and remarry.', '
    Director:
Fred Zinnemann
| 
    Stars:
Paul Scofield, 
Wendy Hiller, 
Robert Shaw, 
Leo McKern
', '32,729', '120', '$28.35M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dumbo', '-1941', '
Animation, Adventure, Drama            ', '7.2', '
Ridiculed because of his enormous ears, a young circus elephant is assisted by a mouse to achieve his full potential.', '
    Directors:
Samuel Armstrong, 
Norman Ferguson, 
Wilfred Jackson, 
Jack Kinney, 
Bill Roberts, 
Ben Sharpsteen, 
John Elliotte
| 
    Stars:
Sterling Holloway, 
Edward Brophy, 
Herman Bing, 
Mel Blanc
', '124,409', '64', '$1.60M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Le Petit Prince', '-2015', '
Animation, Adventure, Drama            ', '7.7', '
A little girl lives in a very grown-up world with her mother, who tries to prepare her for it. Her neighbor, the Aviator, introduces the girl to an extraordinary world where anything is possible, the world of the Little Prince.', '
    Director:
Mark Osborne
| 
    Stars:
Jeff Bridges, 
Mackenzie Foy, 
Rachel McAdams, 
Marion Cotillard
', '58,668', '108', '$1.34M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Tangerine', '-2015', '
Comedy, Crime, Drama            ', '7.1', '
A hooker tears through Tinseltown on Christmas Eve searching for the pimp who broke her heart.', '
    Director:
Sean Baker
| 
    Stars:
Kitana Kiki Rodriguez, 
Mya Taylor, 
Karren Karagulian, 
Mickey O''Hagan
', '28,651', '88', '$0.70M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('A Man Apart', '-2003', '
Action, Crime, Drama            ', '6.1', '
A man known as Diablo emerges to head a drug cartel after the previous leader is imprisoned.', '
    Director:
F. Gary Gray
| 
    Stars:
Vin Diesel, 
Timothy Olyphant, 
Larenz Tate, 
Geno Silva
', '46,040', '109', '$26.18M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Romeo & Juliet', '(II) (2013)', '
Drama, Romance            ', '5.8', '
Romeo and Juliet secretly wed despite the sworn contempt their families hold for each other. It is not long, however, before a chain of fateful events changes the lives of both families forever.', '
    Director:
Carlo Carlei
| 
    Stars:
Hailee Steinfeld, 
Douglas Booth, 
Damian Lewis, 
Laura Morante
', '11,411', '118', '$1.16M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mongol', '-2007', '
Action, Biography, Drama            ', '7.2', '
The story recounts the early life of Genghis Khan who was a slave before going on to conquer half the world in 1206.', '
    Director:
Sergei Bodrov
| 
    Stars:
Tadanobu Asano, 
Amadu Mamadakov, 
Khulan Chuluun, 
Honglei Sun
', '45,408', '126', '$5.70M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Gunman', '-2015', '
Action, Crime, Thriller            ', '5.8', '
A sniper on a mercenary assassination team, kills the minister of mines of the Congo. Terrier''s successful kill shot forces him into hiding. Returning to the Congo years later, he becomes the target of a hit squad himself.', '
    Director:
Pierre Morel
| 
    Stars:
Sean Penn, 
Idris Elba, 
Jasmine Trinca, 
Javier Bardem
', '39,993', '115', '$10.64M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Yip Man 3', '-2015', '
Action, Biography, Drama            ', '7.1', '
When a band of brutal gangsters led by a crooked property developer make a play to take over a local school, Master Ip is forced to take a stand.', '
    Director:
Wilson Yip
| 
    Stars:
Donnie Yen, 
Lynn Xiong, 
Jin Zhang, 
Mike Tyson
', '51,648', '105', '$2.68M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mugen no jÃ»nin', '-2017', '
Action, Drama, Fantasy            ', '6.8', '
Cursed with a life of immortality, a samurai is tasked by a young girl to help avenge the death of her father. Based on the manga series by Hiroaki Samura.', '
    Director:
Takashi Miike
| 
    Stars:
Takuya Kimura, 
Hana Sugisaki, 
SÃ´ta Fukushi, 
Hayato Ichihara
', '16,248', '140', '$0.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kal Hee', '-1991', '
Animation, Drama, Romance            ', '7.6', '
A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo.', '
    Director:
Isao Takahata
| 
    Stars:
Miki Imai, 
ToshirÃ´ Yanagiba, 
Yoko Honna, 
Mayumi Izuka
', '28,969', '118', '$0.45M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kahaani', '-2012', '
Mystery, Thriller            ', '8.1', '
A pregnant woman''s search for her missing husband takes her from London to Kolkata, but everyone she questions denies having ever met him.', '
    Director:
Sujoy Ghosh
| 
    Stars:
Vidya Balan, 
Parambrata Chattopadhyay, 
Indraneil Sengupta, 
Nawazuddin Siddiqui
', '59,675', '122', '$1.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Arbitrage', '-2012', '
Drama, Thriller            ', '6.6', '
A troubled hedge fund magnate desperate to complete the sale of his trading empire makes an error that forces him to turn to an unlikely person for help.', '
    Director:
Nicholas Jarecki
| 
    Stars:
Richard Gere, 
Susan Sarandon, 
Brit Marling, 
Tim Roth
', '51,051', '107', '$7.92M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Premium Rush', '-2012', '
Action, Crime, Thriller            ', '6.5', '
In Manhattan, a bike messenger picks up an envelope that attracts the interest of a dirty cop, who pursues the cyclist throughout the city.', '
    Director:
David Koepp
| 
    Stars:
Joseph Gordon-Levitt, 
Michael Shannon, 
Dania Ramirez, 
Sean Kennedy
', '111,533', '91', '$20.28M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Gedo senki', '-2006', '
Animation, Adventure, Fantasy            ', '6.4', '
In a mythical land, a man and a young boy investigate a series of unusual occurrences.', '
    Director:
GorÃ´ Miyazaki
| 
    Stars:
Timothy Dalton, 
Willem Dafoe, 
Mariska Hargitay, 
Jun''ichi Okada
', '37,082', '115', '$0.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Painted Veil', '-2006', '
Drama, Romance            ', '7.5', '
A British medical doctor fights a cholera epidemic in a small Chinese village, while being trapped at home in a loveless marriage to an unfaithful wife.', '
    Director:
John Curran
| 
    Stars:
Naomi Watts, 
Edward Norton, 
Liev Schreiber, 
Catherine An
', '90,212', '125', '$8.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Beirut', '-2018', '
Action, Crime, Drama            ', '6.5', '
Caught in the crossfires of civil war, CIA operatives must send a former U.S. diplomat to negotiate for the life of a friend he left behind.', '
    Director:
Brad Anderson
| 
    Stars:
Jon Hamm, 
Jay Potter, 
Khalid Benchagra, 
Ania Josse
', '20,085', '110', '$5.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('An Interview with God', '-2018', '
Drama, Mystery            ', '5.8', '
An up-and-coming journalist finds his world and faith increasingly challenged when he''s granted the interview of a lifetime - with someone who claims to be God.', '
    Director:
Perry Lang
| 
    Stars:
David Strathairn, 
Brenton Thwaites, 
Yael Grobglas, 
Charlbi Dean
', '3,470', '97', '$1.25M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Into the Forest', '-2015', '
Drama, Thriller            ', '5.8', '
After a massive power outage, two sisters learn to survive on their own in their isolated woodland home.', '
    Director:
Patricia Rozema
| 
    Stars:
Elliot Page, 
Evan Rachel Wood, 
Max Minghella, 
Callum Keith Rennie
', '19,853', '101', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Smurfs: The Lost Village', '-2017', '
Animation, Adventure, Comedy            ', '6', '
Annie the adventure She protected from citizens from a monsters from Ancient Greece.', '
    Director:
Kelly Asbury
| 
    Stars:
Demi Lovato, 
Rainn Wilson, 
Joe Manganiello, 
Jack McBrayer
', '19,549', '90', '$45.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kon-Tiki', '-2012', '
Adventure, Biography, Drama            ', '7.2', '
Legendary explorer Thor Heyerdahl''s epic 4,300-mile crossing of the Pacific on a balsawood raft in 1947, in an effort to prove that it was possible for South Americans to settle in Polynesia in pre-Columbian times.', '
    Directors:
Joachim RÃ¸nning, 
Espen Sandberg
| 
    Stars:
PÃ¥l Sverre Hagen, 
Anders Baasmo Christiansen, 
Gustaf SkarsgÃ¥rd, 
Odd-Magnus Williamson
', '47,166', '118', '$1.52M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Under the Shadow', '-2016', '
Drama, Fantasy, Horror            ', '6.9', '
As a mother and daughter struggle to cope with the terrors of the post-revolution, war-torn Tehran of the 1980s, a mysterious evil begins to haunt their home.', '
    Director:
Babak Anvari
| 
    Stars:
Narges Rashidi, 
Avin Manshadi, 
Bobby Naderi, 
Arash Marandi
', '25,632', '84', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Million Dollar Arm', '-2014', '
Biography, Drama, Sport            ', '7', '
A sports agent stages an unconventional recruitment strategy to get talented Indian cricket players to play Major League Baseball.', '
    Director:
Craig Gillespie
| 
    Stars:
Jon Hamm, 
Aasif Mandvi, 
Alan Arkin, 
Suraj Sharma
', '44,546', '124', '$36.45M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Dawn Wall', '-2017', '
Documentary, Biography, Sport            ', '8.1', '
In an unbelievable story of perseverance, free climber Tommy Caldwell and climbing partner Kevin Jorgeson attempt to scale the impossible 3000ft Dawn Wall of El Capitan.', '
    Directors:
Josh Lowell, 
Peter Mortimer
| 
    Stars:
John Branch, 
Tommy Caldwell, 
Kevin Jorgeson
', '16,824', '100', '$1.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Big Game', '-2014', '
Action, Adventure            ', '5.4', '
A young teenager camping in the woods helps rescue the President of the United States when Air Force One is shot down near his campsite.', '
    Director:
Jalmari Helander
| 
    Stars:
Samuel L. Jackson, 
Onni Tommila, 
Ray Stevenson, 
Victor Garber
', '31,914', '90', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Bookshop', '-2017', '
Drama            ', '6.5', '
England 1959. In a small East Anglian town, Florence Green decides, against polite but ruthless local opposition, to open a bookshop.', '
    Director:
Isabel Coixet
| 
    Stars:
Emily Mortimer, 
Bill Nighy, 
Hunter Tremayne, 
Honor Kneafsey
', '13,939', '113', '$1.33M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('D-Tox', '-2002', '
Crime, Thriller            ', '5.3', '
A lead detective being stalked by a serial killer is asked to check into a clinic treating law enforcement officials who can''t face their jobs.', '
    Director:
Jim Gillespie
| 
    Stars:
Sylvester Stallone, 
Charles S. Dutton, 
Polly Walker, 
Kris Kristofferson
', '25,639', '96', '$0.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('A United Kingdom', '-2016', '
Biography, Drama, History            ', '6.9', '
The story of King Seretse Khama of Botswana and how his loving but controversial marriage to a British white woman, Ruth Williams, put his kingdom into political and diplomatic turmoil.', '
    Director:
Amma Asante
| 
    Stars:
David Oyelowo, 
Rosamund Pike, 
Tom Felton, 
Jack Davenport
', '15,365', '111', '$3.90M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Naissance des pieuvres', '-2007', '
Drama, Romance            ', '6.7', '
After meeting at a local pool over their summer break, a love triangle forms between three adolescent girls, which proves difficult to sustain as they each desire the love of another.', '
    Director:
CÃ©line Sciamma
| 
    Stars:
Pauline Acquart, 
Louise BlachÃ¨re, 
AdÃ¨le Haenel, 
Warren Jacquin
', '10,813', '85', '$0.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jue di tao wang', '-2016', '
Action, Adventure, Comedy            ', '5.7', '
A detective from Hong Kong teams up with an American gambler to battle against a notorious Chinese criminal.', '
    Director:
Renny Harlin
| 
    Stars:
Jackie Chan, 
Johnny Knoxville, 
Bingbing Fan, 
Eric Tsang
', '19,872', '107', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Hurricane Heist', '-2018', '
Action, Adventure, Crime            ', '5.1', '
Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.', '
    Director:
Rob Cohen
| 
    Stars:
Toby Kebbell, 
Maggie Grace, 
Ryan Kwanten, 
Ralph Ineson
', '19,776', '103', '$6.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Night Before', '(II) (2015)', '
Comedy, Fantasy            ', '6.4', '
On Christmas Eve, three lifelong friends spend the night in New York City looking for the Holy Grail of Christmas parties.', '
    Director:
Jonathan Levine
| 
    Stars:
Joseph Gordon-Levitt, 
Seth Rogen, 
Jillian Bell, 
Lizzy Caplan
', '68,503', '101', '$43.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Laggies', '-2014', '
Comedy, Drama, Romance            ', '6.4', '
In the throes of a quarter-life crisis, Megan panics when her boyfriend proposes, then, taking an opportunity to escape for a week, hides out in the home of her new friend, 16-year-old Annika, who lives with her world-weary single dad.', '
    Director:
Lynn Shelton
| 
    Stars:
Keira Knightley, 
ChloÃ« Grace Moretz, 
Sam Rockwell, 
Mark Webber
', '42,740', '99', '$0.44M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mark Felt: The Man Who Brought Down the White House', '-2017', '
Biography, Drama, History            ', '6.4', '
The story of Mark Felt, who under the name Deep Throat helped journalists Bob Woodward and Carl Bernstein uncover the Watergate scandal in 1972.', '
    Director:
Peter Landesman
| 
    Stars:
Liam Neeson, 
Diane Lane, 
Marton Csokas, 
Tony Goldwyn
', '12,491', '103', '$0.77M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Forces spÃ©ciales', '-2011', '
Action, Drama, War            ', '6.4', '
A French journalist in Afghanistan is kidnapped by the Taliban.', '
    Director:
StÃ©phane Rybojad
| 
    Stars:
Diane Kruger, 
Djimon Hounsou, 
BenoÃ®t Magimel, 
Denis MÃ©nochet
', '18,275', '109', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Death Warrant', '-1990', '
Action, Crime, Mystery            ', '5.7', '
In a violent and corrupt prison, decorated cop Louis Burke must infiltrate the jail to find answers to a number of inside murders. What he finds is a struggle of life and death tied in to his own past.', '
    Director:
Deran Sarafian
| 
    Stars:
Jean-Claude Van Damme, 
Robert Guillaume, 
Cynthia Gibb, 
George Dickerson
', '17,926', '89', '$16.85M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Beyond a Reasonable Doubt', '-2009', '
Crime, Drama, Mystery            ', '5.9', '
Remake of the 1956 film noir film Beyond a Reasonable Doubt in which a writer''s plan to expose a corrupt district attorney takes an unexpected turn.', '
    Director:
Peter Hyams
| 
    Stars:
Jesse Metcalfe, 
Amber Tamblyn, 
Michael Douglas, 
Joel David Moore
', '12,570', '106', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Warrior''s Way', '-2010', '
Action, Fantasy, Western            ', '6.3', '
A warrior-assassin is forced to hide in a small town in the American Badlands after refusing a mission.', '
    Director:
Sngmoo Lee
| 
    Stars:
Jang Dong-Gun, 
Kate Bosworth, 
Geoffrey Rush, 
Danny Huston
', '25,758', '100', '$5.66M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('King Cobra', '-2016', '
Crime, Drama            ', '5.6', '
Veteran gay pornography producer Stephen battles two rival producers over the rights to his underage porn star creation, Brent Corrigan, with deadly results.', '
    Director:
Justin Kelly
| 
    Stars:
Garrett Clayton, 
Christian Slater, 
Molly Ringwald, 
James Kelley
', '8,572', '91', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mirai no Mirai', '-2018', '
Animation, Adventure, Drama            ', '7', '
A young boy encounters a magical garden which enables him to travel through time and meet his relatives from different eras, with guidance by his younger sister from the future.', '
    Director:
Mamoru Hosoda
| 
    Stars:
Rebecca Hall, 
Daniel Dae Kim, 
John Cho, 
Crispin Freeman
', '13,651', '98', '$0.81M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Skjelvet', '-2018', '
Action, Drama, Thriller            ', '6.2', '
In 1904 an earthquake of magnitude 5.4 on the Richter scale shook Oslo, with an epicenter in the Oslo Graben which runs under the Norwegian capital. There are now signs that indicate that we can expect a major future earthquake in Oslo.', '
    Director:
John Andreas Andersen
| 
    Stars:
Kristoffer Joner, 
Ane Dahl Torp, 
Edith Haagenrud-Sande, 
Kathrine Thorborg Johansen
', '10,622', '106', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Drinking Buddies', '-2013', '
Comedy, Drama, Romance            ', '6.1', '
Luke and Kate are coworkers at a brewery who spend their nights drinking and flirting heavily. One weekend away together with their significant others proves who really belongs together and who doesn''t.', '
    Director:
Joe Swanberg
| 
    Stars:
Olivia Wilde, 
Jake Johnson, 
Anna Kendrick, 
Ron Livingston
', '56,754', '90', '$0.34M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('God Loves Uganda', '-2013', '
Documentary            ', '7.4', '
An account of the American Evangelicals'' attempts to indoctrinate their Christian Right beliefs in Uganda.', '
    Director:
Roger Ross Williams
', '1,179', '83', '$0.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Ala Vaikunthapurramuloo', '-2020', '
Action, Comedy, Drama            ', '7.3', '
Fate plays a vital role in connecting the life of Bantu, a son who seeks validation from his cold-hearted father with the life of Raj, whose millionaire father wishes that he was more assertive.', '
    Director:
Trivikram Srinivas
| 
    Stars:
Allu Arjun, 
Pooja Hegde, 
Tabu, 
Jayaram
', '10,091', '163', '$4.70M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Blue Jay', '(I) (2016)', '
Drama, Romance            ', '7.3', '
Meeting by chance when they return to their tiny California hometown, two former high-school sweethearts reflect on their shared past.', '
    Director:
Alex Lehmann
| 
    Stars:
Mark Duplass, 
Sarah Paulson, 
Clu Gulager, 
James Andrews
', '15,777', '80', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jui kuen II', '-1994', '
Action, Comedy            ', '7.6', '
A young martial artist is caught between respecting his pacifist father''s wishes or stopping a group of disrespectful foreigners from stealing precious artifacts.', '
    Directors:
Chia-Liang Liu, 
Jackie Chan
| 
    Stars:
Jackie Chan, 
Ho-Sung Pak, 
Lung Ti, 
Anita Mui
', '44,060', '102', '$11.55M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Last Legion', '-2007', '
Action, Adventure, War            ', '5.4', '
As the Roman empire crumbles, young Romulus Augustus flees the city and embarks on a perilous voyage to Britain to track down a legion of supporters.', '
    Director:
Doug Lefler
| 
    Stars:
Colin Firth, 
Ben Kingsley, 
Aishwarya Rai Bachchan, 
Peter Mullan
', '34,726', '101', '$5.93M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Thumbelina', '-1994', '
Animation, Family, Fantasy            ', '6.4', '
This retelling of the Hans Christian Andersen classic fairy tale has the digit-sized heroine evading the clutches of various toads, moles, and beetles before she can proceed with her courtship with her dream lover, Prince Cornelius.', '
    Directors:
Don Bluth, 
Gary Goldman
| 
    Stars:
Jodi Benson, 
Gary Imhoff, 
Gino Conforti, 
Barbara Cook
', '16,055', '86', '$11.37M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Other People', '(I) (2016)', '
Comedy, Drama            ', '6.8', '
A struggling comedy writer, fresh off a breakup and in the midst of the worst year of his life, returns to Sacramento to care for his dying mother.', '
    Director:
Chris Kelly
| 
    Stars:
Jesse Plemons, 
Molly Shannon, 
Bradley Whitford, 
Maude Apatow
', '10,487', '97', '$0.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Celeste & Jesse Forever', '-2012', '
Comedy, Drama, Romance            ', '6.6', '
A divorcing couple tries to maintain their friendship while they both pursue other people.', '
    Director:
Lee Toland Krieger
| 
    Stars:
Rashida Jones, 
Andy Samberg, 
Elijah Wood, 
Emma Roberts
', '30,382', '92', '$3.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Racing Stripes', '-2005', '
Adventure, Comedy, Drama            ', '5.2', '
An abandoned zebra grows up believing he is a racehorse, and, with the help of his barnyard friends and a teenage girl, sets out to achieve his dream of racing with thoroughbreds.', '
    Director:
Frederik Du Chau
| 
    Stars:
Frankie Muniz, 
David Spade, 
Snoop Dogg, 
Bruce Greenwood
', '16,506', '102', '$49.77M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Middle School: The Worst Years of My Life', '-2016', '
Animation, Comedy, Family            ', '6.1', '
After his principal (Andy Daly) destroys his sketchbook, Rafe (Griffin Gluck) and his best friend Leo (Thomas Barbusca) decide to destroy his book and break every rule in the school''s Code of Conduct.', '
    Director:
Steve Carr
| 
    Stars:
Griffin Gluck, 
Lauren Graham, 
Alexa Nisenson, 
Andrew Daly
', '8,256', '92', '$19.99M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('People Like Us', '-2012', '
Comedy, Drama            ', '7.1', '
While settling his recently deceased father''s estate, a salesman discovers he has a sister whom he never knew about, leading both siblings to re-examine their perceptions about family and life choices.', '
    Director:
Alex Kurtzman
| 
    Stars:
Chris Pine, 
Elizabeth Banks, 
Michelle Pfeiffer, 
Olivia Wilde
', '42,162', '114', '$12.41M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dilwale', '-2015', '
Action, Comedy, Drama            ', '5.1', '
The siblings of two estranged lovers fall for each other, unaware of the violent past that drove them apart.', '
    Director:
Rohit Shetty
| 
    Stars:
Shah Rukh Khan, 
Kajol, 
Varun Dhawan, 
Kriti Sanon
', '32,707', '158', '$4.83M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The ABCs of Death', '-2012', '
Comedy, Horror            ', '4.7', '
A 26-chapter anthology that showcases death in all its vicious wonder and brutal beauty.', '
    Directors:
Kaare Andrews, 
Angela Bettis, 
HÃ©lÃ¨ne Cattet, 
Ernesto DÃ­az Espinoza, 
Jason Eisener, 
Bruno Forzani, 
Adrian Garcia Bogliano, 
Xavier Gens, 
Jorge Michel Grau, 
Lee Hardcastle, 
Noboru Iguchi, 
Thomas Cappelen Malling, 
Anders Morgenthaler, 
Yoshihiro Nishimura, 
Banjong Pisanthanakun, 
Simon Rumley, 
Marcel Sarmiento, 
Jon Schnepp, 
Srdjan Spasojevic, 
Timo Tjahjanto, 
Andrew Traucki, 
Nacho Vigalondo, 
Jake West, 
Ti West, 
Ben Wheatley, 
Adam Wingard, 
Yudai Yamaguchi
| 
    Stars:
Ingrid BolsÃ¸ Berdal, 
IvÃ¡n GonzÃ¡lez, 
Kyra Zagorsky, 
Lucy Clements
', '18,559', '129', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Breadwinner', '-2017', '
Animation, Drama, Family            ', '7.7', '
In 2001, Afghanistan is under the control of the Taliban. When her father is captured, a determined young girl disguises herself as a boy in order to provide for her family.', '
    Director:
Nora Twomey
| 
    Stars:
Saara Chaudry, 
Soma Chhaya, 
Noorin Gulamgaus, 
Laara Sadiq
', '22,504', '94', '$0.31M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Acrimony', '-2018', '
Thriller            ', '5.8', '
A faithful wife, tired of standing by her devious husband, is enraged when it becomes clear she has been betrayed.', '
    Director:
Tyler Perry
| 
    Stars:
Taraji P. Henson, 
Lyriq Bent, 
Crystle Stewart, 
Jazmyn Simon
', '8,263', '120', '$43.55M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('LBJ', '-2016', '
Biography, Drama, History            ', '6.5', '
Lyndon B. Johnson aligns himself with John F. Kennedy, rises to the Presidency, and deals with the civil rights struggles of the 1960s.', '
    Director:
Rob Reiner
| 
    Stars:
Woody Harrelson, 
Michael Stahl-David, 
Richard Jenkins, 
Jennifer Jason Leigh
', '6,303', '98', '$2.47M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Bag Man', '(I) (2014)', '
Action, Crime, Drama            ', '5.2', '
A criminal bides his time at a seedy motel, waiting for his boss after killing several men and making away with a mystery bag.', '
    Director:
David Grovic
| 
    Stars:
John Cusack, 
Rebecca Da Costa, 
Robert De Niro, 
Crispin Glover
', '16,620', '108', '$0.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Viceroy''s House', '-2017', '
Biography, Drama, History            ', '6.7', '
The final Viceroy of India, Louis Francis Albert Victor Nicholas Mountbatten, 1st Earl Mountbatten of Burma (Hugh Bonneville), is tasked with overseeing the transition of British India to independence, but meets with conflict as different sides clash in the face of monumental change.', '
    Director:
Gurinder Chadha
| 
    Stars:
Hugh Bonneville, 
Gillian Anderson, 
Manish Dayal, 
Huma Qureshi
', '7,296', '106', '$1.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Joshua', '-2007', '
Drama, Horror, Thriller            ', '5.9', '
The arrival of a newborn girl causes the gradual disintegration of the Cairn family; particularly for 9-year-old Joshua (Kogan), an eccentric boy whose proper upbringing and refined tastes both take a sinister turn.', '
    Director:
George Ratliff
| 
    Stars:
Sam Rockwell, 
Vera Farmiga, 
Jacob Kogan, 
Celia Weston
', '12,266', '106', '$0.48M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Perfect Host', '-2010', '
Comedy, Crime, Thriller            ', '6.8', '
An on-the-run convict looking for temporary cover finds it at the house of a very colorful character.', '
    Director:
Nick Tomnay
| 
    Stars:
David Hyde Pierce, 
Clayne Crawford, 
Nathaniel Parker, 
Tyrees Allen
', '26,028', '93', '$0.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Coco avant Chanel', '-2009', '
Biography, Drama            ', '6.7', '
The story of Coco Chanel''s rise from obscure beginnings to the heights of the fashion world.', '
    Director:
Anne Fontaine
| 
    Stars:
Audrey Tautou, 
BenoÃ®t Poelvoorde, 
Alessandro Nivola, 
Marie Gillain
', '39,401', '105', '$6.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Wildflower', '(II) (2014)', '
Drama, Thriller            ', '5.3', '
A college student struggling with a painful childhood begins to have a reoccurring nightmare that compels her to confront her past and restore her faith.', '
    Director:
Nicholas DiBella
| 
    Stars:
Nathalia Ramos, 
Cody Longo, 
Alexa Rose Steele, 
Benjamin Ashbrook
', '866', '92', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Pariah', '(I) (2011)', '
Drama            ', '7.2', '
A Brooklyn teenager juggles conflicting identities and risks friendship, heartbreak, and family in a desperate search for sexual expression.', '
    Director:
Dee Rees
| 
    Stars:
Adepero Oduye, 
Kim Wayans, 
Aasha Davis, 
Pernell Walker
', '6,525', '86', '$0.76M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Boy Meets Girl', '(I) (2014)', '
Comedy, Drama, Romance            ', '7.1', '
Boy Meets Girl is a funny, tender, sex positive romantic comedy that explores what it means to be a real man or woman, and how important it is to live a courageous life not letting fear stand in the way of going after your dreams.', '
    Director:
Eric Schaeffer
| 
    Stars:
Michael Welch, 
Michelle Hendley, 
Alexandra Turshen, 
Michael Galante
', '4,391', '95', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Operation Avalanche', '-2016', '
Drama, Mystery, Thriller            ', '6.1', '
In 1967, four undercover CIA agents were sent to NASA posing as a documentary film crew. What they discovered led to one of the biggest conspiracies in American history.', '
    Director:
Matt Johnson
| 
    Stars:
Matt Johnson, 
Owen Williams, 
Andrew Appelle, 
Jared Raab
', '6,983', '94', '$0.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dealin'' with Idiots', '-2013', '
Comedy            ', '5.4', '
After experiencing the insanity of the adults connected to his son''s baseball team, a comedian researches for a comedy movie about them.', '
    Director:
Jeff Garlin
| 
    Stars:
Jeff Garlin, 
Steve Agee, 
Gina Gershon, 
Jami Gertz
', '1,306', '88', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Contracted', '-2013', '
Drama, Horror, Thriller            ', '5.3', '
After being drugged and raped at a party, a young woman contracts what she thinks is an STD; but, it''s actually something much worse.', '
    Director:
Eric England
| 
    Stars:
Najarra Townsend, 
Caroline Williams, 
Alice Macdonald, 
Matt Mercer
', '14,668', '84', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('XX', '-2017', '
Horror            ', '4.6', '
Four short horror films that are directed and written by women.', '
    Directors:
Roxanne Benjamin, 
SofÃ¬a Carrillo, 
Karyn Kusama, 
St. Vincent, 
Jovanka Vuckovic
| 
    Stars:
Natalie Brown, 
Jonathan Watton, 
Peter DaCunha, 
Peyton Kennedy
', '11,394', '80', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('V/H/S Viral', '-2014', '
Horror, Thriller            ', '4.2', '
A Los Angeles police chase sends a fame-obsessed man on a wild ride to save his girlfriend from a cybernetic terror.', '
    Directors:
Justin Benson, 
Gregg Bishop, 
Todd Lincoln, 
Aaron Moorhead, 
Marcel Sarmiento, 
Nacho Vigalondo
| 
    Stars:
Patrick Lawrie, 
Emilia Ares, 
Celia K. Milius, 
Steve Berens
', '15,520', '81', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Inosensu: Innocence', '-2004', '
Animation, Action, Drama            ', '7.5', '
In the year 2032, BatÃ´, a cyborg detective for the anti-terrorist unit Public Security Section 9, investigates the case of a female robot--one created solely for sexual pleasure--who slaughtered her owner.', '
    Director:
Mamoru Oshii
| 
    Stars:
Akio Ã”tsuka, 
Atsuko Tanaka, 
Tamio Ã”ki, 
KÃ´ichi Yamadera
', '37,017', '100', '$1.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Manny & Lo', '-1996', '
Comedy, Drama            ', '6.6', '
A pregnant teen and her younger sister run away from foster homes and kidnap a woman whom they believe can help with the pregnancy.', '
    Director:
Lisa Krueger
| 
    Stars:
Scarlett Johansson, 
Aleksa Palladino, 
Mary Kay Place, 
Dean Silvers
', '1,944', '88', '$0.50M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Brotherly Love', '(III) (2015)', '
Drama            ', '6.7', '
Set on the backdrop of Philadelphia''s famed Overbrook High School, we track the lives of the nations number one high school basketball player Sergio Taylor as he deals with the early pressures of hood fame.', '
    Director:
Jamal Hill
| 
    Stars:
Keke Palmer, 
Cory Hardrict, 
Romeo Miller, 
Eric D. Hill Jr.
', '1,787', '89', '$0.44M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Ashby', '-2015', '
Comedy, Crime, Drama            ', '6.4', '
High-school student Ed Wallis enters into a friendship with his neighbor, Ashby, a retired CIA assassin who only has a few months left to live.', '
    Director:
Tony McNamara
| 
    Stars:
Mickey Rourke, 
Nat Wolff, 
Emma Roberts, 
Sarah Silverman
', '15,197', '100', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Results', '-2015', '
Comedy, Romance            ', '5.4', '
Two mismatched personal trainers'' lives are upended by the actions of a new, wealthy client.', '
    Director:
Andrew Bujalski
| 
    Stars:
Guy Pearce, 
Cobie Smulders, 
Kevin Corrigan, 
Giovanni Ribisi
', '6,774', '105', '$0.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('This Film Is Not Yet Rated', '-2006', '
Documentary            ', '7.5', '
Kirby Dick''s exposÃ© about the American movie ratings board.', '
    Director:
Kirby Dick
| 
    Stars:
Kirby Dick, 
Kimberly Peirce, 
Darren Aronofsky, 
Atom Egoyan
', '27,671', '98', '$0.30M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mind Game', '(I) (2004)', '
Animation, Adventure, Comedy            ', '7.8', '
After a deadly encounter with two yakuza, a loser with a crush on his childhood girlfriend goes to heaven and back, embarking on a psychedelic self-discovery experience with her and his friends.', '
    Directors:
Masaaki Yuasa, 
KÃ´ji Morimoto
| 
    Stars:
KÃ´ji Imada, 
Sayaka Maeda, 
Takashi Fujii, 
Seiko Takuma
', '8,774', '103', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hell and Back', '-2015', '
Animation, Adventure, Comedy            ', '5.4', '
Two best friends set out to rescue their pal after he''s accidentally dragged to hell.', '
    Directors:
Tom Gianas, 
Ross Shuman
| 
    Stars:
Nick Swardson, 
Mila Kunis, 
Bob Odenkirk, 
T.J. Miller
', '4,823', '86', '$0.16M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Born to Be Blue', '-2015', '
Biography, Drama, Music            ', '6.9', '
A re-imagining of jazz legend Chet Baker''s musical comeback in the late ''60s.', '
    Director:
Robert Budreau
| 
    Stars:
Ethan Hawke, 
Carmen Ejogo, 
Callum Keith Rennie, 
Tony Nappo
', '8,304', '97', '$0.83M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Life Itself', '-2014', '
Documentary, Biography            ', '7.8', '
The life and career of the renowned film critic and social commentator, Roger Ebert.', '
    Director:
Steve James
| 
    Stars:
Roger Ebert, 
Chaz Ebert, 
Gene Siskel, 
Martin Scorsese
', '15,182', '121', '$0.81M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hai Phuong', '-2019', '
Action, Drama, Thriller            ', '6.3', '
Veronica Ngo stars as an ex-gangster who is lying low in the countryside after becoming a mother, but she can''t escape her violent past when her daughter is kidnapped.', '
    Director:
Le-Van Kiet
| 
    Stars:
Veronica Ngo, 
Mai CÃ¡t Vi, 
Thanh Nhien Phan, 
Pham Anh Khoa
', '4,265', '98', '$0.59M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Our Man Flint', '-1966', '
Action, Adventure, Comedy            ', '6.5', '
When scientists use eco-terrorism to impose their will on the world by affecting extremes in the weather, Intelligence Chief Cramden calls in top agent Derek Flint.', '
    Director:
Daniel Mann
| 
    Stars:
James Coburn, 
Lee J. Cobb, 
Gila Golan, 
Edward Mulhare
', '6,205', '108', '$16.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Restless Creature: Wendy Whelan', '-2016', '
Documentary            ', '7.1', '
Documentary on the great American Ballerina Wendy Whelan', '
    Directors:
Linda Saffire, 
Adam Schlesinger
| 
    Stars:
Peter Martins, 
David Prottas, 
Wendy Whelan
', '361', '90', '$0.13M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hagane no renkinjutsushi: Mirosu no seinaru hoshi', '-2011', '
Animation, Action, Adventure            ', '7', '
In the lost holy land of Milos, the Elrics search for the truth behind an unknown form of alchemy. What secrets are hidden in Milos? Riddles must be solved and dangers faced before the truth can be found.', '
    Director:
Kazuya Murata
| 
    Stars:
Vic Mignogna, 
Maxey Whitehead, 
Alexis Tipton, 
Matthew Mercer
', '4,653', '110', '$0.18M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Won''t Back Down', '-2012', '
Drama            ', '6.5', '
Two determined mothersÂ­, one a teacher, look to transform their children''s failing inner city school. Facing a powerful and entrenched bureaucracy, they risk everything to make a difference in the education and future of their children.', '
    Director:
Daniel Barnz
| 
    Stars:
Viola Davis, 
Maggie Gyllenhaal, 
Holly Hunter, 
Oscar Isaac
', '6,317', '121', '$5.31M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Mob Psycho 100', '-2018', '
Sci-Fi, Thriller            ', '5.1', '
A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.', '
            
    Stars:
Ayumu Mochizuki, 
Tatsuomi Hamada, 
Atsushi Arai, 
Masayuki Deai
', '462', '24', '$0.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jinn', '-2014', '
Fantasy, Horror, Thriller            ', '4.2', '
A man turns to a mysterious pair and a shackled mental patient for help in combating an ancient family curse.', '
    Director:
Ajmal Zaheer Ahmad
| 
    Stars:
Dominic Rains, 
Ray Park, 
William Atherton, 
Faran Tahir
', '4,638', '97', '$0.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Nocturama', '-2016', '
Drama, Thriller            ', '6.4', '
Some young folks, tired of the society they''re living in, plan a bomb attack over Paris before taking shelter for a night in a shopping center.', '
    Director:
Bertrand Bonello
| 
    Stars:
Finnegan Oldfield, 
Vincent Rottiers, 
Hamza Meziani, 
Manal Issa
', '4,659', '130', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Seoul Searching', '-2015', '
Comedy, Drama, Music            ', '7', '
In 1986, a group of foreign born Korean teenagers attend a summer camp in South Korea.', '
    Director:
Benson Lee
| 
    Stars:
Justin Chon, 
Jessika Van, 
In-Pyo Cha, 
Teo Yoo
', '1,537', '105', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Middle of Nowhere', '-2012', '
Drama            ', '6.4', '
Ruby goes on a journey of self-discovery when she drops out of medical school in order to focus on her incarcerated husband''s well-being.', '
    Director:
Ava DuVernay
| 
    Stars:
Emayatzy Corinealdi, 
David Oyelowo, 
Lorraine Toussaint, 
Edwina Findley
', '1,713', '97', '$0.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('17 filles', '-2011', '
Drama            ', '6', '
When a rebellious teenager finds out that she is already eight weeks pregnant, she forms a pact with sixteen of her classmates to get pregnant simultaneously, raise their children together, and most of all, be in charge of their lives.', '
    Directors:
Delphine Coulin, 
Muriel Coulin
| 
    Stars:
Louise Grinberg, 
Juliette Darche, 
Roxane Duran, 
Esther Garrel
', '3,140', '86', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Adult Beginners', '-2014', '
Action, Comedy, Drama            ', '5.6', '
A bankrupt businessman tries to restore good relations with his sister and her family.', '
    Director:
Ross Katz
| 
    Stars:
Nick Kroll, 
Rose Byrne, 
Bobby Cannavale, 
Joel McHale
', '8,169', '92', '$0.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Finding Bliss', '-2009', '
Comedy, Romance            ', '5.3', '
A romantic comedy that explores the adult film industry through the eyes of an idealistic 25 year-old award winning film school grad.', '
    Director:
Julie Davis
| 
    Stars:
Leelee Sobieski, 
Matthew Davis, 
Jamie Kennedy, 
Denise Richards
', '2,442', '96', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The King and I', '-1999', '
Animation, Family, Fantasy            ', '4.5', '
Traveling to the exotic kingdom of Siam, English schoolteacher Anna Leonowens soon discovers that her most difficult challenge is the stubborn, imperious King himself.', '
    Director:
Richard Rich
| 
    Stars:
Miranda Richardson, 
Martin Vidnovic, 
Christiane Noll, 
Ian Richardson
', '3,922', '87', '$11.96M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('All the Queen''s Men', '-2001', '
Action, Comedy, Drama            ', '4.9', '
A mismatched team of British Special Services agents led by an American must infiltrate, in disguise, a female-run Enigma factory in Berlin and bring back the decoding device that will end the war.', '
    Director:
Stefan Ruzowitzky
| 
    Stars:
Eddie Izzard, 
Matt LeBlanc, 
Udo Kier, 
James Cosmo
', '2,590', '99', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Any Day Now', '(I) (2012)', '
Drama            ', '7.5', '
In the 1970s, a gay couple fights a biased legal system to keep custody of the abandoned mentally handicapped teenager that comes to live under their roof.', '
    Director:
Travis Fine
| 
    Stars:
Alan Cumming, 
Garret Dillahunt, 
Isaac Leyva, 
Frances Fisher
', '6,037', '98', '$0.20M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Pyaar Ka Punchnama 2', '-2015', '
Comedy, Drama, Romance            ', '7.2', '
After falling in love, three roommates experience changes in their lives.', '
    Director:
Luv Ranjan
| 
    Stars:
Kartik Aaryan, 
Omkar Kapoor, 
Sunny Singh Nijjar, 
Nushrat Bharucha
', '14,399', '137', '$0.22M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Oorlogswinter', '-2008', '
Drama, History, War            ', '7', '
In the Nazi-occupied Netherlands, a teenage boy gets involved in the Dutch Resistance after coming to the aid of a wounded RAF pilot.', '
    Director:
Martin Koolhoven
| 
    Stars:
Martijn Lakemeier, 
Jamie Campbell Bower, 
Yorick van Wageningen, 
Raymond Thiry
', '12,479', '103', '$0.54M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Last of Robin Hood', '-2013', '
Biography, Drama, Romance            ', '5.7', '
The last days in the life of legendary Hollywood actor Errol Flynn.', '
    Directors:
Richard Glatzer, 
Wash Westmoreland
| 
    Stars:
John Hudson Messerall, 
Brian Bascle, 
Daniel J. Clancy, 
Kelly O''Neal
', '2,131', '94', '$0.27M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Yoake tsugeru RÃ» no uta', '-2017', '
Animation, Adventure, Comedy            ', '6.8', '
The story centers on Kai, a gloomy middle school student whose life changes after meeting Lu, a mermaid.', '
    Director:
Masaaki Yuasa
| 
    Stars:
Kanon Tani, 
ShÃ´ta Shimoda, 
Minako Kotobuki, 
SÃ´ma SaitÃ´
', '1,991', '112', '$0.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Fed Up', '-2014', '
Documentary            ', '7.7', '
An examination of America''s obesity epidemic and the food industry''s role in aggravating it.', '
    Director:
Stephanie Soechtig
| 
    Stars:
Michele Simon, 
Katie Couric, 
Bill Clinton, 
Michael Bloomberg
', '11,714', '92', '$1.54M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Whitney', '-2018', '
Documentary, Biography, Drama            ', '7.3', '
An in-depth look at the life and music of Whitney Houston.', '
    Director:
Kevin Macdonald
| 
    Stars:
Whitney Houston, 
Ellen White, 
Michael Houston, 
Cissy Houston
', '7,004', '120', '$3.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Under solen', '-1998', '
Drama, Romance            ', '6.7', '
Olof lives alone on a farm after the death of his mother. Unable to read and write, he is dependent on his younger friend, Erik. Olof advertises for a housekeeper, and Ellen arrives. During summer Olof''s heart and Erik''s desires develops.', '
    Director:
Colin Nutley
| 
    Stars:
Rolf LassgÃ¥rd, 
Helena BergstrÃ¶m, 
Johan Widerberg, 
Gunilla RÃ¶Ã¶r
', '2,510', '130', '$0.29M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Damsels in Distress', '-2011', '
Comedy, Drama, Romance            ', '5.7', '
A trio of girls set out to change the male-dominated environment of the Seven Oaks college campus, and to rescue their fellow students from depression, grunge and low standards of every kind.', '
    Director:
Whit Stillman
| 
    Stars:
Greta Gerwig, 
Adam Brody, 
Lio Tipton, 
Megalyn Echikunwoke
', '9,343', '99', '$1.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Tomorrow Is Forever', '-1946', '
Drama, Romance, War            ', '7.4', '
An American World War I soldier, whose disfigured face is reconstructed by Austrian plastic surgeons, returns home after twenty years, but no one recognizes him, his widow is married to another man, and his son is a grown young man.', '
    Director:
Irving Pichel
| 
    Stars:
Claudette Colbert, 
Orson Welles, 
George Brent, 
Lucile Watson
', '2,456', '104', '$3.25M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Gap tung kei hap', '-2014', '
Action, Comedy, History            ', '4.8', '
An imperial guard and his three traitorous childhood friends ordered to hunt him down get accidentally buried and kept frozen in time. 400 years later passes and they are defrosted continuing the battle they left behind.', '
    Director:
Wing-Cheong Law
| 
    Stars:
Donnie Yen, 
Baoqiang Wang, 
Shengyi Huang, 
Kang Yu
', '3,436', '104', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Muscle Shoals', '-2013', '
Documentary, Biography, History            ', '7.8', '
A documentary that celebrates Rick Hall, the founder of FAME Studios in Muscle Shoals, Alabama, and the signature sound he developed in songs such as I''ll Take You There, Brown Sugar, and When a Man Loves a Woman.', '
    Director:
Greg ''Freddy'' Camalier
| 
    Stars:
Rick Hall, 
Aretha Franklin, 
Keith Richards, 
Candi Staton
', '3,695', '111', '$0.70M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Carer', '(I) (2016)', '
Comedy, Drama            ', '6.6', '
When the question is to be or not to be, there is only one answer.', '
    Director:
JÃ¡nos EdelÃ©nyi
| 
    Stars:
Maitland Chandler, 
Ruth Posner, 
Coco KÃ¶nig, 
Selina Cadell
', '1,321', '89', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('I''m Reed Fish', '-2006', '
Comedy, Drama, Romance            ', '5.7', '
Reed Fish''s life turns into chaos when a high school crush returns to Mud Meadows on the eve of his marriage to the small town''s sweetheart.', '
    Director:
Zackary Adler
| 
    Stars:
Jay Baruchel, 
Alexis Bledel, 
Victor Rasuk, 
Schuyler Fisk
', '4,283', '93', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Hunting Ground', '-2015', '
Documentary            ', '7.4', '
An exposÃ© of rape crimes on U.S. college campuses, their institutional cover-ups, and the devastating toll they take on students and their families.', '
    Director:
Kirby Dick
| 
    Stars:
Andrea Pino, 
Annie Clark, 
Claire Potter, 
Melinda Manning
', '6,072', '103', '$0.41M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Somm', '-2012', '
Documentary            ', '7.1', '
Four sommeliers attempt to pass the prestigious Master Sommelier exam, a test with one of the lowest pass rates in the world.', '
    Director:
Jason Wise
| 
    Stars:
Bo Barrett, 
Shayn Bjornholm, 
Dave Cauble, 
Ian Cauble
', '4,536', '94', '$0.17M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Howl', '-2010', '
Biography, Drama, Romance            ', '6.7', '
As Allen Ginsberg talks about his life and art, his most famous poem is illustrated in animation while the obscenity trial of the work is dramatized.', '
    Directors:
Rob Epstein, 
Jeffrey Friedman
| 
    Stars:
James Franco, 
Todd Rotondi, 
Jon Prescott, 
Aaron Tveit
', '12,757', '84', '$0.62M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kevin Hart: What Now?', '-2016', '
Documentary, Comedy            ', '5.9', '
Comedian Kevin Hart performs in front of a crowd of 53,000 people at Philadelphia''s outdoor venue, Lincoln Financial Field.', '
    Directors:
Leslie Small, 
Tim Story
| 
    Stars:
Kevin Hart, 
Don Cheadle, 
Halle Berry, 
Ed Helms
', '9,154', '96', '$23.59M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Aala Kaf Ifrit', '-2017', '
Crime, Drama, Thriller            ', '7', '
A college student seeks help after a brutal assault but faces a bureaucratic nightmare when she reveals that her perpetrators are police officers.', '
    Director:
Kaouther Ben Hania
| 
    Stars:
Mariam Al Ferjani, 
Ghanem Zrelli, 
Noomen Hamda, 
Mohamed Akkari
', '1,912', '100', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Interior. Leather Bar.', '-2013', '
Drama            ', '5.1', '
Filmmakers James Franco and Travis Mathews re-imagine the lost 40 minutes from Cruising (1980) as a starting point to a broader exploration of sexual and creative freedom.', '
    Directors:
James Franco, 
Travis Mathews
| 
    Stars:
Val Lauren, 
Christian Patrick, 
James Franco, 
Travis Mathews
', '2,472', '60', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Puffy Chair', '-2005', '
Comedy, Drama, Romance            ', '6.5', '
Josh Sagers drives cross-country on a mission to deliver his father''s birthday gift - a giant purple LazyBoy.', '
    Directors:
Jay Duplass, 
Mark Duplass
| 
    Stars:
Mark Duplass, 
Katie Aselton, 
Rhett Wilkins, 
Julie Fischer
', '4,978', '85', '$0.19M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Jonah: A VeggieTales Movie', '-2002', '
Animation, Adventure, Comedy            ', '6.5', '
When the singing Veggies encounter some car trouble, they are stranded at an old rundown seafood joint, where nothing is quite as it seems.', '
    Directors:
Mike Nawrocki, 
Phil Vischer
| 
    Stars:
Phil Vischer, 
Mike Nawrocki, 
Tim Hodge, 
Lisa Vischer
', '4,038', '82', '$25.58M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Be Here Now', '-2015', '
Documentary, Biography, Drama            ', '8.6', '
As though life is imitating art, actor and sex-symbol, Andy Whitfield, had just become a star as the lead in the hit television series,''Spartacus,'' when he is faced with his biggest ...                See full summaryÂ Â»
', '
    Director:
Lilibet Foster
| 
    Stars:
Jai Courtney, 
Andy Whitfield, 
Indigo Whitfield, 
Jesse Whitfield
', '3,288', '100', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Wilbur Wants to Kill Himself', '-2002', '
Comedy, Drama, Romance            ', '6.8', '
The chronically suicidal Wilbur and his good-hearted big brother Harbour are in their thirties, when their father dies, leaving them with nothing but a worn down second-hand bookshop in Glasgow.', '
    Director:
Lone Scherfig
| 
    Stars:
Jamie Sives, 
Adrian Rawlins, 
Shirley Henderson, 
Lisa McKinlay
', '7,724', '111', '$0.23M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Trial', '-2010', '
Crime, Drama, Mystery            ', '5.6', '
After the horrific death of his wife and two sons, suicide seems to be the only escape for a small town attorney, until he''s assigned a capital punishment case that begins to transform his life.', '
    Director:
Gary Wheeler
| 
    Stars:
Larry Bagby, 
Clare Carey, 
Nikki Deloach, 
David Dwyer
', '1,462', '101', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Grandmaster', '-2012', '
Action, Thriller            ', '7', '
A veteran cop chases a cold blooded serial killer, who murders his victims in alphabetical order.', '
    Director:
B. Unnikrishnan
| 
    Stars:
Mohanlal, 
Priyamani, 
Babu Antony, 
Arjun Nandakumar
', '2,034', '100', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Devil and Father Amorth', '-2017', '
Documentary, Horror            ', '4.6', '
Father Gabriele Amorth performs his ninth exorcism on an Italian woman.', '
    Director:
William Friedkin
| 
    Stars:
William Friedkin, 
Jeffrey Burton Russell, 
Christina, 
Gabriele Amorth
', '2,202', '68', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Requiem for the American Dream', '-2015', '
Documentary, Biography, News            ', '8.1', '
Renowned academic and author Noam Chomsky elucidates 10 principles of concentration of wealth and power that have led to unprecedented inequality and the hollowing out of the American middle class.', '
    Directors:
Peter D. Hutchison, 
Kelly Nyks, 
Jared P. Scott
| 
    Stars:
Noam Chomsky, 
Alan Greenspan, 
Malcolm X, 
Richard Nixon
', '9,193', '73', '$0.13M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Particle Fever', '-2013', '
Documentary            ', '7.4', '
As the Large Hadron Collider is about to be launched for the first time, physicists are on the cusp of the greatest scientific discovery of all time -- or perhaps their greatest failure.', '
    Director:
Mark Levinson
| 
    Stars:
David Kaplan, 
Fabiola Gianotti, 
Sherwood Boehlert, 
Joel Hefley
', '7,271', '99', '$0.87M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Money', '-2016', '
Crime, Mystery, Thriller            ', '5.5', '
Two corporate spies with a $5 million haul for selling secrets are held hostage by a thief, triggering a game of cat and mouse to gain the upper hand.', '
    Director:
MartÃ­n Rosete
| 
    Stars:
Jesse Williams, 
Kellan Lutz, 
Jamie Bamber, 
Jess Weixler
', '2,806', '86', '$1.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sufat Chol', '-2016', '
Drama            ', '6.8', '
When their entire lives shatter, two Bedouin women struggle to change the unchangeable rules, each in her own individual way.', '
    Director:
Elite Zexer
| 
    Stars:
Lamis Ammar, 
Ruba Blal, 
Hitham Omari, 
Khadija Al Akel
', '3,310', '87', '$0.08M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Chiisana eiyÃ»: Kani to tamago to tÃ´mei ningen', '-2018', '
Animation, Adventure, Family            ', '6.6', '
An anthology of three original shorts written and directed by Hiromasa Yonebayashi, Yoshiyuki Momose and Akihiko Yamashita.', '
    Directors:
Yoshiyuki Momose, 
Akihiko Yamashita, 
Hiromasa Yonebayashi
| 
    Stars:
Alex Cazares, 
Jessica DiCicco, 
Scarlett Estevez, 
Todd Haberkorn
', '2,308', '53', '$0.18M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Undefeated', '-2011', '
Documentary, Sport            ', '7.7', '
Chronicles three underprivileged students from inner-city Memphis and their volunteer coach who tries to help them beat the odds on and off the field.', '
    Directors:
Daniel Lindsay, 
T.J. Martin
| 
    Stars:
Bill Courtney, 
O.C. Brown, 
Montrail ''Money'' Brown, 
Chavis Daniels
', '6,897', '113', '$0.56M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Papa Hemingway in Cuba', '-2015', '
Biography, Drama            ', '6.3', '
In 1959, a young journalist ventures to Havana, Cuba to meet his idol, the legendary Ernest Hemingway who helped him find his literary voice, while the Cuban Revolution comes to a boil around them.', '
    Director:
Bob Yari
| 
    Stars:
Giovanni Ribisi, 
Joely Richardson, 
Adrian Sparks, 
Minka Kelly
', '1,450', '110', '$1.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Ethan Frome', '-1993', '
Drama, Romance            ', '6.2', '
A new pastor arrives in a stark Vermont village and is intrigued by crippled, misshapen Ethan Frome living on an isolated, hardscrabble farm with his sickly wife Zeena.', '
    Director:
John Madden
| 
    Stars:
Liam Neeson, 
Patricia Arquette, 
Gil Rood, 
Tate Donovan
', '2,056', '99', '$0.30M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('LUV', '-2012', '
Crime, Drama            ', '6', '
An 11-year-old boy gets a crash course in what it means to be a man when he spends a day with the ex-convict uncle he idolizes.', '
    Director:
Sheldon Candis
| 
    Stars:
Common, 
Michael Rainey Jr., 
Dennis Haysbert, 
Danny Glover
', '2,136', '94', '$0.14M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Touchy Feely', '-2013', '
Comedy, Drama            ', '5.3', '
A massage therapist is unable to do her job when stricken with a mysterious and sudden aversion to bodily contact. Meanwhile, her uptight brother''s floundering dental practice receives new life when clients seek out his healing touch.', '
    Director:
Lynn Shelton
| 
    Stars:
Rosemarie DeWitt, 
Elliot Page, 
Josh Pais, 
Scoot McNairy
', '3,615', '88', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Generation Iron', '-2013', '
Documentary, Drama, Sport            ', '7.1', '
A documentary that follows top bodybuilders as they train to compete in the Mr. Olympia competition.', '
    Director:
Vlad Yudin
| 
    Stars:
Arnold Schwarzenegger, 
Mickey Rourke, 
Michael Jai White, 
Lou Ferrigno
', '7,715', '106', '$0.85M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sleep, My Love', '-1948', '
Drama, Film-Noir, Mystery            ', '6.8', '
Chronic sleepwalker Alison Courtland thinks that a mysterious man wearing horned-rimmed eye glasses is out to kill her but her husband blames her tired imagination.', '
    Director:
Douglas Sirk
| 
    Stars:
Claudette Colbert, 
Robert Cummings, 
Don Ameche, 
Rita Johnson
', '1,631', '97', '$1.80M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Bethany Hamilton: Unstoppable', '-2018', '
Documentary, Sport            ', '7.4', '
After losing an arm to a shark attack at age 13, Bethany Hamilton refuses to give up her dreams of being a professional surfer.', '
    Director:
Aaron Lieber
| 
    Stars:
Alana Blanchard, 
Adam Dirks, 
Tobias Dirks, 
Madison Graber
', '619', '100', '$0.59M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Bettie Page Reveals All', '-2012', '
Documentary, Biography            ', '7.1', '
The world''s greatest pinup model and cult icon, Bettie Page, recounts the true story of how her free expression overcame government witch-hunts to help launch America''s sexual revolution.', '
    Director:
Mark Mori
| 
    Stars:
Bettie Page, 
Hugh Hefner, 
Olivia de Berardinis, 
Dita Von Teese
', '1,459', '101', '$0.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Short Game', '-2013', '
Documentary, Sport            ', '7.3', '
The best 7 year old golfers from around the world descend on the world famous Pinehurst Golf course in North Carolina to determine the next world champion and who might become golf''s next ...                See full summaryÂ Â»
', '
    Director:
Josh Greenbaum
| 
    Stars:
Amari Avery, 
Jed Dy, 
Allan Kournikova, 
Zamokuhle Nxasana
', '1,439', '99', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Al midan', '-2013', '
Documentary, Drama, History            ', '8.1', '
A group of Egyptian revolutionaries battle leaders and regimes, risking their lives to build a new society of conscience.', '
    Director:
Jehane Noujaim
| 
    Stars:
Ahmed Hassan, 
Khalid Abdalla, 
Magdy Ashour, 
Ramy Essam
', '8,795', '108', '$0.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Supermensch: The Legend of Shep Gordon', '-2013', '
Documentary, Biography, Music            ', '7.4', '
The life and career of the legendary Hollywood insider, Shep Gordon.', '
    Directors:
Beth Aala, 
Mike Myers
| 
    Stars:
Shep Gordon, 
Sylvester Stallone, 
Michael Douglas, 
Alice Cooper
', '3,218', '85', '$0.21M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Nanking', '-2007', '
Biography, History, War            ', '7.6', '
Through readings of historical account by actors and the testimony of survivors, the events of the Nanjing Massacre are recounted.', '
    Directors:
Bill Guttentag, 
Dan Sturman
| 
    Stars:
Hugo Armstrong, 
Rosalind Chao, 
Stephen Dorff, 
John Getz
', '3,416', '90', '$0.16M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Praia do Futuro', '-2014', '
Drama, Romance            ', '6.4', '
Shortly after failing to rescue a drowning man, Donato meets Konrad, a friend of the victim. They soon begin a relationship which seems doomed from the start, while Donato''s past catches up with him.', '
    Director:
Karim AÃ¯nouz
| 
    Stars:
Wagner Moura, 
Clemens Schick, 
JesuÃ­ta Barbosa, 
Fred Lima
', '2,939', '106', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Morris from America', '-2016', '
Comedy, Drama, Romance            ', '6.2', '
The romantic and coming-of-age misadventures of a 13-year-old American living in Germany.', '
    Director:
Chad Hartigan
| 
    Stars:
Markees Christmas, 
Craig Robinson, 
Carla Juri, 
Patrick GÃ¼ldenberg
', '5,201', '91', '$0.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Orgasm Inc.', '-2009', '
Documentary            ', '5.9', '
Extraordinary behind-the-scenes access reveals a drug company''s fevered race to develop the first FDA-approved Viagra for women - and offers a humorous but sobering look inside the cash-fueled pharmaceutical industry.', '
    Director:
Elizabeth Canner
| 
    Stars:
Elizabeth Canner, 
Darby Stephens, 
Virgil Place, 
Leland Wilson
', '535', '73', '$0.05M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Peter and the Farm', '-2016', '
Documentary            ', '7.1', '
A documentary on Peter Dunning, the proprietor of Mile Hill Farm in Vermont who has isolated himself away from his family and often suggests to the filmmakers to make his own suicide a narrative device.', '
    Director:
Tony Stone
| 
    Star:
Peter Dunning
', '713', '91', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Yosemite', '-2015', '
Drama            ', '4.8', '
It''s the fall of 1985. The intertwining tales of three 5th grade friends, Chris, Joe and Ted, unfold in the suburban paradise of Palo Alto, as the threat of a mountain lion looms over the community.', '
    Director:
Gabrielle Demeestere
| 
    Stars:
James Franco, 
Everett Meckler, 
Alec Mansky, 
Calum John
', '830', '80', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('I Called Him Morgan', '-2016', '
Documentary, Drama, History            ', '7.3', '
An exploration of the relationship between jazz trumpeter Lee Morgan and his common-law wife Helen, who was implicated in his murder in 1972.', '
    Director:
Kasper Collin
| 
    Stars:
Lee Morgan, 
Helen Morgan, 
Wayne Shorter, 
Larry Reni Thomas
', '1,649', '92', '$0.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Fluffy Movie: Unity Through Laughter', '-2014', '
Documentary, Comedy            ', '7.3', '
A comedy concert film that captures the on-stage performance and inspirational success story of Gabriel Fluffy Iglesias.', '
    Directors:
Manny Rodriguez, 
Jay Lavender
| 
    Stars:
Gabriel Iglesias, 
Jacqueline Obradors, 
Gina Brillon, 
Alfred Robles
', '3,726', '101', '$2.83M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('King''s Faith', '-2013', '
Drama            ', '6.4', '
When eighteen-year-old Brendan King attempts to leave his turbulent gang life behind him, his past continues to threaten his new-found faith, family, and future.', '
    Director:
Nicholas DiBella
| 
    Stars:
Crawford Wilson, 
Lynn Whitfield, 
James McDaniel, 
Kayla Compton
', '744', '108', '$0.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Sunshine Makers', '-2015', '
Documentary, History            ', '7', '
The story of Nicholas Sand and Tim Scully, the unlikely duo at the heart of 1960s American drug counter-culture.', '
    Director:
Cosmo Feilding-Mellen
| 
    Stars:
Tim Scully, 
Nick Sand, 
Alice Einhorn, 
Billy Hitchcock
', '1,344', '101', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Alive Inside', '-2014', '
Documentary, News            ', '8.2', '
Dan Cohen, founder of the nonprofit organization Music & Memory, fights against a broken healthcare system to demonstrate music''s ability to combat memory loss and restore a deep sense of self to those suffering from it.', '
    Director:
Michael Rossato-Bennett
| 
    Stars:
Dan Cohen, 
Louise Dueno, 
Nell Hardie, 
Norman Hardie
', '3,058', '78', '$0.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Gimme the Loot', '-2012', '
Comedy, Crime, Drama            ', '6.6', '
When their latest work is buffed by a rival crew, two determined graffiti writers embark on an elaborate plan to bomb the ultimate location: the New York Mets'' Home Run Apple.', '
    Director:
Adam Leon
| 
    Stars:
Ty Hickson, 
Tashiana Washington, 
Joshua Rivera, 
ZoÃ« Lescaze
', '2,461', '79', '$0.10M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Kevin Hart: Let Me Explain', '-2013', '
Documentary, Comedy            ', '6.8', '
Filmed at a sold-out performance at Madison Square Garden, comedian Kevin Hart delivers material from his 2012 Let Me Explain concert tour.', '
    Directors:
Leslie Small, 
Tim Story
| 
    Stars:
Kevin Hart, 
Harry Ratchford, 
Will ''Spank'' Horton, 
Joey Wells
', '8,731', '75', '$32.24M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Overnighters', '-2014', '
Documentary, Drama            ', '7.4', '
Broken, desperate men chase their dreams and run from their demons in the North Dakota oil fields. A local Pastor risks everything to help them.', '
    Director:
Jesse Moss
| 
    Stars:
Jay Reinke, 
Andrea Reinke, 
Alan Mezo, 
Shelly Schultz
', '2,386', '102', '$0.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Video Games: The Movie', '-2014', '
Documentary, Animation, History            ', '6.1', '
Learn how video games are made, marketed, and consumed by looking back at gaming history and culture through the eyes of game developers, publishers, and consumers.', '
    Director:
Jeremy Snead
| 
    Stars:
Sean Astin, 
Al Alcorn, 
Peter Armstrong, 
Cliff Bleszinski
', '5,421', '101', '$0.02M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('War of the Worlds: Goliath', '-2012', '
Animation, Action, Adventure            ', '5.4', '
A retro-futuristic epic of steampunk battle set in 1914. It has been 15 years since the original H.G. Wells Martian invasion. Fearing another attack, the human race has prepared itself. ...                See full summaryÂ Â»
', '
    Director:
Joe Pearson
| 
    Stars:
Adam Baldwin, 
Beau Billingslea, 
Kim Buckingham, 
Jim Byrnes
', '1,134', '85', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Bad Kids', '-2016', '
Documentary            ', '7', '
A group of teachers at a Mojave Desert high school take an unconventional approach to improve the lives of their struggling students.', '
    Directors:
Keith Fulton, 
Louis Pepe
| 
    Stars:
Vonda Viland, 
Julia Alexander, 
Laura Ambrosius, 
Robert Bartz
', '612', '101', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Good Ol'' Freda', '-2013', '
Documentary, Biography, History            ', '7.3', '
A documentary in which Freda Kelly looks back at her career as lifelong secretary for The Beatles.', '
    Director:
Ryan White
| 
    Stars:
Freda Kelly, 
Paul McCartney, 
John Lennon, 
George Harrison
', '1,930', '86', '$0.14M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Music of Strangers', '-2015', '
Documentary, Music            ', '7.7', '
Cellist Yo-Yo Ma and other international artists of The Silk Road Project discuss their philosophies on music and culture.', '
    Director:
Morgan Neville
| 
    Stars:
Yo-Yo Ma, 
Kinan Azmeh, 
Kayhan Kalhor, 
Cristina Pato
', '696', '96', '$1.16M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Life''s a Breeze', '-2013', '
Comedy, Drama            ', '6.3', '
Tells the story of a family as they search for a lost fortune around the streets of Dublin.', '
    Director:
Lance Daly
| 
    Stars:
Kelly Thornton, 
Fionnula Flanagan, 
Pat Shortt, 
Eva Birthistle
', '1,103', '83', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Reconstruction of William Zero', '-2014', '
Drama, Mystery, Sci-Fi            ', '5.4', '
A geneticist wakes up from an accident with only fragments of his memory is forced to relearn who he is via his twin brother. But as he digs deeper, he discovers he might not be who he thought at all.', '
    Director:
Dan Bush
| 
    Stars:
Conal Byrne, 
Amy Seimetz, 
Scott Poythress, 
Lake Roberts
', '1,147', '98', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dayveon', '-2017', '
Drama            ', '6.3', '
In the wake of his older brother''s death, 13-year-old Dayveon spends the sweltering summer days roaming his rural Arkansas town. When he falls in with a local gang, he becomes drawn to the camaraderie and violence of their world.', '
    Director:
Amman Abbasi
| 
    Stars:
Devin Blackmon, 
Dontrell Bright, 
Lachion Buckingham, 
Kordell Johnson
', '501', '75', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Green is Gold', '-2016', '
Crime, Drama            ', '6', '
After a teenage boy''s father goes to prison, he is forced to live with his older brother who has a compromising trade.', '
    Director:
Ryon Baxter
| 
    Stars:
Derek W. Adam, 
Jimmy Baxter, 
Ryon Baxter, 
Billy Bodie
', '945', '81', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Final Year', '-2017', '
Documentary            ', '6.4', '
A chronicle of the Barack Obama administration''s foreign policy team and the events of Obama''s final year in office.', '
    Director:
Greg Barker
| 
    Stars:
Ben Rhodes, 
Samantha Power, 
John Kerry, 
Susan Rice
', '3,191', '89', '$0.19M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Pandora''s Promise', '-2013', '
Documentary            ', '7.4', '
The atomic bomb and meltdowns like Fukushima have made nuclear power synonymous with global disaster. But what if we''ve got nuclear power wrong?', '
    Director:
Robert Stone
| 
    Stars:
Stewart Brand, 
Richard Rhodes, 
Gwyneth Cravens, 
Mark Lynas
', '1,858', '87', '$0.07M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Revenge of the Electric Car', '-2011', '
Documentary            ', '7.2', '
Director Chris Paine takes his film crew behind the closed doors of Nissan, GM, and the Silicon Valley start-up Tesla Motors to chronicle the story of the global resurgence of electric cars.', '
    Director:
Chris Paine
| 
    Stars:
Tim Robbins, 
Dan Neil, 
Danny DeVito, 
Ray Wert
', '1,808', '90', '$0.15M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Being Elmo: A Puppeteer''s Journey', '-2011', '
Documentary            ', '7.6', '
The Muppet Elmo is one of the most beloved characters among children across the globe. Meet the unlikely man behind the puppet - the heart and soul of Elmo - Kevin Clash.', '
    Directors:
Constance Marks, 
Philip Shane
| 
    Stars:
Kevin Clash, 
Whoopi Goldberg, 
Frank Oz, 
Bill Barretta
', '6,897', '80', '$0.30M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Meet the Mormons', '-2014', '
Documentary            ', '6.8', '
Meet the Mormons examines the very diverse lives of six devout members of the Church of Jesus Christ of Latter-day Saints. Filmed on location and across the globe, Meet the Mormons takes ...                See full summaryÂ Â»
', '
    Director:
Blair Treu
| 
    Stars:
Jermaine Sullivan, 
Ken Niumatalolo, 
Carolina MuÃ±oz Marin, 
Bishnu Adhikari
', '1,973', '78', '$5.88M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Dear Mr. Watterson', '-2013', '
Documentary            ', '6.4', '
A documentary about the impact of the newspaper comic strip Calvin and Hobbes, created by Bill Watterson.', '
    Director:
Joel Allen Schroeder
| 
    Stars:
Berkeley Breathed, 
Jef Mallett, 
Stephan Pastis, 
Seth Green
', '1,834', '89', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('An Act of War', '-2015', '
Crime, Drama, Thriller            ', '5.2', '
A veteran tries to put his life back together, but is drawn to deeds that may be more dangerous than his tour of duty.', '
    Director:
Ryan M. Kennedy
| 
    Stars:
Russ Russo, 
Natasha Alam, 
Doug E. Doug, 
Joseph R. Gannascoli
', '1,422', '99', '$0.11M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Hell and Back Again', '-2011', '
Documentary, Action, History            ', '6.5', '
What does it mean to lead men in war? What does it mean to come home? Hell and Back Again is a cinematically revolutionary film that asks and answers these questions with a power and ...                See full summaryÂ Â»
', '
    Director:
Danfung Dennis
| 
    Stars:
Nathan Harris, 
Ashley Harris, 
The Marines of Echo Company, 
Christian Cabaniss
', '2,236', '88', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Waiting Room', '(III) (2012)', '
Documentary            ', '7.1', '
Go behind the doors of an American public hospital struggling to care for a community of largely uninsured patients.', '
    Director:
Peter Nicks
| 
    Star:
Sean Bennett
', '785', '81', '$0.24M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Blood Brother', '-2013', '
Documentary            ', '8.3', '
Documentarian visits best friend in India to see the mutual unconditional love that keeps his buddy bonded to a village hostel housing AIDS-afflicted children.', '
    Director:
Steve Hoover
| 
    Stars:
Rocky Braat, 
Steve Hoover, 
Anitha, 
Devi
', '1,618', '92', '$0.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('GMO OMG', '-2013', '
Documentary            ', '6.4', '
Filmmaker Jeremy Seifert journeys to Haiti, Paris, Norway, and even agri-giant Monsanto in search of answers about genetically modified organisms (GMOs) and how they affect our children, the health of our planet, and our freedom of choice.', '
    Director:
Jeremy Seifert
| 
    Stars:
Jeremy Seifert, 
Vandana Shiva, 
Cary Fowler, 
Dennis Kucinich
', '1,445', '90', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Spark: A Burning Man Story', '-2013', '
Documentary, Action, Biography            ', '6.2', '
Each year, 60,000 people from around the globe gather in a dusty windswept Nevada desert to build a temporary city, collaborating on large-scale art and partying for a week before burning a...                See full summaryÂ Â»
', '
    Directors:
Steve Brown, 
Jessie Deeter
| 
    Stars:
Harley K. Dubois, 
Marian Goodell, 
Larry Harvey, 
John Law
', '562', '90', '$0.12M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Comedians of Comedy', '-2005', '
Comedy, Documentary            ', '7.3', '
Follow four comedians as they tour the States.', '
    Director:
Michael Blieden
| 
    Stars:
Patton Oswalt, 
Brian Posehn, 
Maria Bamford, 
Zach Galifianakis
', '2,558', '103', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Sunrise', '(I) (2014)', '
Crime, Drama, Mystery            ', '6.3', '
Before sunrise, Joshi must catch the elusive figure that destroys the lives of children.', '
    Director:
Partho Sen-Gupta
| 
    Stars:
Adil Hussain, 
Tannishtha Chatterjee, 
Gulnaaz Ansari, 
Komal Gupta
', '279', '85', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Search for General Tso', '-2014', '
Documentary, Comedy, History            ', '6.9', '
Who was General Tso, and why are we eating his chicken? This feature documentary explores the origins and ubiquity of Chinese-American food through the story of an iconic sweet and spicy chicken dish.', '
    Director:
Ian Cheney
| 
    Stars:
Susan Carter, 
Ian Cheney, 
Philip Chiang, 
Andrew Coe
', '1,726', '71', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('The Garden', '(I) (2008)', '
Documentary            ', '7.3', '
From the ashes of the L.A. riots arose a lush, 14-acre community garden, the largest of its kind in the United States. Now bulldozers threaten its future.', '
    Director:
Scott Hamilton Kennedy
| 
    Stars:
Danny Glover, 
Daryl Hannah, 
Antonio Villaraigosa
', '716', '80', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Gore Vidal: The United States of Amnesia', '-2013', '
Documentary, Biography, History            ', '7.7', '
This is an unashamedly opinionated film. In Gore Vidal''s America, the political coup has already happened. The right have triumphed and the human values of the liberals have been consigned ...                See full summaryÂ Â»
', '
    Director:
Nicholas D. Wrathall
| 
    Stars:
Gore Vidal, 
Howard Auster, 
James Best, 
Karen Black
', '1,243', '83', '$0.13M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Maxed Out: Hard Times, Easy Credit and the Era of Predatory Lenders', '-2006', '
Documentary            ', '7.2', '
When Hurricane Katrina ravaged America''s Gulf Coast, it laid bare an uncomfortable reality-America is not only far from the world''s wealthiest nation; it is crumbling beneath a staggering ...                See full summaryÂ Â»
', '
    Director:
James D. Scurlock
| 
    Stars:
Beth Naef, 
Mike Hudson, 
Louis C.K., 
Catherine Brown
', '2,181', '90', '$0.06M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('After Tiller', '-2013', '
Documentary, Biography, Drama            ', '7.4', '
This thought provoking, sometimes troubling documentary examines the personal and ethical imperatives that drive abortion providers to continue in the face of often dangerous legal and personal harassment.', '
    Directors:
Martha Shane, 
Lana Wilson
| 
    Stars:
George Tiller, 
Warren Hern, 
Leroy Carhart, 
Susan Robinson
', '1,046', '85', '$0.07M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Red Trees', '-2017', '
Documentary            ', '6.4', '
Traces a family''s journey as one of only twelve Jewish families to survive the Nazi occupation of Prague during World War II.', '
    Director:
Marina Willer
| 
    Stars:
Alfred Willer, 
Tim Pigott-Smith, 
Flora Fanelli, 
Alfie Watson
', '136', '87', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Big Words', '-2013', '
Comedy, Drama            ', '5.9', '
Members of a once-promising hip-hop group, now in their late 30''s, struggle with regret, disappointment, and change on Election Night 2008.', '
    Director:
Neil Drumming
| 
    Stars:
Dorian Missick, 
Suzy Jane Hunt, 
Gbenga Akinnagbe, 
Darien Sills-Evans
', '277', '93', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Roving Mars', '-2006', '
Documentary, Short            ', '7.3', '
Through the eyes of two state-of-the-art rovers, and with NASA scientists at your side, you''ll see Mars in a way no one ever has before-direct from the surface of the amazing red planet.', '
    Director:
George Butler
| 
    Stars:
Paul Newman, 
Steve Squyres, 
Rob Manning, 
Charles Elachi
', '1,022', '40', '$10.40M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Making the Boys', '-2011', '
Documentary, Biography, Romance            ', '7.3', '
On the eve of the 40th anniversary of the Gay Rights Movement, the film explores the drama, struggle and enduring legacy of the first-ever gay play and subsequent Hollywood movie to ...                See full summaryÂ Â»
', '
    Director:
Crayton Robey
| 
    Stars:
Edward Albee, 
Joe Allen, 
Matt Baney, 
David Carter
', '579', '90', '$0.03M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Danny Says', '-2015', '
Documentary, Biography, History            ', '6.7', '
Danny Says is a documentary on the life and times of Danny Fields. Since 1966, Danny Fields has played a pivotal role in music and culture of the late 20th century: working for the Doors,...                See full summaryÂ Â»
', '
    Director:
Brendan Toller
| 
    Stars:
Mx Justin Vivian Bond, 
John Cale, 
Judy Collins, 
Alice Cooper
', '779', '105', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Facing Darkness', '-2017', '
Documentary, Drama            ', '7.3', '
A Christian relief organization is met with the challenge of fighting the Ebola epidemic in west Africa, through this enormous challenge their faith grew.', '
    Director:
Arthur Rasco
| 
    Stars:
Franklin Graham, 
Kent Brantly, 
Amber Brantly, 
Writebol Nancy
', '88', '93', '$0.56M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Louder Than a Bomb', '-2010', '
Documentary            ', '7.5', '
By turns hopeful and heartbreaking, Louder Than a Bomb follows the fortunes of four Chicago-area high school poetry teams as they prepare for and compete in the world''s largest youth slam.', '
    Directors:
Greg Jacobs, 
Jon Siskel
| 
    Stars:
Kevin Coval, 
Adam Gottlieb, 
Elizabeth Graf, 
Kevin Harris
', '373', '99', '$0.04M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Vidal Sassoon: The Movie', '-2010', '
Documentary            ', '6.5', '
Vidal Sassoon is more than just a hairdresser-he''s a rock star, an artist, a craftsman who changed the world with a pair of scissors. With the geometric, Bauhaus-inspired hairdos he ...                See full summaryÂ Â»
', '
    Director:
Craig Teper
| 
    Stars:
Beverly Adams, 
Elgin Charles, 
Grace Coddington, 
Michael Gordon
', '245', '90', '$0.09M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Men at Lunch', '-2012', '
Documentary, Mystery            ', '6.3', '
The story of Lunch atop a Skyscraper, the iconic photograph taken during the construction of 30 Rockefeller Plaza.', '
    Director:
SeÃ¡n Ã“ CualÃ¡in
| 
    Stars:
Fionnula Flanagan, 
Peter Quinn, 
Ric Burns, 
Christine Roussel
', '331', '75', '$0.00M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Decoding Deepak', '-2012', '
Documentary            ', '5.5', '
Deepak Chopra''s son, Gotham, spends a year traveling with this father in an attempt to resolve the spiritual icon he is to the world with the man known to his family.', '
    Director:
Gotham Chopra
| 
    Stars:
Deepak Chopra, 
Gotham Chopra
', '124', '83', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Theo Who Lived', '-2016', '
Documentary            ', '6.8', '
A documentary on American journalist Theo Padnos who was Kidnapped by Al-Qaeda in Syria.', '
    Director:
David Schisgall
| 
    Star:
Theo Padnos
', '111', '86', '$0.01M');
INSERT INTO movies (movies, year, genre, rating, one_line, stars, votes, runtime, gross) VALUES ('Southern Justice', '-2006', '
Action, Adventure, Thriller            ', '3.1', '
M.D. Selig''s feature thriller, SOUTHERN JUSTICE throws ex-military sniper Slim Manning into the gritty underworld of a small southern town where fundamentalist religion moves into the ...                See full summaryÂ Â»
', '
    Director:
M.D. Selig
| 
    Stars:
M.D. Selig, 
Michael Childers, 
Lisa Robert, 
Rico Cymone
', '126', '96', '$0.14M');

`

module.exports = moviesSeed