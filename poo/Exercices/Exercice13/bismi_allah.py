#in the name of Allah

from livre import livre_t
from etagere import etagere_t

print("in the name of Allah")

print("la ilaha illa Allah")

etagere = etagere_t(8, [livre_t("la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah"), livre_t("la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah")])

etagere.ajouter(livre_t("la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah"))

print("================================================================")
print(etagere.get_livre(1))
print(etagere.get_livre(2))
print(etagere.get_livre(3))
print("================================================================")
print(etagere.chercher("la ilaha illa Allah", "la ilaha illa Allah"))
print(etagere.chercher_auteur("la ilaha illa Allah"))
print(etagere.chercher_titre("la ilaha illa Allah"))

print("================================================================")
etagere.enleve_livre(2)
print(etagere.liste)

etagere.enleve_livre_auteur("la ilaha illa Allah")
print(etagere.liste)


