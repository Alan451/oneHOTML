FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /code/micro/auth/

#If we add the requirements and install dependencies first, docker can use cache if requirements don't change
ADD . /code/micro/auth/
RUN pip install pipenv && pipenv install --system
RUN sh -c "export FLASK_APP=server.py && export FLASK_ENV=development"
# COPY . /code/micro/

EXPOSE 5000
# CMD ["flask", "run", "--host=0.0.0.0"]