class Personnage 
{
    constructor(nom, sante, force) 
    {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0; // Toujours 0 au début
    }
    // Renvoie la description du personnage
    decrire() 
    {
        return `${this.nom} a ${this.sante} points de vie, ${
        this.force
      } en force et ${this.xp} points d'expérience`;
    }
}