import openai

openai.api_key = "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"

response = openai.Completion.create(
    engine="text-davinci-002",
    prompt="Once upon a time,",
    max_tokens=50
)

print(response['choices'][0]['text'])
