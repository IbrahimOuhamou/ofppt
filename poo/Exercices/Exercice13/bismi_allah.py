#in the name of Allah

from livre import livre_t
from etagere import etagere_t

print("in the name of Allah")

print("la ilaha illa Allah")

etagere = etagere_t(2, [livre_t("la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah"), livre_t("la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah", "la ilaha illa Allah")])
print(len(etagere.liste))
print(etagere.liste[0].titre)

