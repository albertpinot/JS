<?php
include 'includes/header.php';
?>

<main class="main">

    <section class="section">
        <div class="flex-head-form">
            <div class="padding-l">
                <h1 class="title centre-auto">Télécharger le bulletin d'adhésion</h1>
            </div>
            <div class="padding-bar width-x hide">
                <p class="title-bar font-size-m"> Remplissage du formulaire</p>
                <div class="flex-bar">
                    <span id="percent">0%</span>
                    <div class="bar">
                        <div class="progress-bar" id="laBar"></div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr width-l">
        <div class="padding-l">
            <form class="form">
                <div class="form-input">
                    <div class="container-flex-select">
                        <div class="align-v width-m-input relative">
                            <label for="profession"><span class="label"> Type de profession</span><span class="asterisk"> *</span></label>
                            <select class="champs" id="profession" name="profession">
                                <option selected>Sélectionnez votre type de profession</option>
                                <option>Cadre</option>
                                <option>Designer</option>
                            </select><div class="triangle3"></div>
                        </div>
                    </div>
                    <div class="container-flex-select">
                        <div class="align-v width-m-input margin-top-x relative">
                            <label for="statut"><span class="label"> J’ajoute un don pour participation à vos frais</span><span class="asterisk"> *</span></label>
                            <input  class="champs" id="don" name="don" type="number"><div id="haut" class="triangle2"></div><div id="bas" class="triangle3"></div>
                        </div>
                        <div class="align-v width-m-input margin-top-x">
                            <label for="name"> <span class="label">J’ajoute un don matériel de la nature suivante</span><span class="asterisk"> *</span></label>
                            <input class="champs" id="name" type="text" name="name" class="margin-bot-l" placeholder="Nom">
                        </div>     
                    </div>
                    <p class="asterisk italic">* Champ obligatoire</p>
                </div>
            </form>
        </div>
        <hr class="hr width-l">
        <div class="padding-l">
            <h1 class="title centre-auto">Télécharger la charte des adhérents<span class="uppercase">Taless</span></h1>
            <form class="form">
                <div class="padding-top-l padding-bot-x margin-bot-x margin-top-m"> 
                    <span class="bt-file padding-bt-file">Télécharger la charte à signer</span>
                </div>
            </form>
        </div>
        <hr class="hr width-l">
        <div class="padding-l">
            <h1 class="title centre-auto">Envoyer mes documents signés</h1>
            <form action="" method="POST" class="form margin-top-m" enctype="multipart/form-data">
                <div class="padding-top-x">
                    <div class="content-all-input-file">
                        <div class="margin-top-m">
                            <input id="parcourir_1" name="parcourir1[]" type="file" class="upload" multiple>
                            <label for="parcourir_1">
                                <div class="content-input-file">
                                    <div class="content-label-file">
                                        <span class="title-file">Bulletin d'adhésion</span>
                                    </div>
                                    <div class="flex-input-file drag">
                                        <span class="bt-file padding-bt-file">Parcourir</span>
                                        <span class="name-file none-file margin-left-m info"> Aucun fichier séléctioné</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div class="margin-top-l">
                            <input id="parcourir_2" name="parcourir2[]" type="file" class="input-file upload" multiple>
                            <label for="parcourir_2">
                                <div class="content-input-file">
                                    <div class="content-label-file">
                                        <span class="title-file">Charte d’adhésion</span>    
                                    </div>
                                    <div class="flex-input-file drag">
                                        <span class="bt-file padding-bt-file">Parcourir</span>   
                                        <span class="name-file none-file margin-left-m info">Aucun fichier séléctioné</span>
                                    </div>
                                </div>
                                
                            </label>
                        </div>
                        <div class="margin-top-l">
                            <input id="parcourir_3" name="parcourir3[]" type="file" class="input-file upload" multiple>
                            <label for="parcourir_3"> 
                                <div class="content-input-file">
                                    <div class="content-label-file">
                                        <span class="title-file">Photo d'indentité</span>
                                    </div>
                                    <div class="flex-input-file drag">
                                        <span class="bt-file padding-bt-file">Parcourir</span>
                                        <span class="name-file none-file margin-left-m info">Aucun fichier séléctioné</span>
                                    </div>
                                </div>
                            </label>
                        </div>        
                    </div>
                    <div class="padding-top-l align-bt-right">
                        <input type="submit" value="Suivant" class="padding-bt-next">
                    </div>
                </div>
            </form>
        </div>
    </section>

   
</main>








<?php
include 'includes/footer.php';
?>