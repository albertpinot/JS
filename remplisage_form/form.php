<?php
include 'includes/header.php';
?>

<main class="main">

    <section class="section">
        <div class="flex-head-form">
            <div class="padding-l">
                <h1 class="title centre-auto">Formulaire d'adhésion au syndicat <span class="uppercase">Taless</span></h1>
            </div>
            <div class="padding-bar width-x hide">
                <p class="title-bar font-size-m"> Remplissage du formulaire</p>
                <div class="flex-bar">
                    <div class="margin-right-m big-percent">
                        <span id="percent">0</span>%
                    </div>
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
                    <p class="label">Civilité</p>
                    <div class="flex-input-check">
                        <label for="m">
                            <span class="align-v label-margin-right">
                                <input class="champs" type="radio" name="sex" value="m" id="m"> 
                                <span class="label-check">Monsieur</span>
                            </span>
                        </label>
                        <div class="centre-h">
                            <label for="f">
                                <span class="align-v" >
                                    <input class="champs" type="radio" name="sex" value="f" id="f"> 
                                    <span class="label-check">Madame</span>
                                </span>
                            </label> 
                        </div>
                    </div>
                    <div class="container-flex-input margin-top-x">
                        <div class="align-v width-m-input margin-top-m ">
                            <label for="name"> <span class="label">Nom </span><span class="asterisk"> *</span></label>
                            <input class="champs" id="name" type="text" name="name" class="margin-bot-l" placeholder="Nom">
                        </div>
                        <div class="align-v width-m-input margin-top-m ">
                            <label for="firstname"><span class="label"> Prénom</span> <span class="asterisk">*</span></label>
                            <input class="champs" id="firstname" type="text" name="firstname" class="margin-bot-l" placeholder="Prénom">
                        </div>
                        <div class="align-v width-m-input margin-top-m">
                            <label for="job"><span class="label"> Profession ou fonction</span> <span class="asterisk">*</span></label>
                            <input class="champs" id="job" type="text" name="job" class="margin-bot-l" placeholder="Profession">
                        </div>
                        <div class="align-v width-m-input margin-top-m">
                            <label for="email"><span class="label"> Email</span> <span class="asterisk">*</span></label>
                            <input class="champs" id="email" type="email" name="email" class="margin-bot-l" placeholder="Email">
                        </div>
                        <div class="align-v width-m-input margin-top-m ">
                            <label for="password"><span class="label"> Mot de passe</span> <span class="asterisk">*</span></label>
                            <input class="champs" id="password" type="password" name="password" class="margin-bot-l" placeholder="Mot de passe">
                        </div>
                        <div class="align-v width-m-input margin-top-m ">
                            <label for="new-password"><span class="label"> Confirmez votre mot de passe</span> <span class="asterisk"> *</span></label>
                            <input class="champs" id="new-password" type="password" name="new-password" class="margin-bot-l" placeholder="Retapez votre mot de passe">
                        </div>
                    </div>
                    <p class="label">Avez vous des salariés ?<span class="asterisk"> *</span></p>
                    <div class="flex-input-check margin-bot-l">           
                        
                        <label for="oui">
                            <span class="align-v label-margin-right" >
                                <input class="champs" type="radio" name="salaried" value="oui" id="oui"> 
                                <span class="label-check">Oui</span>
                            </span>
                        </label>
                        
                        <div class="centre-h">
                            <label for="non"> 
                                <span class="align-v">
                                    <input class="champs" type="radio" name="salaried" value="non" id="non"> 
                                    <span class="label-check">Non</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="container-flex-select">
                        <div class="align-v width-m-input relative">
                            <label for="naf"><span class="label"> Code NAF</span><span class="asterisk">*</span></label>
                            <select class="champs" id="naf" name="naf">
                                <option selected class="placeholder-select">Veuillez choisir votre code NAF</option>
                                <option>123456</option>
                                <option>454878</option>
                            </select><div class="triangle3"></div>
                        </div>
                        <div class="align-v width-m-input margin-resp-x relative">
                            <label for="statut"><span class="label"> Forme juridique </span><span class="asterisk">*</span></label>
                            <select class="champs" id="statut" name="statut">
                                <option selected class="placeholder-select">Veuillez choisir votre statut juridique</option>                           
                                <option>SA</option>
                                <option>ESN</option>
                            </select><div class="triangle3"></div>
                        </div>
                    </div>
                </div> 
                <div class="item-flex padding-top-l">
                    <p class="asterisk italic">* Champ obligatoire</p>
                    <input type="submit" value="Suivant" class="padding-bt-next">
                </div>
            </form>
        </div>
    </section>

   
</main>

<?php
include 'includes/footer.php';
?>