// Voici une série d'exercices pour pratiquer l'algo

// Si vous avez des questions ou si vous avez besoin d'aide supplémentaire, n'hésitez pas à consulter les ressources en ligne sur JavaScript ou à demander de l'aide à vos pairs.

//----------------------------------------------------------------------------------------------//
// EXERCICE 1

// Ajuste la fonction "multiply" qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6

export const multiply = (a, b) => a * b;

console.info("Exercice 1 :", multiply(15, 3));

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Ajuste la fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1

function getFirstElement(array) {
	return array[0];
}

console.info("Exercice 2 : ", getFirstElement([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Ajuste la fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]
function removeLastElement(array) {
	array.pop();
	return array;
}
console.info("Exercice 3 : ", removeLastElement([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Ajuste la fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6

function sumArray(array) {
	return array.reduce((sum, value) => sum + value, 0);
}

console.info("Exercice 4 : ", sumArray([5, 6, 7, 8, 12]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 5

//Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"

function reverseString(string) {
	//en vert c'est le nom de la fonction, les "()" permettent d'appeler les fonctions, le orange est le nom generique de la valeur que je vais utiliser.
	return string.split("").reverse().join(""); //return me permet de retourner la valeur generique que j'ai defini
}

console.info("Exercice 5 : ", reverseString("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 6

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3

export const getMax = (number) => {
	return Math.max(...number); // (...number) decomposition pour passer les elements d'un tableau "number", en tant qu'arguments
};

console.info("Exercice 6 : ", getMax([1, 2, 3, 5, 10, 8, 6]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 7

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1

export const getMin = (number) => {
	return Math.min(...number);
};

console.info("Exercice 7 : ", getMin([1, 2, 3, 0, -10, -5]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 8

// Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"

export const removeVowels = (string) => {
	return string.replace(/[aeiouAEIOU]/g, "");
};

console.info(
	"Exercice 8 : ",
	removeVowels("Hello, I love you won't you tell me your name"),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 9

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]

export const sortArray = (arrayNumber) => {
	return arrayNumber.sort();
};

console.info("Exercice 9 : ", sortArray([1, 3, 2]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 10

// Ajuste la fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

export const getStringRotations = (string) => {
	const rotations = [];
	const length = string.length;

	for (let i = 0; i < length; i++) {
		const rotation = string.slice(i) + string.slice(0, i);
		rotations.push(rotation);
	}
	return rotations;
};

console.info("Exercice 10 : ", getStringRotations("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 11

// Ajuste la fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]

export const incrementArray = (arrayNumber) => {
	return arrayNumber.map((number) => number + 1);
};

console.info("Exercice 11 : ", incrementArray([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 12

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]

export const getLengths = (numberLetter) => {
	return numberLetter.map((numberLetter) => numberLetter.length);
};

console.info("Exercice 12 : ", getLengths(["Hello", "World", "chacha"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 13

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]

export const getFirstLetters = (firstLetter) => {
	return firstLetter.map((firstLetter) => firstLetter.charAt(0));
};

console.info("Exercice 13 : ", getFirstLetters(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 14

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]

export const getLastLetters = (lastLetter) => {
	return lastLetter.map((lastLetter) =>
		lastLetter.charAt(lastLetter.length - 1),
	);
};

console.info("Exercice 14 : ", getLastLetters(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 15

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]

export const filterLongStrings = (arrayStrings) => {
	return arrayStrings.filter((str) => str.length <= 5);
};
// Pas fini encore!!!!!!!!!!!!!!!!
console.info(
	"Exercice 15 : ",
	filterLongStrings(["Hello", "World", "Test", "Salut", "Yo"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 16

// Ajuste la fonction qui prend une chaîne de caractères en format snake_case et doit retourner une nouvelle chaîne de caractères contenant les mêmes mots, mais sans les underscores.
// Exemple : "Bonjour_c'est_papy" => "bonjour c'est papy"

export const snake_case = (replaceString) => {
	return replaceString.replace(/_/g, " ");
};

console.info("Exercice 16 : ", snake_case("Bonjour_c'est_papy"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 17

// Ajuste la fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]

export const mergeArrays = (array1, array2) => {
	return array1.concat(array2);
};

console.info(
	"Exercice 17 : ",
	mergeArrays(["Hello", "World"], ["Test", "Example"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 18

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les strings qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"].

export const filterStringsWithE = (arrayString) => {
	return arrayString.filter((string) => string.includes("e"));
};
console.info(
	"Exercice 18 : ",
	filterStringsWithE(["Poulet", "Chat", "Chien", "Cheval"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 19

// Ajuste la fonction qui prend en paramètre un tableau de nombres et qui doit retourner tous les nombres qui sont pairs par ordre croissant.
// Exemple : [2, 9, 6, 5, 6] => [2, 6, 6].

export const filterAndSortEvenNumbers = (arrayNumber) => {
	const eventNumber = arrayNumber.filter((number) => number % 2 === 0);
	return eventNumber.sort((a, b) => a - b);
};

console.info(
	"Exercice 19 : ",
	filterAndSortEvenNumbers([2, 9, 6, 5, 20, 16, 6]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 20

// Ajuste la fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// Exemple :
// findShort("Prachett is the best author in the world") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

export const findShort = (stringLength) => {
	const word = stringLength.split(" ");
	let shortWord = word[0].length;
	for (let i = 1; i < word.length; i++) {
		if (word[i].length < shortWord) {
			shortWord = word[i].length;
		}
	}
	return shortWord;
};

console.info(
	"Exercice 20 : ",
	findShort("Prachett is the best author in the world"),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 21

// Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre.
// Deux chaînes sont des anagrammes si elles contiennent les mêmes caractères, quel que soit l'ordre.
// Exemple : anagram("listen", "silent") // true

export const anagram = (string1, string2) => {
	const str1 = string1.split("").sort().join("");
	const str2 = string2.split("").sort().join("");
	if (str1 === str2) {
		return true;
	}
};

console.info("Exercice 21 : ", anagram("listen", "silent"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 22

// Écrivez une fonction qui enlève les doubles lettres d'une chaîne donnée.
// Exemple : removeDoubleLetters("google") // "gogle"

// export const removeDoubleLetters = () => {}

// console.info("Exercice 22 : ", removeDoubleLetters("google"));

//----------------------------------------------------------------------------------------------//

// EXERCICE 23
// Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple : createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"

// export const createPhoneNumber = () => {
//    };

// console.info(
// 	"Exercice 23 : ",
// 	createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
// );

//----------------------------------------------------------------------------------------------//
// EXERCICE 24

// Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres et qui renvoie la lettre manquante de la série.
// Exemple : findMissingLetter(["a", "b", "c", "d", "f"]) // "e"

// export const findMissingLetter = () => {

// };

// console.info("Exercice 24 : ", findMissingLetter(["a", "b", "c", "d", "f"]));

//----------------------------------------------------------------------------------------------//

// EXERCICE 25
// Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple : sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]

export const sortString = (string) => {
	return string.sort();
};

console.info(
	"Exercice 25 : ",
	sortString(["Banana", "xyplophone", "Orange", "Apple", "Mango"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 26

// Ajuste la fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// Exemple : otherAngle(30, 60) // 90
// Pour trouver le troisième angle, soustrayez la somme des deux angles donnés à 180 degrés.

// export const otherAngle = () => {};

// console.info("Exercice 26 : ", otherAngle(30, 60));

//----------------------------------------------------------------------------------------------//
// EXERCICE 27

// Ajuste la fonction qui peut déterminer si une année est une année bissextile ou non.
// Une année bissextile est divisible par 4, sauf si elle est divisible par 100, à moins qu'elle ne soit également divisible par 400.
// Exemple : isLeapYear(2020) // true

// export const isLeapYear = () => {

//   };

// console.info("Exercice 27 : ", isLeapYear(2022));

//----------------------------------------------------------------------------------------------//
// EXERCICE 28

// Ajuste la fonction qui prend en entrée un tableau contenant des noms d'animaux. La fonction doit renvoyer un nouveau tableau composé de deux sous-tableaux :
// Le premier sous-tableau doit inclure les noms des animaux domestiques.
// Le deuxième sous-tableau doit inclure les noms des animaux sauvages.
// Exemple : sortAnimals(animals) // [["Cat", "Dog"], ["Eagle", "Monkey"]]

// export const sortAnimals = () => {

//   };

//  console.info("Exercice 28 : ", sortAnimals(["Cat", "Dog", "Eagle", "Monkey"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 29

// Complète la fonction decodeMessage() qui doit décoder un message chiffré utilisant le chiffre de César avec un décalage de 16 positions vers la droite dans l'alphabet. Le message sera fourni en majuscules et peut contenir des espaces ou d'autres caractères spéciaux qui doivent rester inchangés.
// Exemple : Si on appelle decodeMessage("XUBBE MEHBT"), la fonction doit renvoyer "HELLO WORLD".
// https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

// export const decodeMessage = () => {

// };
// console.info("Exercice 29 :", decodeMessage("XUBBE MEHBT"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 30

// Ajuste la fonction qui renverra notre score à partir des résultats des matchs.
// Exemple : calculateScore(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]) // 13
// Utilisez une boucle pour parcourir le tableau et une condition pour déterminer les points à ajouter.

// export const calculateScore = () => {

// };

// console.info(
// 	"Exercice 30 : ",
// 	calculateScore([
// 		"1:0",
// 		"2:0",
// 		"3:0",
// 		"4:4",
// 		"2:2",
// 		"3:3",
// 		"1:4",
// 		"2:3",
// 		"2:4",
// 		"3:3",
// 	]),
// );

/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/
function countLetters(givenString, letter) {
	// Your code here !
	let count = 0;
	let searchLetter = givenString.indexOf(letter);
	while (searchLetter !== -1) {
		count++;
		searchLetter = givenString.indexOf(letter, searchLetter + letter.length);
	}
	return count;
}
console.info("Exercice Bonus : ", countLetters("aaaaabbcc", "a"));
export default countLetters;
