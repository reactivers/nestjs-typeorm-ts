import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { createDataSource } from "./data-source";
import initGuards from "./guards";
import setupSwagger from "./swagger";

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    initGuards(app);
    await createDataSource();
    setupSwagger(app);
    await app.listen(3000);
  } catch (error) {
    console.error("Error during Data Source initialization", error);
  }
}

bootstrap();
