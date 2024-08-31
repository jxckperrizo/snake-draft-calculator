num_teams = 0
snake_picks = {}
rounds = 16
my_team_position = 5  # Replace with your team position (1-12)

for pos in range(1, num_teams + 1):
    picks = []

    for round in range(1, rounds + 1):
        if round % 2 == 0:
            draft_pick = (round * num_teams) - pos + 1
        else:
            draft_pick = ((round - 1) * num_teams) + pos

        picks.append(draft_pick)

    snake_picks[pos] = picks

# Print only your team's picks
if my_team_position in snake_picks:
    print(f' {", ".join(map(str,snake_picks[my_team_position]))}')
