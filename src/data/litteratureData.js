import courseData from "./courseData";

const litteratureData = [{"titel":"Matematisk analys, en variabel","upplaga":2,"ar":2011,"forlag":"Libris","forfattare":"Göran Forsling, Mats Neymark","typ":"Bokens","url":"https://liber.se/covers/XL/4710023o.jpg","kurskoder":"TNA001"},
{"titel":"Programming: Principles and Practice Using C++","upplaga":2,"ar":2014,"forlag":"Addison-Wesley Educational Publishers Inc","forfattare":"Bjarne Stroustrup","typ":"Bokens","url":"https://s1.adlibris.com/images/5943691/programming.jpg","kurskoder":"TND012"},
{"titel":"C++ direkt","upplaga":3,"ar":2011,"forlag":"Studentlitteratur","forfattare":"Jan Skansholm","typ":"Bokens","url":"https://s2.adlibris.com/images/305332/c-direkt.jpg","kurskoder":"TND012"},
{"titel":"C++ Primer","upplaga":5,"ar":2013,"forlag":"Addison-Wesley Educational Publishers Inc","forfattare":"Stanley B. Lippman, Josée Lajoie, Barbara E. Moo","typ":"Bokens","url":"https://s1.adlibris.com/images/801794/c-primer.jpg","kurskoder":"TND012"},
{"titel":"Matematisk analys, en variabel","upplaga":2,"ar":2011,"forlag":"Libris","forfattare":"Göran Forsling, Mats Neymark","typ":"Bokens","url":"https://liber.se/covers/XL/4710023o.jpg","kurskoder":"TNA003"},
{"titel":"Matematisk analys, en variabel","upplaga":2,"ar":2011,"forlag":"Libris","forfattare":"Göran Forsling, Mats Neymark","typ":"Bokens","url":"https://liber.se/covers/XL/4710023o.jpg","kurskoder":"TNA005"},
{"titel":"MATLAB-beräkningar inom teknik och naturvetenskap : med symbolisk matematik","upplaga":4,"ar":2020,"forlag":"Studentlitteratur AB","forfattare":"Per Jönsson","typ":"Bokens","url":"https://s2.adlibris.com/images/58070330/matlab-berakningar-inom-teknik-och-naturvetenskap-med-symbolisk-matematik.jpg","kurskoder":"TNA005"},
{"titel":"Linjär algebra TNA002","upplaga":"okänd","ar":"okänd","forlag":"okänd","forfattare":"Baravdish, George","typ":"Kompendiets","url":"okänd","kurskoder":"TNA002"},
{"titel":"Linjär algebra TNA002","upplaga":"okänd","ar":"okänd","forlag":"okänd","forfattare":"Baravdish, George","typ":"Kompendiets","url":"okänd","kurskoder":"TNA005"},
{"titel":"Matematisk analys, en variabel","upplaga":2,"ar":2011,"forlag":"Libris","forfattare":"Göran Forsling, Mats Neymark","typ":"Bokens","url":"https://liber.se/covers/XL/4710023o.jpg","kurskoder":"TNA004"},
{"titel":"Fundamentals of Computer Graphics","upplaga":5,"ar":2021,"forlag":"CRC Press","forfattare":"Steve Marschner, Peter Shirley","typ":"Bokens","url":"https://s1.adlibris.com/images/60104241/fundamentals-of-computer-graphics.jpg","kurskoder":"TNM046"},
{"titel":"Matematisk analys : flera variabler","upplaga":2,"ar":2017,"forlag":"Liber","forfattare":"Neymark, Mats","typ":"Bokens","url":"https://s2.adlibris.com/images/31084477/matematisk-analys-flera-variabler.jpg","kurskoder":"TNA006"},
{"titel":"Problemsamling för kursen TNA006","upplaga":"okänd","ar":"okänd","forlag":"okänd","forfattare":"okänd","typ":"Kompendiets","url":"okänd","kurskoder":"TNA006"},
{"titel":"Principles of physics","upplaga":10,"ar":2014,"forlag":"John Wiley & Sons Inc","forfattare":"Walker, Jearl, Halliday, David, Resnick, Robert","typ":"Bokens","url":"https://image.bokus.com/images/9781118230749_200x_principles-of-physics_haftad","kurskoder":"TNE043"},
{"titel":"Experimentell problemlösning","upplaga":"okänd","ar":2013,"forlag":"okänd","forfattare":"B Sandell","typ":"Kompendiets","url":"okänd","kurskoder":"TNE043"},
{"titel":"Vektoranalys","upplaga":3,"ar":2000,"forlag":"THS AB","forfattare":"Anders Ramgard","typ":"Bokens","url":"https://img.yumpu.com/24042018/1/500x640/vektor-analys-3e-upplagan-anders-ramgard.jpg","kurskoder":"TNA007"},
//{"titel":"Matematisk analys, en variabel","upplaga":2,"ar":2011,"forlag":"Libris","forfattare":"Göran Forsling, Mats Neymark","typ":"Bokens","url":"https://liber.se/covers/XL/4710023o.jpg","kurskoder":"TNG033"},
{"titel":"C++ direkt","upplaga":3,"ar":2011,"forlag":"Studentlitteratur","forfattare":"Jan Skansholm","typ":"Bokens","url":"https://s2.adlibris.com/images/305332/c-direkt.jpg","kurskoder":"TNG033"},
{"titel":"Professional C++","upplaga":4,"ar":2018,"forlag":"Wiley-Blackwell","forfattare":"Gregoire Marc","typ":"Bokens","url":"https://media.wiley.com/product_data/coverImage300/06/11194213/1119421306.jpg","kurskoder":"TNG033"},
{"titel":"C++ Primer","upplaga":5,"ar":2013,"forlag":"Addison-Wesley Educational Publishers Inc","forfattare":"Stanley B. Lippman, Josée Lajoie, Barbara E. Moo","typ":"Bokens","url":"https://s1.adlibris.com/images/801794/c-primer.jpg","kurskoder":"TNG033"},
{"titel":"Fourier and Laplace Transforms","upplaga":1,"ar":2003,"forlag":"Cambridge University Press","forfattare":"Beerends m.fl.","typ":"Bokens","url":"https://s1.adlibris.com/images/8919064/fourier-and-laplace-transforms.jpg","kurskoder":"TNG032"},
{"titel":"Sannolikhetsteori och statistikteori med tillämpningar","upplaga":7,"ar":2017,"forlag":"Studentlitteratur AB","forfattare":"Gunnar Blom m. fl","typ":"Bokens","url":"https://s1.adlibris.com/images/35835814/sannolikhetsteori-och-statistikteori-med-tillampningar---bok-c.jpg","kurskoder":"TNG006"},
{"titel":"Problemsamling för kursen TNG006","upplaga":"okänd","ar":"okänd","forlag":"okänd","forfattare":"okänd","typ":"Kompendiets","url":"okänd","kurskoder":"TNG006"},
{"titel":"Formelsamling i matematisk statistik","upplaga":"okänd","ar":"okänd","forlag":"okänd","forfattare":"okänd","typ":"Kompendiets","url":"okänd","kurskoder":"TNG006"},
{"titel":"Fundamentals of Signals and Systems Using the Web and Matlab","upplaga":3,"ar":2006,"forlag":"Pearson Education","forfattare":"Edward W. Kamen, Bonnie S. Heck","typ":"Bokens","url":"https://book-info.studentapan.live/image/9780131687370-fundamentals-of-signals-and-systems-using-the-web-and-matlab.jpg","kurskoder":"TNG015"},
{"titel":"Master Handbook of Acoustics","upplaga":6,"ar":2015,"forlag":"McGraw-Hill Professional","forfattare":"Alton F. Everest","typ":"Bokens","url":"https://s2.adlibris.com/images/13693875/master-handbook-of-acoustics-sixth-edition.jpg","kurskoder":"TFYA65"},
{"titel":"Principles of Digital Audio","upplaga":6,"ar":2010,"forlag":"TAB Books Inc","forfattare":"Ken Pohlmann","typ":"Bokens","url":"https://s2.adlibris.com/images/2605565/principles-of-digital-audio-sixth-edition.jpg","kurskoder":"TFYA65"},
{"titel":"Reglerteknik - Grundläggande teori","upplaga":4,"ar":2006,"forlag":"Studentlitteratur AB","forfattare":"T. Glad och L. Ljung","typ":"Bokens","url":"https://s1.adlibris.com/images/900370/reglerteknik-grundlaggande-teori.jpg","kurskoder":"TNG028"},
{"titel":"The Visualization Handbook","upplaga":1,"ar":2011,"forlag":"Elsevier Science","forfattare":"Charles D Hansen, Chris R Johnson","typ":"Bokens","url":"https://image.bokus.com/images/9780080481647_200x_visualization-handbook_e-bok","kurskoder":"TNM093"},
{"titel":"Essential Virtual Reality fast","upplaga":1,"ar":1998,"forlag":"Springer London Ltd","forfattare":"John Vince","typ":"Bokens","url":"https://s2.adlibris.com/images/3752817/essential-virtual-reality-fast.jpg","kurskoder":"TNM093"},
{"titel":"Information Visualization: Design for Interaction","upplaga":2,"ar":2007,"forlag":"Pearson","forfattare":"Robert Spence","typ":"Bokens","url":"https://images-na.ssl-images-amazon.com/images/I/51BGjvzP60L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg","kurskoder":"TNM093"},
{"titel":"Modellbygge och simulering","upplaga":2,"ar":2003,"forlag":"Studentlitteratur AB","forfattare":"L. Ljung och T. Glad","typ":"Bokens","url":"https://s2.adlibris.com/images/341873/modellbygge-och-simulering.jpg","kurskoder":"TNG022"},
{"titel":"Modellbygge och simulering, Övningsbok","upplaga":2,"ar":2007,"forlag":"Studentlitteratur AB","forfattare":"L. Ljung och T. Glad","typ":"Bokens","url":"https://s1.adlibris.com/images/1489211/modellbygge-och-simulering-ovningsbok.jpg","kurskoder":"TNG022"},
{"titel":"Digital Image Processing","upplaga":4,"ar":2017,"forlag":"Pearson Education Limited","forfattare":"Gonzalez, Woods","typ":"Bokens","url":"https://s2.adlibris.com/images/30958049/digital-image-processing-global-edition.jpg","kurskoder":"TNM087"},
{"titel":"Software Engineering 10 Pearson","upplaga":10,"ar":2016,"forlag":"Pearson","forfattare":"Ian Sommerville","typ":"Bokens","url":"https://s1.adlibris.com/images/16179656/software-engineering-global-edition.jpg","kurskoder":"TNM094"},
{"titel":"Essentials of software engineering","upplaga":3,"ar":2014,"forlag":"Jones & Bartlett Learning","forfattare":"Tsui, Frank F., Karam, Orlando, Bernal, Barbara","typ":"Bokens","url":"https://image.bokus.com/images/9781449691998_200x_essentials-of-software-engineering_haftad","kurskoder":"TNM094"},
{"titel":"Data Structure and Algorithm Analysis in C++","upplaga":4,"ar":2013,"forlag":"Pearson","forfattare":"Mark Allen Weiss","typ":"Bokens","url":"https://s1.adlibris.com/images/5729230/data-structures-and-algorithm-analysis-in-c.jpg","kurskoder":"TND004"},
{"titel":"Psykologi för projektledare","upplaga":1,"ar":2015,"forlag":"Sanoma Utbildning","forfattare":"Andersson, Leif E.","typ":"Bokens","url":"https://s1.adlibris.com/images/15870811/psykologi-for-projektledare.jpg","kurskoder":"TEIO87"},
{"titel":"Advanced Global Illumination","upplaga":2,"ar":2006,"forlag":"A K Peters/CRC Press","forfattare":"Philip Dutre","typ":"Bokens","url":"https://images-na.ssl-images-amazon.com/images/I/51XM9Cs0hEL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg","kurskoder":"TNCG15"},
{"titel":"Physically Based Rendering: From Theory to Implementation","upplaga":3,"ar":2016,"forlag":"Morgan Kaufmann","forfattare":"Matt Pharr","typ":"Bokens","url":"https://images-na.ssl-images-amazon.com/images/I/51zeQMHETlL._SX401_BO1,204,203,200_.jpg","kurskoder":"TNCG15"},
{"titel":"Visualization Analysis and Design","upplaga":1,"ar":2014,"forlag":"A K Peters","forfattare":"Munzner T.","typ":"Bokens","url":"https://s1.adlibris.com/images/12336951/visualization-analysis-and-design.jpg","kurskoder":"TNM067"},
{"titel":"Data Visualization: Principles and Practice","upplaga":2,"ar":2008,"forlag":"A K Peters","forfattare":"Telea, A. C.","typ":"Bokens","url":"https://s1.adlibris.com/images/6631182/data-visualization.jpg","kurskoder":"TNM067"},
{"titel":"Matrix Methods in Data Mining and Pattern Recognition","upplaga":2,"ar":2019,"forlag":"Society for Industrial & Applied Mathematics,U.S.","forfattare":"Lars Eldén","typ":"Bokens","url":"https://img.fruugo.com/product/0/13/117149130_max.jpg","kurskoder":"TNA010"},
{"titel":"Texturing and Modeling: a Procedural Approach","upplaga":3,"ar":2002,"forlag":"Morgan Kaufmann","forfattare":"David S. Ebert m.fl","typ":"Bokens","url":"https://images-na.ssl-images-amazon.com/images/I/51XMRWJRi3L._SX387_BO1,204,203,200_.jpg","kurskoder":"TNM084"},
{"titel":"Effektiv visuell kommunikation","upplaga":12,"ar":2021,"forlag":"Carlsson","forfattare":"Bo Bergström","typ":"Bokens","url":"https://s1.adlibris.com/images/60186373/effektiv-visuell-kommunikation-om-nyheter-reklam-information-och-identitet-i-var-visuella-kultur.jpg","kurskoder":"TNM110"},
{"titel":"Företagsekonomi - från begrepp till beslut","upplaga":6,"ar":2011,"forlag":"Sanoma Utbildning","forfattare":"Holmström, N","typ":"Bokens","url":"https://book-info.studentapan.live/image/9789152305942-foretagsekonomi-fran-begrepp-t-beslut-faktabok.jpg","kurskoder":"TEIE53"},
{"titel":"Information Visualization: Design for Interaction","upplaga":2,"ar":2007,"forlag":"Pearson","forfattare":"Robert Spence","typ":"Bokens","url":"https://images-na.ssl-images-amazon.com/images/I/51BGjvzP60L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg","kurskoder":"TNM048"},
{"titel":"Interaktionsdesign och UX – om att skapa en god användarupplevelse","upplaga":2,"ar":2020,"forlag":"Studentlitteratur AB","forfattare":"Mattias Arvola","typ":"Bokens","url":"https://s1.adlibris.com/images/57848729/interaktionsdesign-och-ux-om-att-skapa-en-god-anvandarupplevelse.jpg","kurskoder":"TNM100"},
{"titel":"Introduction to Data Compression","upplaga":5,"ar":2017,"forlag":"Morgan Kaufmann Publishers In","forfattare":"Sayood Khalid","typ":"Bokens","url":"https://s2.adlibris.com/images/29674740/introduction-to-data-compression.jpg","kurskoder":"TSBK35"},
{"titel":"Principles of Data Mining","upplaga":1,"ar":2001,"forlag":"A Bradford Book","forfattare":"David Hand, Heikki Mannila and Padhraic Smyth","typ":"Bokens","url":"https://images-na.ssl-images-amazon.com/images/I/41lvAwSmy0L._SX398_BO1,204,203,200_.jpg","kurskoder":"TNM098"},
{"titel":"Design Patterns: Elements of Object-Oriented Software","upplaga":1,"ar":1995,"forlag":"Addison Wesley","forfattare":"Gamma, Helm, et.al.","typ":"Bokens","url":"https://s2.adlibris.com/images/2622833/design-patterns.jpg","kurskoder":"TDDE45"},
{"titel":"Digital Color Imaging Handbook","upplaga":1,"ar":2002,"forlag":"CRC Press","forfattare":"Sharma","typ":"Bokens","url":"https://images-na.ssl-images-amazon.com/images/I/51KL72HI65L._SX321_BO1,204,203,200_.jpg","kurskoder":"TNM089"},
{"titel":"Computer Vision: Algorithms and Applications","upplaga":1,"ar":2010,"forlag":"Springer London Ltd","forfattare":"Szeliski Richard","typ":"Bokens","url":"https://s2.adlibris.com/images/1945467/computer-vision.jpg","kurskoder":"TNM089"},
{"titel":"So how can we make them scream?","upplaga":1,"ar":2017,"forlag":"Createspace Independent Publishing Platform","forfattare":"Ingemar Ragnemalm","typ":"Bokens","url":"https://image.bokus.com/images/9781974110650_200x_so-how-can-you-make-them-scream-course-book-in-advanced-game-programming_haftad","kurskoder":"TSBK03"},
{"titel":"Designing Interfaces","upplaga":3,"ar":2020,"forlag":"O'Reilly Media, Inc, USA","forfattare":"Jenifer Tidwell","typ":"Bokens","url":"https://s2.adlibris.com/images/52249675/designing-interfaces.jpg","kurskoder":"TDDC73"}];

function getLitteratureInfoFromCode(code){
    const arrayOfCourseObj = litteratureData.map(i =>{
        if(i.kurskoder === code){
            return i;
        }
        return undefined;
    })
    const result = arrayOfCourseObj.filter(i => {
        return i !== undefined;
    })
  
    return result;
}


export default litteratureData;
export {getLitteratureInfoFromCode};
