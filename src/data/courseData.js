const courseData = [{"kurskod":"TNA001","namn":"Matematisk grundkurs","forkunskaper":"","litteratur":"Matematisk analys, en variabel","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"1"},
{"kurskod":"TND012","namn":"Programmering grk","forkunskaper":"","litteratur":"Programming: Principles and Practice Using C++#C++ direkt#C++ Primer ","om":null,"huvudomrade":"datateknik","termin":"1"},
{"kurskod":"TNM088","namn":"Digitala medier","forkunskaper":"","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"1"},
{"kurskod":"TNA002","namn":"Linjär algebra","forkunskaper":"TNA001","litteratur":"Linjär algebra TNA002","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"1"},
{"kurskod":"TNMK30","namn":"Elektronisk publicering","forkunskaper":"TND012","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"1"},
{"kurskod":"TNA005","namn":"Tillämpad matematik i teknik och naturvetenskap","forkunskaper":"TNA001, TNA002","litteratur":"MATLAB-beräkningar inom teknik och naturvetenskap : med symbolisk matematik#Matematisk analys, en variabel#Linjär algebra TNA002","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"2"},
{"kurskod":"TNA003","namn":"Analys I","forkunskaper":"TNA001","litteratur":"Matematisk analys, en variabel","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"2"},
{"kurskod":"TND002","namn":"Objektorienterad programmering","forkunskaper":"TND012","litteratur":"","om":null,"huvudomrade":"datateknik","termin":"2"},
{"kurskod":"TNA004","namn":"Analys II","forkunskaper":"TNA003","litteratur":"Matematisk analys, en variabel","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"2"},
{"kurskod":"TNM046","namn":"Datorgrafik","forkunskaper":"TND012, TNA002, TND002","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"2"},
{"kurskod":"TNA006","namn":"Analys III","forkunskaper":"TNA004, TNA003, TNA001","litteratur":"Matematisk analys : flera variabler#Problemsamling för kursen TNA006","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"3"},
{"kurskod":"TNE043","namn":"Mekanik och vågfysik","forkunskaper":"TNA002, TNA003, TNA004","litteratur":"Principles of physics#Experimentell problemlösning","om":null,"huvudomrade":"teknisk fysik, fysik","termin":"3"},
{"kurskod":"TNM040","namn":"Kommunikation och användargränssnitt","forkunskaper":"TNMK30","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"3"},
{"kurskod":"TNA007","namn":"Vektoranalys","forkunskaper":"TNA002, TNA003, TNA004, TNA006","litteratur":"Vektoranalys","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"3"},
{"kurskod":"TNG033","namn":"Programmering i C++","forkunskaper":"TND012, TND002","litteratur":"C++ direkt#Professional C++#C++ Primer#Matematisk analys, en variabel","om":null,"huvudomrade":"datateknik","termin":"3"},
{"kurskod":"TNG032","namn":"Tillämpad transformteori","forkunskaper":"TNA002, TNA003, TNA004","litteratur":"Fourier and Laplace Transforms","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"4"},
{"kurskod":"TNM059","namn":"Grafisk teknik","forkunskaper":"TNA002","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"4"},
{"kurskod":"TNM061","namn":"3-D Datorgrafik","forkunskaper":"TNM046","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"4"},
{"kurskod":"TNG006","namn":"Matematisk statistik","forkunskaper":"TNA006","litteratur":"Sannolikhetsteori och statistikteori med tillämpningar#Problemsamling för kursen TNG006#Formelsamling i matematisk statistik","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"4"},
{"kurskod":"TNG015","namn":"Signaler och system","forkunskaper":"TNA002, TNG032","litteratur":"Fundamentals of Signals and Systems Using the Web and Matlab","om":null,"huvudomrade":"elektroteknik","termin":"4"},
{"kurskod":"TFYA65","namn":"Ljudfysik","forkunskaper":"TNE043","litteratur":"Master Handbook of Acoustics#Principles of Digital Audio","om":null,"huvudomrade":"teknisk fysik, medieteknik","termin":"5"},
{"kurskod":"TNG028","namn":"Reglerteknik","forkunskaper":"TNG032, TNG015","litteratur":"Reglerteknik - Grundläggande teori","om":null,"huvudomrade":"elektroteknik","termin":"5"},
{"kurskod":"TNM093","namn":"Tillämpad visualisering och virtuell verklighet","forkunskaper":"TNA002, TNA003, TNA004, TNG033, TND002, TNM061","litteratur":"The Visualization Handbook#Essential Virtual Reality fast#Information Visualization: Design for Interaction","om":null,"huvudomrade":"medieteknik","termin":"5"},
{"kurskod":"TNG022","namn":"Modellbygge och simulering","forkunskaper":"TNG006, TNG028","litteratur":"Modellbygge och simulering#Modellbygge och simulering, Övningsbok","om":null,"huvudomrade":"elektroteknik, medieteknik","termin":"5"},
{"kurskod":"TNM087","namn":"Bildbehandling och bildanalys","forkunskaper":"TNA002, TNA006, TNG015, TNA005, TNM059, TNG032","litteratur":"Digital Image Processing","om":null,"huvudomrade":"medieteknik","termin":"5"},
{"kurskod":"TNM085","namn":"Modelleringsprojekt","forkunskaper":"TNG022","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"6"},
{"kurskod":"TND004","namn":"Datastrukturer","forkunskaper":"TNG033","litteratur":"Data Structure and Algorithm Analysis in C++","om":null,"huvudomrade":"datateknik, medieteknik","termin":"6"},
{"kurskod":"TEIO87","namn":"Projektledning","forkunskaper":"","litteratur":"Psykologi för projektledare","om":null,"huvudomrade":"industriell ekonomi","termin":"7"},
{"kurskod":"TGTU94","namn":"Teknik och etik","forkunskaper":"","litteratur":"","om":null,"huvudomrade":"","termin":"7"},
{"kurskod":"TNCG15","namn":"Advanced Global Illumination and Rendering","forkunskaper":"TNM046, TNM061","litteratur":"Advanced Global Illumination#Physically Based Rendering: From Theory to Implementation","om":null,"huvudomrade":"datavetenskap, datateknik, medieteknik","termin":"7,9"},
{"kurskod":"TNM031","namn":"Nätverksprogrammering och säkerhet","forkunskaper":"TNMK30, TND004","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"7,9"},
{"kurskod":"TNM067","namn":"Vetenskaplig visualisering","forkunskaper":"TNM046, TNE043","litteratur":"Visualization Analysis and Design#The Visualization Toolkit, An Object-Oriented Approach To 3D Graphics#Data Visualization: Principles and Practice","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap, medieteknik","termin":"7,9"},
{"kurskod":"TNM103","namn":"Ljudteknik","forkunskaper":"TNG015, TNG032, TFYA65, TND012","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"7,9"},
{"kurskod":"TNM108","namn":"Maskininlärning för sociala medier","forkunskaper":"TNG006, TNA003, TNA004, TNA006, TNA002, TND012","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"7"},
{"kurskod":"TEAE11","namn":"Immaterialrätt","forkunskaper":"","litteratur":"","om":null,"huvudomrade":"","termin":"7"},
{"kurskod":"TNA010","namn":"Matrismetoder för AI","forkunskaper":"TNA002, TNA006, TNG006, TNA005","litteratur":"Matrix Methods in Data Mining and Pattern Recognition","om":null,"huvudomrade":"matematik, tillämpad matematik","termin":"7"},
{"kurskod":"TNM034","namn":"Avancerad bildbehandling","forkunskaper":"TNM087, TNA005","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"7"},
{"kurskod":"TNM069","namn":"Grafisk design och kommunikation","forkunskaper":"TNM059, TNM040","litteratur":"Effektiv visuell kommunikation","om":null,"huvudomrade":"medieteknik","termin":"7"},
{"kurskod":"TNM086","namn":"VR-teknik","forkunskaper":"TNM061, TNA002, TNG033, TNM046","litteratur":"","om":null,"huvudomrade":"informationsteknologi, medieteknik, datateknik","termin":"7,9"},
{"kurskod":"TNM091","namn":"Medieproduktion för immersiva miljöer","forkunskaper":"TNG033, TNM061, TFYA65","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"7,9"},
{"kurskod":"TEIE53","namn":"Industriell ekonomi","forkunskaper":"TNA001","litteratur":"Företagsekonomi - från begrepp till beslut","om":null,"huvudomrade":"industriell ekonomi","termin":"8"},
{"kurskod":"TNKA10","namn":"Retorik i tal, text och bild","forkunskaper":"","litteratur":"","om":null,"huvudomrade":"grafisk design och kommunikation","termin":"8"},
{"kurskod":"TNM048","namn":"Informationsvisualisering","forkunskaper":"TND012, TNM046, TNMK30","litteratur":"Information Visualization: Design for Interaction","om":null,"huvudomrade":"datateknik, medieteknik","termin":"8"},
{"kurskod":"TNM097","namn":"Bildreproduktion och bildkvalitet","forkunskaper":"TNM059, TNM087, TNA005","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"8"},
{"kurskod":"TNM100","namn":"Strukturerade metoder för användarupplevelse (UX)","forkunskaper":"TNM040","litteratur":"Interaktionsdesign och UX – om att skapa en god användarupplevelse","om":null,"huvudomrade":"datateknik, medieteknik","termin":"8"},
{"kurskod":"TSBK35","namn":"Kompression av ljud och bild","forkunskaper":"TNG006, TNG015","litteratur":"Introduction to Data Compression","om":null,"huvudomrade":"datateknik, elektroteknik, medieteknik","termin":"8"},
{"kurskod":"TDDD27","namn":"Avancerad webbprogrammering","forkunskaper":"TND012, TNG033, TNMK30, TNM040","litteratur":"","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap","termin":"8"},
{"kurskod":"TNM079","namn":"Modellering och animering","forkunskaper":"TNM046, TNM061, TNA002, TNA006, TND012","litteratur":"","om":null,"huvudomrade":"datateknik, datavetenskap, medieteknik","termin":"8"},
{"kurskod":"TNM096","namn":"Artificiell intelligens - principer och tekniker","forkunskaper":"TND012, TND004","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"8"},
{"kurskod":"TNM098","namn":"Avancerad visuell dataanalys","forkunskaper":"TND012, TNM046, TNA006, TNM048","litteratur":"Principles of Data Mining","om":null,"huvudomrade":"medieteknik","termin":"8"},
{"kurskod":"TDDE45","namn":"Avancerad programvarudesign","forkunskaper":"TNG033, TND002, TND004","litteratur":"Head First Design Patterns#Design Patterns: Elements of Object-Oriented Software","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap","termin":"9"},
{"kurskod":"TNM089","namn":"Bildteknik","forkunskaper":"TNA002, TNG006, TNG032, TNM087, TNA005","litteratur":"Digital Color Imaging Handbook#Algorithms and Applications","om":null,"huvudomrade":"medieteknik","termin":"9"},
{"kurskod":"TNM095","namn":"Artificiell intelligens för interaktiv media","forkunskaper":"","litteratur":"","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap, medieteknik","termin":"9"},
{"kurskod":"TSBK03","namn":"Teknik för avancerade datorspel","forkunskaper":"TNG033, TNM046, TNA002, TNE043","litteratur":"So how can we make them scream?","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap, medieteknik","termin":"9"},
{"kurskod":"TNM107","namn":"Vetenskaplig metod","forkunskaper":"","litteratur":"","om":null,"huvudomrade":"datateknik, medieteknik","termin":"9"},
{"kurskod":"TDDC73","namn":"Interaktionsprogrammering","forkunskaper":"TND012, TNG033, TND002","litteratur":"Designing Interfaces","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap","termin":"9"},
{"kurskod":"TDDD56","namn":"Multicore- och GPU-Programmering","forkunskaper":"TND004, TND012","litteratur":"","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap, medieteknik","termin":"9"},
{"kurskod":"TNM084","namn":"Procedurella metoder för bilder","forkunskaper":"TNA002, TNA003, TNA004, TNA006, TNM046, TND012, TND002, TND004, TNM087","litteratur":"Texturing and Modeling: a Procedural Approach","om":null,"huvudomrade":"medieteknik","termin":"7,9"},
{"kurskod":"TDDD23","namn":"Design och programmering av datorspel","forkunskaper":"TND002, TND012","litteratur":"","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap, programmering","termin":"9"},
{"kurskod":"TDDD89","namn":"Vetenskaplig metod","forkunskaper":"","litteratur":"","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap","termin":"9"},
{"kurskod":"TDDE02","namn":"Mjukvarutekniskt entreprenörskap","forkunskaper":"TNG033, TNM046, TNG015, TNM040, TNM031, TNM096","litteratur":"","om":null,"huvudomrade":"informationsteknologi, datateknik, datavetenskap","termin":"9"},
{"kurskod":"TNCG13","namn":"SFX - Tricks of the trade","forkunskaper":"TNCG15","litteratur":"","om":null,"huvudomrade":"medieteknik","termin":"9"}];

function getObjectFromCode(code){
    const arrayOfObjects = courseData.map(d => {
        if (d.kurskod === code){
            return d;
        }
        return undefined;
    });
    // Make array into single object.
    const result = arrayOfObjects.filter(d => {
        return d !== undefined;
    })
  
    return result[0];

}

export default courseData;
export {getObjectFromCode};